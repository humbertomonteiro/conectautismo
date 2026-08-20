import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ExperienceGallery.module.css";

// Substitua "photo" pelos caminhos reais assim que a cliente enviar.
// A ordem já segue a sequência pedida: credenciamento → ... → White Party.
const DEFAULT_MOMENTS = [
  { label: "Credenciamento", photo: "" },
  { label: "Corredores", photo: "" },
  { label: "Auditório", photo: "" },
  { label: "Palestrantes", photo: "" },
  { label: "Congressistas", photo: "" },
  { label: "Exposição", photo: "" },
  { label: "Encontros", photo: "" },
  { label: "Abraços", photo: "" },
  { label: "White Party", photo: "" },
];

export default function ExperienceGallery({ moments = DEFAULT_MOMENTS }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = moments.length;
  const current = String(activeIndex + 1).padStart(2, "0");
  const last = String(total).padStart(2, "0");

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Experiência Conect</span>
        <h2 className={styles.title}>
          Não é só quem está no palco.
          <br />
          <span className={styles.titleAccent}>
            É tudo o que acontece quando estamos juntos.
          </span>
        </h2>
      </div>

      <div className={styles.galleryWrapper}>
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          slidesPerView={1.15}
          spaceBetween={20}
          centeredSlides
          loop
          autoplay={{ delay: 3200, disableOnInteraction: true }}
          breakpoints={{
            600: { slidesPerView: 1.6, spaceBetween: 28 },
            900: { slidesPerView: 2.2, spaceBetween: 32 },
            1280: { slidesPerView: 2.6, spaceBetween: 36 },
          }}
          className={styles.swiper}
        >
          {moments.map((moment, index) => (
            <SwiperSlide
              key={`${moment.label}-${index}`}
              className={styles.slide}
            >
              <div className={styles.frame}>
                {moment.photo ? (
                  <img
                    className={styles.photo}
                    src={moment.photo}
                    alt={moment.label}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.photoFallback} aria-hidden="true">
                    {moment.label}
                  </div>
                )}
                <div className={styles.caption}>
                  <span className={styles.captionIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.captionLabel}>{moment.label}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Momento anterior"
          >
            <FaChevronLeft />
          </button>

          <span className={styles.counter}>
            {current} <span className={styles.counterDivider}>/</span> {last}
          </span>

          <button
            type="button"
            className={styles.navButton}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Próximo momento"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.signature}>
        <span className={styles.signatureLine} />
        <p className={styles.signatureText}>
          Do primeiro encontro ao último aplauso.
          <br />
          Tudo faz parte do Conect.
        </p>
        <span className={styles.signatureLine} />
      </div>
    </section>
  );
}
