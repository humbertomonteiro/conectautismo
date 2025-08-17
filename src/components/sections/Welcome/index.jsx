import styles from "./welcome.module.css";

// import logo from "../../../assets/imgs/logo/logo-desktop.png";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";
import manualCongressista from "../../../assets/pdfs/manual-congressista.pdf";

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
            <h1>TERCEIRA EDIÇÃO</h1>
            <p>Maior congresso de neurodesenvolvimento do Norte e Nordeste</p>
          </div>
          {/* <h2>Últimos 50 ingressos</h2> */}
          <div className={styles.textHighlight}>21,22 e 23 de agosto 2026</div>
          <div className={styles.textHighlight}>Centro de eventos do Ceará</div>
          <div
            className={styles.buttons}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <ButtonPretty
              data-color="blue"
              link={manualCongressista}
              text={"Manual do Congressista"}
              icon={<FaBook />}
              target="_blank"
            />
            <ButtonPretty
              data-color="blue"
              link="/expositor"
              text={"Manual do Expositor"}
              icon={<FaBook />}
            />
            <ButtonPretty link={"#tickts"} text={"Lote Extra"} />
          </div>
        </div>
      </div>
    </section>
  );
}
