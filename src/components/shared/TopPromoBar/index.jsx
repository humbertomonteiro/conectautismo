import styles from "./topPromoBar.module.css";
// import Contagem from "../Contagem";
// import ButtonPretty from "../ButtonPretty";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva</span> */}
      {/* <Contagem dateEvent={"07 nov 2024"} /> */}
      {/* <p>INGRESSOS ESGOTADOS</p> */}
      <a data-color="blue" href="/patrocinador">
        MANUAL DO PATROCINADOR
      </a>
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
