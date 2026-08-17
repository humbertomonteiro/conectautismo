import styles from "./Hero.module.css";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";
// import bg from "../../../assets/imgs/background/bg.jpg";
import bg from "../../../assets/imgs/background/hero.png";
import bgMobile from "../../../assets/imgs/background/hero-mobile.png";
import { FaWhatsapp, FaCamera } from "react-icons/fa";
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
          </div>

          {/* Bloco de destaque - Cadastro Facial */}
          <div className={styles.facialCta}>
            <span className={styles.facialBadge}>NOVO</span>
            <p className={styles.facialText}>
              Faça seu <strong>cadastro facial</strong> e agilize sua entrada no
              evento!
            </p>
            <ButtonPretty
              link={"https://www.byface.com.br/login/cadastro"}
              text={"Cadastrar rosto"}
              data-color="red"
              target="_blank"
              icon={<FaCamera />}
            />
          </div>

          <div className={styles.buttons} data-aos-delay="300">
            <ButtonPretty link={"#tickets2"} text={"Garanta sua vaga agora"} />
            <span className={styles.spanButtons}>
              Condição especial de abertura • Quantidade limitada
            </span>
            <ButtonPretty
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
