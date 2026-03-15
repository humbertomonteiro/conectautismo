// HeroPromo.jsx — Componente genérico para heroes de datas comemorativas
// Basta trocar as props para cada campanha!
//
// EXEMPLO DE USO:
//
// Black Friday:
// <HeroPromo config={BLACK_FRIDAY_CONFIG} />
//
// Semana do Consumidor:
// <HeroPromo config={SEMANA_CONSUMIDOR_CONFIG} />

import styles from "./HeroPromo.module.css";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";
import Contagem from "../../shared/Contagem";
import CarouselScrollInfinit from "../../shared/CarouselScrollInfinity";

// ─────────────────────────────────────────────
// CONFIGURAÇÕES DE CADA CAMPANHA
// Edite aqui para adicionar novas promoções!
// ─────────────────────────────────────────────

export const BLACK_FRIDAY_CONFIG = {
  // Título principal em destaque
  campaignTitle: "BLACK FRIDAY",

  // Texto no canto (desktop)
  desktopBadgeTop: "ATÉ",
  desktopBadgeMain: "40%",
  desktopBadgeSub: "DE DESCONTO",

  // Subtítulo
  subtitle: (
    <>
      Maior Congresso sobre transtorno do <strong>Neurodesenvolvimento</strong>{" "}
      Norte e Nordeste.
    </>
  ),

  // Contagem regressiva (null para esconder)
  countdownLabel: "Black termina em:",
  countdownDate: "01/12/2025",

  // Informações do evento
  eventDate: "21, 22 e 23 de agosto 2026",
  eventLocation: "Centro de eventos do Ceará",

  // Botão
  buttonText: "Garanta sua vaga agora",
  buttonLink: "#tickets2",

  // Tema de cores (sobrescreve variáveis CSS)
  // Use null para usar o padrão
  theme: {
    accentColor: "#FFD700", // Amarelo gold para Black Friday
    titleColor: "#FFD700",
    bgGradient: "linear-gradient(to bottom, #001c55e7, #000030e0, #000000f3)",
  },
};

export const SEMANA_CONSUMIDOR_CONFIG = {
  campaignTitle: "SEMANA DO CONSUMIDOR",

  desktopBadgeTop: "ATÉ",
  desktopBadgeMain: "40%",
  desktopBadgeSub: "DE DESCONTO",

  subtitle: (
    <>
      Maior Congresso sobre transtorno do <strong>Neurodesenvolvimento</strong>{" "}
      Norte e Nordeste.
    </>
  ),

  countdownLabel: "Promoção termina em:",
  countdownDate: "17/03/2026",

  eventDate: "21, 22 e 23 de agosto 2026",
  eventLocation: "Centro de eventos do Ceará",

  buttonText: "Aproveite a oferta",
  buttonLink: "#tickets2",

  theme: {
    accentColor: "#00C2FF", // Azul vibrante para Semana do Consumidor
    titleColor: "#00C2FF",
    bgGradient: "linear-gradient(to bottom, #001a3ae7, #000d2ee0, #000018f3)",
  },
};

// ─────────────────────────────────────────────
// COMPONENTE
// ─────────────────────────────────────────────

export default function HeroPromo({ config = SEMANA_CONSUMIDOR_CONFIG }) {
  const {
    campaignTitle,
    desktopBadgeTop,
    desktopBadgeMain,
    desktopBadgeSub,
    subtitle,
    countdownLabel,
    countdownDate,
    eventDate,
    eventLocation,
    buttonText,
    buttonLink,
    theme,
  } = config;

  // Injeta as cores do tema via CSS custom properties inline
  const themeVars = theme
    ? {
        "--promo-accent": theme.accentColor,
        "--promo-title-color": theme.titleColor,
        "--promo-bg-gradient": theme.bgGradient,
      }
    : {};

  return (
    <section className={styles.section} style={themeVars}>
      {/* Badge desktop (canto superior esquerdo) */}
      {desktopBadgeMain && (
        <div className={styles.textDesktop}>
          {desktopBadgeTop && <span>{desktopBadgeTop}</span>} {desktopBadgeMain}{" "}
          {desktopBadgeSub && (
            <div className={styles.textDesktopLittle}>{desktopBadgeSub}</div>
          )}
        </div>
      )}

      <div className={styles.backgroundOverlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Título da campanha */}
          <div className={styles.highlightFont}>
            <p>{campaignTitle}</p>
          </div>

          {/* Logo */}
          <div className={styles.logo} data-aos="zoom-in">
            <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" />
          </div>

          {/* Texto */}
          <div className={styles.text} data-aos="zoom-in" data-aos-delay="300">
            <p className={styles.subtitle}>{subtitle}</p>

            {/* Contagem regressiva */}
            {countdownDate && (
              <div
                className={styles.countdown}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                {countdownLabel && <span>{countdownLabel}</span>}
                <Contagem dateEvent={countdownDate} />
              </div>
            )}

            {/* Datas e local */}
            {(eventDate || eventLocation) && (
              <div className={styles.highlight}>
                {eventDate && (
                  <span className={styles.highlightMobile}>{eventDate}</span>
                )}
                {eventDate && eventLocation && (
                  <span className={styles.divider}>|</span>
                )}
                {eventLocation && (
                  <span className={styles.highlightMobile}>
                    {eventLocation}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Botão */}
          {buttonText && (
            <div className={styles.buttons} data-aos-delay="300">
              <ButtonPretty
                link={buttonLink}
                text={buttonText}
                data-color="yellow"
              />
            </div>
          )}
        </div>
      </div>

      {/* Linhas decorativas com carrossel */}
      <div className={styles.line1}>
        <CarouselScrollInfinit
          dataSlideDouble={{ first: "SEMANA", second: "CONSUMIDOR" }}
        />
      </div>
      <div className={styles.line2}>
        <CarouselScrollInfinit
          dataSlideDouble={{ first: "SEMANA", second: "CONSUMIDOR" }}
        />
      </div>
      <div className={styles.line3}>
        <CarouselScrollInfinit
          dataSlideDouble={{ first: "SEMANA", second: "CONSUMIDOR" }}
        />
      </div>
    </section>
  );
}
