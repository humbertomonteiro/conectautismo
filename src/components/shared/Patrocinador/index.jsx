import styles from "./patrocinador.module.css";

import CarouselGAllery from "../CarouselGallery";
import Title from "../Title";

export default function Patrocinador({ title, array }) {
  return (
    <div className={styles.container}>
      <Title text={title} />
      <div id="patrocinador" className={styles.boxes} data-aos="zoom-in">
        <CarouselGAllery array={array} />
      </div>
    </div>
  );
}
