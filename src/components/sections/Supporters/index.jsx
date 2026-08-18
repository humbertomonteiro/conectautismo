import styles from "./supporters.module.css";

import apoiadores from "../../../assets/imgs/apoio/apoio2026.jpeg";

export default function Supporters() {
  return (
    <div className={styles.container}>
      <div id="patrocinador" className={styles.boxes} data-aos="zoom-in">
        <img
          src={apoiadores}
          className={styles.supporterImage}
          alt="Apoiadores 2026"
          loading="lazy"
        />
      </div>
    </div>
  );
}
