import { useState, useEffect, useMemo } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import styles from "./dashboard.module.css";

function exportCSV(leads) {
  const BOM = "﻿";
  const headers = ["#", "Nome", "Email", "Telefone"];
  const rows = leads.map((lead, i) => [
    i + 1,
    lead.name || "",
    lead.email || "",
    lead.number || lead.phone || "",
  ]);
  const csv = [headers, ...rows]
    .map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");

  const blob = new Blob([BOM + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const ref = collection(db, "cadastros");
    return onSnapshot(ref, (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setLeads(data);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return leads;
    return leads.filter(
      (l) =>
        (l.name || "").toLowerCase().includes(q) ||
        (l.email || "").toLowerCase().includes(q) ||
        (l.number || l.phone || "").toLowerCase().includes(q)
    );
  }, [leads, search]);

  return (
    <div>
      <div className={styles.leadsHeader}>
        <div>
          <h2 className={styles.sectionTitle}>Leads cadastrados</h2>
          <p className={styles.sectionDesc}>
            Pessoas que preencheram o formulário de interesse
          </p>
        </div>
        <div className={styles.leadsActions}>
          <span className={styles.badge}>{leads.length} total</span>
          <button
            onClick={() => exportCSV(filtered)}
            className={styles.exportBtn}
            disabled={leads.length === 0}
            title="Exportar como Excel/CSV"
          >
            ↓ Exportar Excel
          </button>
        </div>
      </div>

      <div className={styles.searchWrap}>
        <svg className={styles.searchIcon} viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por nome, email ou telefone..."
          className={styles.searchInput}
        />
        {search && (
          <button className={styles.searchClear} onClick={() => setSearch("")}>
            ✕
          </button>
        )}
      </div>

      {search && (
        <p className={styles.searchResult}>
          {filtered.length === 0
            ? "Nenhum resultado encontrado"
            : `${filtered.length} resultado${filtered.length !== 1 ? "s" : ""} para "${search}"`}
        </p>
      )}

      {loading ? (
        <p className={styles.loadingText}>Carregando...</p>
      ) : leads.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyTitle}>Nenhum lead ainda</p>
          <p className={styles.emptyDesc}>
            Os leads aparecerão aqui quando alguém preencher o formulário.
          </p>
        </div>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>#</th>
                <th className={styles.th}>Nome</th>
                <th className={styles.th}>Email</th>
                <th className={styles.th}>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead, idx) => (
                <tr key={lead.id} className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdMuted}`}>{idx + 1}</td>
                  <td className={styles.td}>
                    <Highlight text={lead.name || "—"} query={search} />
                  </td>
                  <td className={styles.td}>
                    {lead.email ? (
                      <a href={`mailto:${lead.email}`} className={styles.emailLink}>
                        <Highlight text={lead.email} query={search} />
                      </a>
                    ) : "—"}
                  </td>
                  <td className={`${styles.td} ${styles.tdMuted}`}>
                    <Highlight
                      text={lead.number || lead.phone || "—"}
                      query={search}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Highlight({ text, query }) {
  if (!query.trim()) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className={styles.highlight}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}
