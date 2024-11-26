import styles from "./social.module.css";

import social from "../../../assets/imgs/social/social.png";

import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Social() {
  return (
    <section className={styles.container}>
      <Title text="SOCIAL" />
      <div className={styles.boxImg} data-aos="zoom-in">
        <img loading="lazy" src={social} alt="social" />
        <ButtonPretty
          data-color="blue"
          link={"https://pay.hotmart.com/A96222789P?off=dw8zuz6z"}
          target="_blank"
          text={"Quero ajudar o mundo"}
        />
      </div>
    </section>
  );
}
