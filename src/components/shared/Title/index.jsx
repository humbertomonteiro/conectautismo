import styles from "./title.module.css";

export default function Title({ text }) {
  return (
    <div className={styles.title} data-aos="zoom-in">
      <h2>{text.toUpperCase()}</h2>
    </div>
  );
}
