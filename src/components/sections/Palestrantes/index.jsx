import styles from "./palestrantes.module.css";

// import BoxSlider from "../../shared/BoxSlider";
import CarouselGAllery from "../../shared/CarouselGallery";
import Title from "../../shared/Title";

import { arrayPalestrantes } from "../../../data/palestrantes";

export default function Palestrantes() {
  console.log(arrayPalestrantes.length);
  return (
    <div className={styles.container}>
      <Title text={"+ DE 50 PALESTRANTES EM 2024"} />
      <div className={styles.boxes}>
        <CarouselGAllery array={arrayPalestrantes} />
      </div>
    </div>
  );
}
