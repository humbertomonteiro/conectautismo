import styles from "./buttonPretty.module.css";
import { FaArrowRight } from "react-icons/fa";
import { withTracking } from "../../../Utils/tracking";

export default function ButtonPretty({ link, text, icon, ...args }) {
  return (
    <a href={withTracking(link)} {...args} className={styles.button}>
      {text} {icon ? icon : <FaArrowRight />}
    </a>
  );
}
