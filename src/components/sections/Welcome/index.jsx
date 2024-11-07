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
          <p>Faça parte desse evento, lote promocional limitado conect 2025!</p>
          <button type="submit">COMPRAR AGORA</button>
        </div>
      </div>
    </section>
  );
}
