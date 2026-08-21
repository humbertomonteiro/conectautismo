import styles from "./topPromoBar.module.css";

export default function TopPromoBar() {
  return (
    <div className={styles.container}>
      {/* <span>Contagem regressiva para pré-venda</span> */}
      <span>24 horas pré venda valor exclusivo</span>

      <a href="#tickets">Aproveitar agora</a>
    </div>
  );
}
