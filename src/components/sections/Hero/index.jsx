import styles from "./Hero.module.css";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";
// import bg from "../../../assets/imgs/background/bg.jpg";
import bg from "../../../assets/imgs/background/hero.png";
import bgMobile from "../../../assets/imgs/background/hero-mobile.png";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* <div className={styles.backgroundOverlay}></div> */}
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={bg} alt="Imagem de pessoas felizes no conect autismo" />
        </div>
        <div className={styles.imageMobile}>
          <img
            src={bgMobile}
            alt="Imagem de pessoas felizes no conect autismo"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" />
          </div>
          <div className={styles.text}>
            <p className={styles.subtitle}>
              A 4ª edição já tem data. E você pode garantir seu lugar antes de
              todo mundo.
            </p>
            {/* <div className={styles.highlight}>
              <span className={styles.highlightMobile}>
                21, 22 e 23 de agosto 2026 | Centro de eventos do Ceará
              </span>
            </div> */}
            {/* <div className={styles.highlightText}>
              <h3>⚠️ ULTIMAS 100 INSCRIÇÕES!</h3>
              <p>
                É hora de se conectar. Sua virada de chave profissional se
                aproxima…
              </p>
            </div> */}
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
            <span className={styles.spanButtons}>
              Condição especial de abertura • Quantidade limitada
            </span>
            {/* <ButtonPretty
              link={"#party-ticket"}
              text={"Garanta Festa Conect"}
              data-color="yellow"
            /> */}
            {/* <ButtonPretty
              link={"https://congressoconect.pixieset.com"}
              text={"Fotos Conect 2025"}
              data-color="line"
              target="_blank"
              icon={<IoIosImages />}
            /> */}
            <ButtonPretty
              // link={"https://chat.whatsapp.com/J4YPyyOhufFIdp4x3rZSeQ?mode=wwt"}
              link={
                "https://chat.whatsapp.com/Jk4RP0kn3Jz18YTzYHidK5?s=cl&p=i&ilr=0"
              }
              text={"Grupo Congresso Conect"}
              data-color="line"
              target="_blank"
              icon={<FaWhatsapp />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
