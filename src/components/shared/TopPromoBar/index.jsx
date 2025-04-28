import styles from "./topPromoBar.module.css";
// import Contagem from "../Contagem";
// import ButtonPretty from "../ButtonPretty";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva</span> */}
      {/* <Contagem dateEvent={"07 nov 2024"} /> */}
      <p>INGRESSOS ESGOTADOS</p>
      <a
        href="#tickts"
        // target="_blank"
      >
        LISTA DE ESPERA
      </a>
      {/* <ButtonPretty text={"Garanta sua vaga"} link={"#formEvent"} /> */}
    </div>
  );
}
