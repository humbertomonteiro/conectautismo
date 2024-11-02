import styles from "./social.module.css";

import social from "../../../assets/imgs/social/social.png";

import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Social() {
  return (
    <div className={styles.container}>
      <Title text="SOCIAL" />
      <div className={styles.boxImg} data-aos="zoom-in">
        <img src={social} alt="social" />
        <ButtonPretty link={"#formEvent"} text={"Quero ajudar o mundo"} />
      </div>
    </div>
  );
}
