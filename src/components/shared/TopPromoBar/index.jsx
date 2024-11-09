import styles from "./topPromoBar.module.css";
// import Contagem from "../Contagem";
// import ButtonPretty from "../ButtonPretty";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva</span> */}
      {/* <Contagem dateEvent={"07 nov 2024"} /> */}
      <p>DISPONIVEL POR TEMPO LIMITADO</p>
      <a
        href="#tickts"
        // target="_blank"
      >
        GARANTIR AGORA
      </a>
      {/* <ButtonPretty text={"Garanta sua vaga"} link={"#formEvent"} /> */}
    </div>
  );
}
