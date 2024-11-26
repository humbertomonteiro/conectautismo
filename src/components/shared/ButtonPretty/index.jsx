import styles from "./buttonPretty.module.css";

import { FaArrowRight } from "react-icons/fa";

export default function ButtonPretty({ link, text, icon, ...args }) {
  return (
    <a href={link} {...args} className={styles.button}>
      {text.toUpperCase()} {icon ? icon : <FaArrowRight />}
    </a>
  );
}
