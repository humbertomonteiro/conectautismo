import styles from "./formEvent.module.css";

import logo from "../../../assets/imgs/logo/logo-png.png";

export default function FormEvent() {
  return (
    <section id="formEvent">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img loading="lazy" src={logo} alt="Logo Conect Autismo" />
          </div>
          <h1>PRÉ-VENDA LOTE PROMOCIONAL. </h1>
          <p>
            Se inscreva pra ter acesso a pré-venda exclusiva do lote promocial
            limitado conect 2025.
          </p>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Digite seu nome" required />
          <input type="number" placeholder="Digite seu número" required />
          <input type="email" placeholder="Digite seu email" required />
          <button>QUERO ME CONECTAR</button>
        </form>
      </div>
    </section>
  );
}
