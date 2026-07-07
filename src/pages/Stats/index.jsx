import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../../firebaseConfig";
import styles from "./stats.module.css";
import {
  RiEyeLine,
  RiShoppingBag3Line,
  RiLineChartLine,
  RiLink,
  RiFileCopyLine,
  RiCheckLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";

const BASE_URL = window.location.origin;

export default function Stats() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ pageViews: 0, hotmartClicks: 0, name: "" });
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ref = doc(db, "influencer-stats", slug);
    return onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setStats({ pageViews: 0, hotmartClicks: 0, name: "", ...snap.data() });
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    });
  }, [slug]);

  async function handleLogout() {
    await signOut(auth);
    navigate("/login");
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(landingUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  const conversionRate =
    stats.pageViews > 0
      ? ((stats.hotmartClicks / stats.pageViews) * 100).toFixed(1)
      : "0.0";

  const displayName = stats.name || slug.replace(/-/g, " ");
  const landingUrl = `${BASE_URL}?ref=${slug}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>Conect Autismo</span>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <RiLogoutBoxRLine size={15} />
          Sair
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.intro}>
          <p className={styles.introLabel}>Resultados de</p>
          <h1 className={styles.name}>{displayName}</h1>
        </div>

        {notFound ? (
          <div className={styles.notFoundCard}>
            <p className={styles.notFoundTitle}>Nenhum dado ainda</p>
            <p className={styles.notFoundDesc}>
              Compartilhe o link abaixo para começar a rastrear visitas.
            </p>
          </div>
        ) : (
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={`${styles.iconBadge} ${styles.iconBlue}`}>
                <RiEyeLine size={20} />
              </div>
              <span className={styles.cardValue}>
                {stats.pageViews.toLocaleString("pt-BR")}
              </span>
              <span className={styles.cardLabel}>Visitaram a página</span>
            </div>

            <div className={`${styles.card} ${styles.cardGold}`}>
              <div className={`${styles.iconBadge} ${styles.iconGold}`}>
                <RiShoppingBag3Line size={20} />
              </div>
              <span className={styles.cardValue}>
                {stats.hotmartClicks.toLocaleString("pt-BR")}
              </span>
              <span className={styles.cardLabel}>Foram para o Hotmart</span>
            </div>

            <div className={styles.card}>
              <div className={`${styles.iconBadge} ${styles.iconGreen}`}>
                <RiLineChartLine size={20} />
              </div>
              <span className={styles.cardValue}>{conversionRate}%</span>
              <span className={styles.cardLabel}>Taxa de conversão</span>
            </div>
          </div>
        )}

        <div className={styles.linkCard}>
          <div className={styles.linkCardHeader}>
            <RiLink size={15} />
            <span>Seu link de divulgação</span>
          </div>
          <div className={styles.linkRow}>
            <span className={styles.linkText}>{landingUrl}</span>
            <button
              onClick={handleCopy}
              className={`${styles.copyBtn} ${copied ? styles.copyBtnDone : ""}`}
            >
              {copied ? <RiCheckLine size={15} /> : <RiFileCopyLine size={15} />}
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
          <p className={styles.linkHint}>
            Compartilhe este link nas suas redes sociais para rastrear suas visitas.
          </p>
        </div>

        <div className={styles.liveIndicator}>
          <span className={styles.liveDot} />
          Dados em tempo real
        </div>
      </main>
    </div>
  );
}
