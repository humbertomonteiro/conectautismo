import styles from "./topPromoBar.module.css";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva para pré-venda</span> */}
      <span>ÚLTIMAS VAGAS.</span>

      <a href="#tickets">Aproveitar agora</a>
    </div>
  );
}
