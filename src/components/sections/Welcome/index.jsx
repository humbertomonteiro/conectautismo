import styles from "./welcome.module.css";

import logo from "../../../assets/imgs/logo/logo-png.png";
import ButtonPretty from "../../shared/ButtonPretty";

import { FaBook } from "react-icons/fa";

export default function Welcome() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img loading="lazy" src={logo} alt="Logo Conect Autismo" />
          </div>
          <h1>Segunda edição </h1>
          <p>
            Maior Congresso de TEA Norte e Nordeste. 23 & 24 de agosto de 2025.
          </p>
          <h2>INGRESSOS ESGOTADOS</h2>
          <div className={styles.buttons}>
            <ButtonPretty
              data-color="blue"
              link="/expositor"
              text={"Manual do expositor"}
              icon={<FaBook />}
            />
            <ButtonPretty link={"#tickts"} text={"Entrar na lista de espera"} />
          </div>
        </div>
      </div>
    </section>
  );
}
