import styles from "./Hero.module.css";
import bgDesktop from "../../../assets/imgs/background/bg-910x410.jpeg";
import bgMobile from "../../../assets/imgs/background/bg-500x500.jpeg";
import ButtonPretty from "../../shared/ButtonPretty";

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
          className={styles.bgMobile}
          src={bgMobile}
          alt="Background Conect 2027"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            TEM COISA QUE VOCÊ APRENDE. TEM COISA QUE VOCÊ VIVE. NO CONECT, AS
            DUAS ACONTECEM.
          </h1>
          <p>
            A 5ª edição já tem data. E você pode garantir seu lugar antes de
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
