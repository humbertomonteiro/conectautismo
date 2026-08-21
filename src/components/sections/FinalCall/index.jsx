import ButtonPretty from "../../shared/ButtonPretty";
import styles from "./FinalCall.module.css";

const TICKET_LINK = "https://eurekha.com.br/v/4545/congresso-conect-2027";

export default function FinalCall({
  backgroundImage = "",
  ticketLink = TICKET_LINK,
  ctaText = "SIM. QUERO GARANTIR MEU LUGAR",
  phaseLabel = "PRÉ-VENDA ABERTA • DISPONIBILIDADE LIMITADA",
}) {
  return (
    <section className={styles.section}>
      <div className={styles.bgLayer} aria-hidden="true">
        {backgroundImage ? (
          <img
            className={styles.bgImage}
            src={backgroundImage}
            alt="Auditório do Conect Autismo lotado"
            loading="lazy"
          />
        ) : (
          <div className={styles.bgFallback} />
        )}
        {/* <div className={styles.bgFade} /> */}
      </div>

      <div className={styles.container}>
        <span className={styles.date}>14 e 15 de agosto de 2027</span>

        <h2 className={styles.headline}>
          Quando as luzes se acenderem novamente,
          <br />
          <span className={styles.headlineAccent}>você vai estar aqui?</span>
        </h2>

        <div className={styles.eventInfo}>
          <span className={styles.eventName}>Conect Autismo 2027</span>
          <span className={styles.eventDot}>•</span>
          <span className={styles.eventLocation}>Fortaleza • CE</span>
        </div>

        <div className={styles.ctaArea}>
          <ButtonPretty
            text={ctaText}
            link={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        <span className={styles.phaseLabel}>{phaseLabel}</span>
      </div>
    </section>
  );
}
