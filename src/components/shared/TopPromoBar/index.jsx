import styles from "./topPromoBar.module.css";
import Contagem from "../Contagem";
// import ButtonPretty from "../ButtonPretty";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      <span>Contagem regressiva para pré-venda</span>
      <Contagem dateEvent={"22/08/2025"} />
      {/* <p>INGRESSOS ESGOTADOS</p> */}
      {/* <a data-color="blue" href="/expositor">
        MANUAL DO EXPOSITOR
      </a> */}
      <a
        href="#tickts"
        // target="_blank"
      >
        COMPRAR
      </a>
      {/* <ButtonPretty text={"Garanta sua vaga"} link={"#formEvent"} /> */}
    </div>
  );
}
