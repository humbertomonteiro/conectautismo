import { useEffect, useRef, useState } from "react";
import ButtonPretty from "../../shared/ButtonPretty";
import styles from "./PreSaleScarcity.module.css";

const TICKET_LINK = "https://eurekha.com.br/v/4545/congresso-conect-2027";

export default function PreSaleScarcity({
  totalTickets = 500,
  soldTickets = 389,
  backgroundImage = "",
  ticketLink = TICKET_LINK,
}) {
  const sectionRef = useRef(null);
  const [filled, setFilled] = useState(false);

  const remaining = Math.max(totalTickets - soldTickets, 0);
  const percent = Math.min(Math.round((soldTickets / totalTickets) * 100), 100);
  const filledBlocks = Math.round(percent / 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.bgLayer} aria-hidden="true">
        {backgroundImage ? (
          <img
            className={styles.bgImage}
            src={backgroundImage}
            alt=""
            loading="lazy"
          />
        ) : (
          <div className={styles.bgPattern} />
        )}
        <div className={styles.bgFade} />
      </div>

      <div className={styles.container}>
        <span className={styles.eyebrow}>Pré-venda limitada</span>

        <p className={styles.lead}>
          {totalTickets} ingressos disponibilizados nesta fase.
        </p>

        <div className={styles.progressBlock}>
          <div className={styles.blocks}>
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`${styles.block} ${
                  filled && i < filledBlocks ? styles.blockFilled : ""
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              />
            ))}
          </div>
          <span className={styles.percent}>{filled ? percent : 0}%</span>
        </div>

        <p className={styles.remaining}>
          <strong>{remaining}</strong> lugares restantes na condição de
          pré-venda.
        </p>

        <p className={styles.note}>
          Após o encerramento desta disponibilidade, entra em vigor o próximo
          lote.
        </p>

        <div className={styles.ctaArea}>
          <ButtonPretty
            text="GARANTIR CONDIÇÃO ATUAL"
            link={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </section>
  );
}
