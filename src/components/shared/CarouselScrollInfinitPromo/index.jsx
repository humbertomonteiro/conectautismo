import styles from "./caroselScrollInfinit.module.css";

/**
 * Props:
 * - dataSlideDouble: { first: "Black", second: "Friday" }
 * - direction: "left" | "right"            (padrão: "left")
 * - variant:   "straight" | "tiltLeft" | "tiltRight" | "diagonal"  (padrão: "straight")
 * - speed:     duração do loop em segundos (padrão: 25)
 * - copies:    quantos itens por grupo (padrão: 6)
 * - outlined:  alterna texto preenchido / só contorno (padrão: true)
 * - placement: "top" | "bottom" | "inline"
 *     top/bottom -> faixa SOBREPOSTA ao layout (position: absolute dentro do Hero)
 *     inline     -> ocupa espaço no fluxo, como antes
 * - offset:    distância da borda (ex.: "2rem", "10%") quando top/bottom
 */
const CarouselScrollInfinitPromo = ({
  dataSlideDouble,
  direction = "left",
  variant = "straight",
  speed = 25,
  copies = 6,
  outlined = true,
  placement = "top",
  offset = "1.5rem",
}) => {
  const items = Array.from({ length: copies });

  const renderGroup = (hidden = false) => (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {items.map((_, i) => (
        <div className={styles.item} key={i}>
          <strong className={styles.first}>{dataSlideDouble.first}</strong>
          <span className={outlined ? styles.secondOutline : styles.second}>
            {dataSlideDouble.second}
          </span>
          <i className={styles.slashes} aria-hidden="true">
            ///
          </i>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className={`${styles.wrapper} ${styles[variant]} ${styles[placement]}`}
      style={{ "--offset": offset }}
    >
      <div
        className={`${styles.carousel} ${
          direction === "right" ? styles.reverse : ""
        }`}
        style={{ "--speed": `${speed}s` }}
      >
        {renderGroup()}
        {renderGroup(true)}
      </div>
    </section>
  );
};

export default CarouselScrollInfinitPromo;
