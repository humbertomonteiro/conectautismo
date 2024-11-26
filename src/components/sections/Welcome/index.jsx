import styles from "./welcome.module.css";

import logo from "../../../assets/imgs/logo/logo-png.png";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Welcome() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img loading="lazy" src={logo} alt="Logo Conect Autismo" />
          </div>
          <h1>Segunda edição Conect Autismo</h1>
          <p>
            Prepare-se para a 2ª edição do maior Congresso de TEA Norte e
            Nordeste. 23 & 24 de agosto de 2025.
          </p>
          <ButtonPretty link={"#tickts"} text={"ingressos limitados"} />
        </div>
      </div>
    </section>
  );
}
