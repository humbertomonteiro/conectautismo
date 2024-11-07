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
          <h1>PRE VENDA CONECT AUTISMO LIBERADO</h1>
          <p>
            Venha fazer parte do evento mais aguardado do ano! Se você está em
            busca de inspiração, conexões verdadeiras e momentos inesquecíveis,
            seu lugar é aqui!
          </p>
          <a
            href="https://pay.hotmart.com/A96222789P?off=2bsyn86r&bid=1730990288806"
            target="_blank"
            type="submit"
          >
            COMPRAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
