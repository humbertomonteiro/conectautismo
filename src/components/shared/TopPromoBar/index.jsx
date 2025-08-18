import styles from "./topPromoBar.module.css";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      <span>Contagem regressiva para pré-venda</span>

      <a href="#tickts">Aproveitar agora</a>
    </div>
  );
}
