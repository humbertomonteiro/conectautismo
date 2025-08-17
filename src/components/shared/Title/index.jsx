import styles from "./title.module.css";

export default function Title({ text, costumerProp, color }) {
  const costumer = costumerProp;
  return (
    <div
      style={costumer}
      data-color={color}
      className={styles.title}
      data-aos="zoom-in"
    >
      <h2>{text.toUpperCase()}</h2>
    </div>
  );
}
