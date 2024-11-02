import styles from "./buttonPretty.module.css";

import { FaArrowRight } from "react-icons/fa";

export default function ButtonPretty({ link, text, ...args }) {
  return (
    <a href={link} {...args} className={styles.button}>
      {text.toUpperCase()} <FaArrowRight />
    </a>
  );
}
