import styles from "./welcome.module.css";

// import logo from "../../../assets/imgs/logo/logo-desktop.png";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";

import { FaBook } from "react-icons/fa";

export default function Welcome() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo} data-aos="zoom-out">
            <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" />
          </div>
          <div className={styles.text} data-aos="zoom-in" data-aos-dalay="300">
            <h1>SEGUNDA EDIÇÃO</h1>
            <p>
              Maior Congresso de TEA Norte e Nordeste. 23 & 24 de agosto de
              2025.
            </p>
          </div>
          <h2>Últimos 100 ingressos</h2>
          <div
            className={styles.buttons}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <ButtonPretty
              data-color="blue"
              link="/expositor"
              text={"Manual do expositor"}
              icon={<FaBook />}
            />
            <ButtonPretty link={"#tickts"} text={"LOTE EXTRA"} />
          </div>
        </div>
      </div>
    </section>
  );
}
