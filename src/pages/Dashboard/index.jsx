import { useState, useEffect, useCallback } from "react";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebaseConfig";
import styles from "./dashboard.module.css";
import Leads from "./Leads";

const BASE_URL = window.location.origin;

function generateSlug(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("influencers");
  const [influencers, setInfluencers] = useState([]);
  const [newName, setNewName] = useState("");
  const [creating, setCreating] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const ref = collection(db, "influencer-stats");
    return onSnapshot(ref, (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      data.sort((a, b) => (b.pageViews || 0) - (a.pageViews || 0));
      setInfluencers(data);
    });
  }, []);

  const slug = generateSlug(newName);
  const totalViews = influencers.reduce((s, i) => s + (i.pageViews || 0), 0);
  const totalClicks = influencers.reduce((s, i) => s + (i.hotmartClicks || 0), 0);
  const avgConversion =
    totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : "0.0";
  const maxViews = Math.max(...influencers.map((i) => i.pageViews || 0), 1);

  async function handleCreate(e) {
    e.preventDefault();
    if (!slug) return;
    setCreating(true);
    try {
      await setDoc(
        doc(db, "influencer-stats", slug),
        { name: newName.trim(), slug, pageViews: 0, hotmartClicks: 0, createdAt: serverTimestamp() },
        { merge: true }
      );
      setNewName("");
    } finally {
      setCreating(false);
    }
  }

  async function handleDelete(id, name) {
    if (!window.confirm(`Excluir "${name || id}"? Todos os dados serão perdidos.`)) return;
    setDeletingId(id);
    try {
      await deleteDoc(doc(db, "influencer-stats", id));
    } finally {
      setDeletingId(null);
    }
  }

  const copyToClipboard = useCallback(async (text, key) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(key);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  async function handleLogout() {
    await signOut(auth);
    navigate("/login");
  }

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerBrand}>
          <h1 className={styles.headerTitle}>Dashboard</h1>
          <span className={styles.headerSub}>Conect Autismo</span>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>Sair</button>
      </header>

      <nav className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === "influencers" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("influencers")}
        >
          Influencers
          {influencers.length > 0 && (
            <span className={styles.tabBadge}>{influencers.length}</span>
          )}
        </button>
        <button
          className={`${styles.tab} ${activeTab === "leads" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("leads")}
        >
          Leads
        </button>
      </nav>

      <main className={styles.content}>
        {activeTab === "influencers" ? (
          <>
            {/* ── Summary ── */}
            <div className={styles.summaryGrid}>
              <div className={styles.summaryCard}>
                <span className={styles.summaryValue}>
                  {totalViews.toLocaleString("pt-BR")}
                </span>
                <span className={styles.summaryLabel}>Visitas totais</span>
              </div>
              <div className={`${styles.summaryCard} ${styles.summaryGold}`}>
                <span className={styles.summaryValue}>
                  {totalClicks.toLocaleString("pt-BR")}
                </span>
                <span className={styles.summaryLabel}>Cliques no Hotmart</span>
              </div>
              <div className={styles.summaryCard}>
                <span className={styles.summaryValue}>{influencers.length}</span>
                <span className={styles.summaryLabel}>Influencers ativas</span>
              </div>
              <div className={styles.summaryCard}>
                <span className={styles.summaryValue}>{avgConversion}%</span>
                <span className={styles.summaryLabel}>Conversão média</span>
              </div>
            </div>

            {/* ── Create slug ── */}
            <div className={styles.createCard}>
              <h2 className={styles.createTitle}>Cadastrar nova influencer</h2>
              <form onSubmit={handleCreate} className={styles.createForm}>
                <div className={styles.createInputWrap}>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Nome da influencer (ex: Maria Silva)"
                    className={styles.createInput}
                    required
                  />
                  {slug && (
                    <div className={styles.slugPreviewRow}>
                      <div className={styles.slugItem}>
                        <span className={styles.slugItemLabel}>Link para seguidores</span>
                        <code className={styles.slugCode}>
                          {BASE_URL}?ref={slug}
                        </code>
                      </div>
                      <div className={styles.slugItem}>
                        <span className={styles.slugItemLabel}>Link de stats</span>
                        <code className={styles.slugCode}>
                          {BASE_URL}/stats/{slug}
                        </code>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={creating || !slug}
                  className={styles.createBtn}
                >
                  {creating ? "Criando..." : "+ Criar"}
                </button>
              </form>
            </div>

            {/* ── Influencer list ── */}
            {influencers.length === 0 ? (
              <div className={styles.emptyState}>
                <p className={styles.emptyTitle}>Nenhuma influencer cadastrada</p>
                <p className={styles.emptyDesc}>
                  Crie uma acima para começar a gerar links de rastreamento.
                </p>
              </div>
            ) : (
              <div className={styles.infGrid}>
                {influencers.map((inf) => {
                  const views = inf.pageViews || 0;
                  const clicks = inf.hotmartClicks || 0;
                  const rate =
                    views > 0 ? ((clicks / views) * 100).toFixed(1) : "0.0";
                  const viewsBar = Math.round((views / maxViews) * 100);
                  const clicksBar = Math.round((clicks / maxViews) * 100);
                  const landUrl = `${BASE_URL}?ref=${inf.id}`;
                  const stUrl = `${BASE_URL}/stats/${inf.id}`;

                  return (
                    <div key={inf.id} className={styles.infCard}>
                      <div className={styles.infCardHeader}>
                        <div>
                          <h3 className={styles.infName}>{inf.name || inf.id}</h3>
                          <span className={styles.infSlug}>/{inf.id}</span>
                        </div>
                        <button
                          onClick={() => handleDelete(inf.id, inf.name)}
                          className={styles.deleteBtn}
                          disabled={deletingId === inf.id}
                          title="Excluir"
                        >
                          {deletingId === inf.id ? "..." : "✕"}
                        </button>
                      </div>

                      {/* Stats row */}
                      <div className={styles.infStatsRow}>
                        <div className={styles.infStat}>
                          <span className={styles.infStatValue}>
                            {views.toLocaleString("pt-BR")}
                          </span>
                          <span className={styles.infStatLabel}>Visitas</span>
                        </div>
                        <div className={`${styles.infStat} ${styles.infStatGold}`}>
                          <span className={styles.infStatValue}>
                            {clicks.toLocaleString("pt-BR")}
                          </span>
                          <span className={styles.infStatLabel}>Hotmart</span>
                        </div>
                        <div className={styles.infStat}>
                          <span className={styles.infStatValue}>{rate}%</span>
                          <span className={styles.infStatLabel}>Conversão</span>
                        </div>
                      </div>

                      {/* Bar chart */}
                      <div className={styles.chart}>
                        <div className={styles.chartRow}>
                          <span className={styles.chartLabel}>Visitas</span>
                          <div className={styles.chartTrack}>
                            <div
                              className={styles.chartBar}
                              style={{ width: `${viewsBar}%` }}
                            />
                          </div>
                          <span className={styles.chartCount}>
                            {views.toLocaleString("pt-BR")}
                          </span>
                        </div>
                        <div className={styles.chartRow}>
                          <span className={styles.chartLabel}>Hotmart</span>
                          <div className={styles.chartTrack}>
                            <div
                              className={`${styles.chartBar} ${styles.chartBarGold}`}
                              style={{ width: `${clicksBar}%` }}
                            />
                          </div>
                          <span className={styles.chartCount}>
                            {clicks.toLocaleString("pt-BR")}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className={styles.infActions}>
                        <button
                          onClick={() => copyToClipboard(landUrl, `land-${inf.id}`)}
                          className={styles.actionBtn}
                        >
                          {copiedId === `land-${inf.id}` ? "✓ Copiado!" : "Copiar link"}
                        </button>
                        <button
                          onClick={() => copyToClipboard(stUrl, `st-${inf.id}`)}
                          className={`${styles.actionBtn} ${styles.actionBtnGold}`}
                        >
                          {copiedId === `st-${inf.id}` ? "✓ Copiado!" : "Link de stats"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <Leads />
        )}
      </main>
    </div>
  );
}
