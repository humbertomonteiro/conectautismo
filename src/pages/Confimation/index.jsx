import styles from "./confirmation.module.css";

import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo/logo-png.png";

export default function Confirmation() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <h1>Obrigado por se inscrever!</h1>
      <p>
        Seu cadastro foi realizado com sucesso. Fique ligado para mais
        novidades!
      </p>
      <p>Siga-nos no Instagram para atualizações:</p>
      <Link
        to="https://www.instagram.com/conect.autismo/followers/"
        target="_blank"
        className={styles.instagramLink}
      >
        @conect.autismo
      </Link>
    </div>
  );
}
