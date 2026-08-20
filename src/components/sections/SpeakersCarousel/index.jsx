import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import styles from "./SpeakersCarousel.module.css";
import ButtonPretty from "../../shared/ButtonPretty";

// Troque pelos palestrantes reais das edições anteriores.
// photo: caminho da foto (retrato, proporção vertical funciona melhor).
const DEFAULT_SPEAKERS = [
  { name: "Raphael Rangel", role: "Neuropediatra", photo: "" },
  { name: "Paula Frati", role: "Neuropsicóloga", photo: "" },
  { name: "Patricia Bastos", role: "Gestora Escolar", photo: "" },
  { name: "Hosana Gonçalves", role: "Neuropsicóloga", photo: "" },
  { name: "Erick Messias", role: "Psiquiatra", photo: "" },
];

export default function SpeakersCarousel({
  speakers = DEFAULT_SPEAKERS,
  ticketLink = "#tickets2",
}) {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.card}`);
    const cardWidth = card ? card.offsetWidth + 20 : 300;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Arquivo Conect</span>
        <h2 className={styles.title}>
          Quem já passou por este palco
          <br />
          ajuda a contar quem somos.
        </h2>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.track} ref={trackRef}>
          {speakers.map((speaker, index) => (
            <article className={styles.card} key={`${speaker.name}-${index}`}>
              <div className={styles.photoBox}>
                {speaker.photo ? (
                  <img
                    className={styles.photo}
                    src={speaker.photo}
                    alt={speaker.name}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.photoFallback} aria-hidden="true">
                    {speaker.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <div className={styles.photoFade} />
              </div>
              <div className={styles.plate}>
                <h3 className={styles.name}>{speaker.name}</h3>
                <p className={styles.role}>{speaker.role}</p>
              </div>
            </article>
          ))}

          {/* Card final: mistério proposital sobre a próxima edição */}
          <article className={`${styles.card} ${styles.mysteryCard}`}>
            <div className={styles.mysteryPhotoBox}>
              <div className={styles.mysterySilhouette}>
                <span className={styles.mysteryMark}>?</span>
                <span className={styles.orbit} />
                <span className={styles.orbit} />
                <span className={styles.orbit} />
              </div>
              <div className={styles.photoFade} />
            </div>
            <div className={styles.plate}>
              <h3 className={styles.mysteryTitle}>
                E quem estará aqui em 2027?
              </h3>
              <p className={styles.mysteryText}>
                Os primeiros nomes serão revelados em breve. Quem está na
                pré-venda não precisa esperar para garantir seu lugar.
              </p>
              <ButtonPretty
                text="Garantir minha vaga na pré-venda"
                link="#tickets"
              />
            </div>
          </article>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollByCard(-1)}
            aria-label="Ver palestrante anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => scrollByCard(1)}
            aria-label="Ver próximo palestrante"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
