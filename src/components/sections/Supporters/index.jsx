import styles from "./supporters.module.css";

// import CarouselGAllery from "../CarouselGallery";
import apoiadores from "../../../assets/imgs/apoio/apoio-2026.png";
import apoiadoresDesktop from "../../../assets/imgs/apoio/apoio-2026-desktop.png";

export default function Supporters() {
  return (
    <div className={styles.container}>
      <div id="patrocinador" className={styles.boxes} data-aos="zoom-in">
        {/* <CarouselGAllery array={array} /> */}
        <img
          src={apoiadores}
          className={styles.supporterMobile}
          alt="Apoiadores 2026"
          loading="lazy"
        />
        <img
          src={apoiadoresDesktop}
          className={styles.supporterDesktop}
          alt="Apoiadores 2026"
          loading="lazy"
        />
      </div>
    </div>
  );
}
