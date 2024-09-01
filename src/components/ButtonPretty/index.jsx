import styles from "./buttonPretty.module.css";

import { FaArrowRight } from "react-icons/fa";

export default function ButtonPretty({ link, text }) {
  return (
    <a href={link} target="_blank" className={styles.button}>
      {text} <FaArrowRight />
    </a>
  );
}
