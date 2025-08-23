import styles from "./topPromoBar.module.css";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      <span>Contagem regressiva para pré-venda</span>

      <a href="#tickets2">Aproveitar agora</a>
    </div>
  );
}
