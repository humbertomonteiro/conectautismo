import React, { useEffect, useRef } from "react";
import styles from "./partyTicket.module.css";
import ButtonPretty from "../../shared/ButtonPretty";

const TICKET_LINK = "https://pay.hotmart.com/D101401576U?off=irh31vpd";

const PartyTicket = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add(styles.revealed);
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} id="party-ticket">
      {/* Partículas decorativas */}
      <div className={styles.particles}>
        {[...Array(18)].map((_, i) => (
          <span key={i} className={styles.particle} style={{ "--i": i }} />
        ))}
      </div>

      {/* Linhas diagonais de fundo */}
      <div className={styles.bgLines}>
        <div
          className={styles.bgLine}
          style={{ "--r": "18deg", "--t": "8%" }}
        />
        <div
          className={styles.bgLine}
          style={{ "--r": "-22deg", "--t": "52%" }}
        />
        <div
          className={styles.bgLine}
          style={{ "--r": "30deg", "--t": "80%" }}
        />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header} data-reveal>
          <span className={styles.eyebrow}>✦ Edição Especial ✦</span>
          <h2 className={styles.title}>
            Festa <span className={styles.titleAccent}>Conect</span>
          </h2>
          <p className={styles.subtitle}>
            Uma noite inesquecível para celebrar conexões, conhecimento e
            alegria
          </p>
        </div>

        {/* Card principal do ingresso */}
        <div className={styles.ticketWrapper} data-reveal>
          <div className={styles.ticket}>
            {/* Metade esquerda */}
            <div className={styles.ticketLeft}>
              <div className={styles.ticketDecor}>
                <div className={styles.decorCircle1} />
                <div className={styles.decorCircle2} />
                <div className={styles.decorStar}>★</div>
              </div>

              <div className={styles.eventBadge}>
                <span>INGRESSO</span>
                <span className={styles.badgeYear}>2026</span>
              </div>

              <h3 className={styles.eventName}>
                FESTA
                <br />
                <span>CONECT</span>
              </h3>

              <div className={styles.eventMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📅</span>
                  <span>Agosto 2026</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>🎊</span>
                  <span>Noite de Celebração</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>✨</span>
                  <span>Experiência Exclusiva</span>
                </div>
              </div>

              <div className={styles.perksRow}>
                <span className={styles.perk}>Open Bar</span>
                <span className={styles.perkDot}>·</span>
                <span className={styles.perk}>DJ</span>
                <span className={styles.perkDot}>·</span>
                <span className={styles.perk}>Networking</span>
              </div>
            </div>

            {/* Corte perfurado */}
            <div className={styles.perforation}>
              {[...Array(12)].map((_, i) => (
                <span key={i} className={styles.dot} />
              ))}
            </div>

            {/* Metade direita — stub */}
            <div className={styles.ticketRight}>
              <div className={styles.stubLabel}>STUB</div>

              <div className={styles.qrPlaceholder}>
                <div className={styles.qrInner}>
                  <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
                    <rect
                      x="4"
                      y="4"
                      width="28"
                      height="28"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="16"
                      height="16"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="48"
                      y="4"
                      width="28"
                      height="28"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <rect
                      x="54"
                      y="10"
                      width="16"
                      height="16"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="4"
                      y="48"
                      width="28"
                      height="28"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <rect
                      x="10"
                      y="54"
                      width="16"
                      height="16"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="48"
                      y="48"
                      width="8"
                      height="8"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="62"
                      y="48"
                      width="8"
                      height="8"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="48"
                      y="62"
                      width="8"
                      height="8"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="62"
                      y="62"
                      width="8"
                      height="8"
                      rx="1"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className={styles.stubInfo}>
                <p className={styles.stubEventName}>FESTA CONECT</p>
                <p className={styles.stubSeat}>Acesso Geral</p>
              </div>

              <div className={styles.stubBarcode}>
                {[...Array(20)].map((_, i) => (
                  <span
                    key={i}
                    className={styles.bar}
                    style={{ height: `${20 + Math.sin(i * 1.3) * 14}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sombra / reflexo do ticket */}
          <div className={styles.ticketShadow} />
        </div>

        {/* CTA */}
        <div className={styles.ctaArea} data-reveal>
          {/* <div className={styles.priceHint}>
            <span className={styles.priceLabel}>Garanta seu lugar</span>
            <span className={styles.priceArrow}>↓</span>
          </div> */}

          {/* <a
            href={TICKET_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span className={styles.ctaButtonGlow} />
            <span className={styles.ctaButtonText}>🎟️ Comprar Ingresso</span>
          </a> */}
          <ButtonPretty
            text="GARANTIR AGORA"
            link={TICKET_LINK}
            target="_blank"
            rel="noopener noreferrer"
            styles={{ minWidth: "300px" }}
          />

          {/* <p className={styles.ctaNote}>
            Acesso via Hotmart · Pagamento seguro · Confirmação imediata
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default PartyTicket;
