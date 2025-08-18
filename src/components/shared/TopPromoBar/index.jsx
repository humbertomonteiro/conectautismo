import styles from "./topPromoBar.module.css";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      <span>Contagem regressiva para pré-venda</span>
      {/* <p>INGRESSOS ESGOTADOS</p> */}
      {/* <a data-color="blue" href="/expositor">
        MANUAL DO EXPOSITOR
      </a> */}
      <a
        href="#tickts"
        // target="_blank"
      >
        Aproveitar agora
      </a>
      {/* <ButtonPretty text={"Garanta sua vaga"} link={"#formEvent"} /> */}
    </div>
  );
}
