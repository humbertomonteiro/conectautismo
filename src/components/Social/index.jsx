import styles from "./social.module.css";

import social from "../../assets/imgs/social/social.png";

import Title from "../Title";

export default function Social() {
  return (
    <div className={styles.container}>
      <Title text="SOCIAL" />
      <div className={styles.boxImg} data-aos="zoom-in">
        <img src={social} alt="social" />
      </div>
    </div>
  );
}
