import styles from "./welcome.module.css";

import logo from "../../../assets/imgs/logo/logo-png.png";

export default function Welcome() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img loading="lazy" src={logo} alt="Logo Conect Autismo" />
          </div>
          <h1>VENDA LOTE PROMOCIONAL. </h1>
          <p>Faça parte desse evento, não perca!</p>
          <button type="submit">COMPRAR AGORA</button>
        </div>
      </div>
    </section>
  );
}
