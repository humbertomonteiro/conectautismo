import styles from "./patrocinador.module.css";

// import BoxSlider from "../BoxSlider";
import CarouselGAllery from "../CarouselGallery";
import Title from "../Title";

export default function Patrocinador({ title, array }) {
  return (
    <div className={styles.container}>
      <Title text={title} />
      <div id="patrocinador" className={styles.boxes} data-aos="zoom-in">
        <CarouselGAllery array={array} />
        {/* {array.map((item, index) => (
          <div key={index} className={styles.box}>
            <BoxSlider array={item} />
          </div>
        ))} */}
      </div>
    </div>
  );
}
