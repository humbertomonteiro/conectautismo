import styles from "./Hero.module.css";
import bgDesktop from "../../../assets/imgs/background/bg-910x410.png";
import bgMeddium from "../../../assets/imgs/background/bg-500x500.png";
import bgMobile from "../../../assets/imgs/background/bg-1920x1080.png";
import ButtonPretty from "../../shared/ButtonPretty";
// import logo from "../../../assets/imgs/logo/logo.png";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img
          className={styles.bgDesktop}
          src={bgDesktop}
          alt="Background Conect 2027"
        />
        <img
          className={styles.bgMeddium}
          src={bgMeddium}
          alt="Background Conect 2027"
        />
        <img
          className={styles.bgMobile}
          src={bgMobile}
          alt="Background Conect 2027"
        />
      </div>
      <div className={styles.content}>
        {/* <img
          className={styles.logo}
          src={logo}
          alt="Logo Conect"
          data-aos="zoom-in"
        /> */}
        <div className={styles.text} data-aos="zoom-in">
          <h1>
            TEM COISA QUE <span>VOCÊ APRENDE</span>. TEM COISA QUE{" "}
            <span>VOCÊ VIVE</span>. NO CONECT, AS DUAS ACONTECEM.
          </h1>
          <p>
            A 4ª edição já tem data. E você pode garantir seu lugar antes de
            todo mundo.
          </p>
          <div className={styles.buttons}>
            <ButtonPretty text="GARANTIR MEU LUGAR" link="#tickets" />
          </div>
          <span>Condição especial de abertura • Quantidade limitada</span>
        </div>
      </div>
    </div>
  );
}
