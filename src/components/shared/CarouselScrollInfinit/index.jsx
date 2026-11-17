import styles from "./carouselScrollInfinit.module.css";

import Title from "../Title";

/**
 * Props:
 * - array:     [{ img, name }]  -> com `img` mostra a imagem; sem `img` mostra o texto `name`
 * - title:     título opcional acima do carrossel
 * - direction: "left" | "right"                                   (padrão: "left")
 * - variant:   "straight" | "tiltLeft" | "tiltRight" | "diagonal" (padrão: "straight")
 * - theme:     "light" | "dark"                                   (padrão: "light")
 * - speed:     duração de um loop, em segundos                    (padrão: 60)
 * - minItems:  mínimo de itens por grupo (repete o array se for curto, evita vão) (padrão: 8)
 */
export default function CarouselScrollInfinit({
  array = [],
  title,
  direction = "left",
  variant = "straight",
  theme = "light",
  speed = 60,
  minItems = 8,
}) {
  if (!array.length) return null;

  const repeats = Math.max(1, Math.ceil(minItems / array.length));
  const items = Array.from({ length: repeats }).flatMap(() => array);

  const renderGroup = (hidden = false) => (
    <div className={styles.group} aria-hidden={hidden || undefined}>
      {items.map((item, index) =>
        item.img ? (
          <div key={index} className={styles.card}>
            <img
              className={styles.img}
              src={item.img}
              alt={hidden ? "" : item.name}
              loading="lazy"
            />
          </div>
        ) : (
          <div key={index} className={styles.textItem}>
            <span>{item.name}</span>
            <i className={styles.separator} aria-hidden="true">
              +
            </i>
          </div>
        )
      )}
    </div>
  );

  return (
    <section
      className={`${styles.wrapper} ${styles[variant]} ${styles[theme]}`}
    >
      {title && <Title text={title} />}
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
}
