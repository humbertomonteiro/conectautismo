import { useEffect, useRef, useState } from "react";
import styles from "./AuthorityStats.module.css";

// value: número final (sem o "+"). suffix: texto livre tipo "estados representados".
// prefix: "+" quando for "mais de", vazio quando for número fechado (ex: 4 edições).
const DEFAULT_STATS = [
  { value: 4000, prefix: "+", label: "Congressistas" },
  { value: 30, prefix: "+", label: "Grandes referências" },
  { value: 15, prefix: "", label: "Estados representados" },
  { value: 4, prefix: "", label: "Edições realizadas" },
];

function useCountUp(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame;
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function StatItem({ stat }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(stat.value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.statItem} ref={ref}>
      <span className={styles.statNumber}>
        {stat.prefix}
        {count.toLocaleString("pt-BR")}
      </span>
      <span className={styles.statLabel}>{stat.label}</span>
    </div>
  );
}

export default function AuthorityStats({
  stats = DEFAULT_STATS,
  edition = "4ª edição",
  year = "2027",
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Você sabe onde está comprando</span>

        <h2 className={styles.title}>
          3 edições construíram essa história.
          <br />
          <span className={styles.titleAccent}>A 4ª começa agora.</span>
        </h2>

        {/* <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatItem stat={stat} key={`${stat.label}-${index}`} />
          ))}
        </div> */}

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {edition.toUpperCase()} • {year}
        </div>
      </div>
    </section>
  );
}
