import BoxSlider from "../BoxSlider";
import Title from "../Title";
import styles from "./patrocinador.module.css";

export default function Patrocinador({ title, array }) {
  return (
    <div className={styles.container}>
      <Title text={title} />
      <div className={styles.boxes} data-aos="zoom-in">
        {array.map((item, index) => (
          <div key={index} className={styles.box}>
            <BoxSlider array={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
