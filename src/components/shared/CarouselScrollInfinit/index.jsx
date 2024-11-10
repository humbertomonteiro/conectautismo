import styles from "./carouselScrollInfinit.module.css";

import Title from "../Title";

export default function CarouselScrollInfinit({ array, title }) {
  return (
    <>
      <Title text={title} />
      <div className={styles.carousel}>
        <div className={styles.group}>
          {array.map((item) => (
            <div className={styles.card}>
              <img className={styles.img} src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
        <div arial-hidden="true" className={styles.group}>
          {array.map((item, index) => (
            <div key={index} className={styles.card}>
              <img className={styles.img} src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
