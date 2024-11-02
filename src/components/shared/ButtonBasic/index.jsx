import styles from "./buttonBasic.module.css";

export default function ButtonBasic({ link, text, icon }) {
  return (
    <a href={link} className={styles.buttonBasic}>
      {text} {icon}
    </a>
  );
}
