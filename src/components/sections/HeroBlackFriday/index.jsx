import styles from "./heroBlackFriday.module.css";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";
// import bg from "../../../assets/imgs/background/bg.jpg";
// import bg from "../../../assets/imgs/background/bg-mobile.jpeg";
// import { FaWhatsapp } from "react-icons/fa";
// import { IoIosImages } from "react-icons/io";
import Contagem from "../../shared/Contagem";
import CarouselScrollInfinit from "../../shared/CarouselScrollInfinity";

export default function HeroBlackFriday() {
  return (
    <section className={styles.section}>
      <div className={styles.textDesktop}>
        <span>ATÉ</span> 40%{" "}
        <div className={styles.textDesktopLittle}>DE DESCONTO</div>
      </div>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.highlightFont}>
            <p>BLACK FRIDAY</p>
          </div>
          <div className={styles.logo} data-aos="zoom-in">
            <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" />
          </div>
          <div className={styles.text} data-aos="zoom-in" data-aos-delay="300">
            <p className={styles.subtitle}>
              Maior Congresso sobre transtorno do{" "}
              <strong>Neurodesenvolvimento</strong> Norte e Nordeste.
            </p>
            <div
              className={styles.countdown}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span>Black termina em:</span>
              <Contagem dateEvent={"01/12/2025"} />
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightMobile}>
                21, 22 e 23 de agosto 2026
              </span>{" "}
              <span className={styles.divider}>|</span>{" "}
              <span className={styles.highlightMobile}>
                Centro de eventos do Ceará
              </span>
            </div>
          </div>

          <div className={styles.buttons} data-aos-delay="300">
            <ButtonPretty
              link={"#tickets2"}
              text={"Garanta sua vaga agora"}
              data-color="yellow"
            />
          </div>
        </div>
      </div>
      <div className={styles.line1}>
        <CarouselScrollInfinit />
      </div>
      <div className={styles.line2}>
        <CarouselScrollInfinit />
      </div>
      <div className={styles.line3}>
        <CarouselScrollInfinit />
      </div>
    </section>
  );
}
