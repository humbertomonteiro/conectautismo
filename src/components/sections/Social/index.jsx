import styles from "./social.module.css";

import social from "../../../assets/imgs/social/social.png";

import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Social() {
  return (
    <div className={styles.container}>
      <Title text="SOCIAL" />
      <div className={styles.boxImg} data-aos="zoom-in">
        <img loading="lazy" src={social} alt="social" />
        <ButtonPretty
          link={
            "https://pay.hotmart.com/A96222789P?off=2bsyn86r&bid=1730990288806"
          }
          target="_blank"
          text={"Quero ajudar o mundo"}
        />
      </div>
    </div>
  );
}
