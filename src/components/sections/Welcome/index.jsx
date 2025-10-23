import styles from "./welcome.module.css";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";
// import bg from "../../../assets/imgs/background/bg.jpg";
import bg from "../../../assets/imgs/background/bg-mobile.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";

export default function Welcome() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo} data-aos="zoom-in">
            <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" />
          </div>
          <div className={styles.text} data-aos="zoom-in" data-aos-delay="300">
            <p className={styles.subtitle}>
              Maior Congresso sobre transtorno do{" "}
              <strong>Neurodesenvolvimento</strong> Norte e Nordeste.
            </p>
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
          {/* <div
            className={styles.countdown}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span>Pré-venda termina em:</span>
            <Contagem dateEvent={"28/08/2025"} />
          </div> */}
          <div className={styles.buttons} data-aos-delay="300">
            <ButtonPretty link={"#tickets2"} text={"Garanta sua vaga agora"} />
            <ButtonPretty
              link={"https://congressoconect.pixieset.com"}
              text={"Fotos Conect 2025"}
              data-color="line"
              target="_blank"
              icon={<IoIosImages />}
            />
            <ButtonPretty
              link={"https://chat.whatsapp.com/J4YPyyOhufFIdp4x3rZSeQ?mode=wwt"}
              text={"Grupo Congresso Conect"}
              data-color="line"
              target="_blank"
              icon={<FaWhatsapp />}
            />
          </div>
        </div>
        <div className={styles.image}>
          <img src={bg} alt="Imagem de pessoas felizes no conect autismo" />
        </div>
      </div>
    </section>
  );
}
