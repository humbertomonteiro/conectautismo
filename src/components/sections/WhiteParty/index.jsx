import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./WhiteParty.module.css";

// Substitua "photo" pelos caminhos reais assim que a cliente enviar as fotos de 2026.
const DEFAULT_PHOTOS = [
  { photo: "", alt: "White Party Conect 2026" },
  { photo: "", alt: "White Party Conect 2026" },
  { photo: "", alt: "White Party Conect 2026" },
  { photo: "", alt: "White Party Conect 2026" },
  { photo: "", alt: "White Party Conect 2026" },
  { photo: "", alt: "White Party Conect 2026" },
];

export default function WhiteParty({ photos = DEFAULT_PHOTOS }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = photos.length;
  const current = String(activeIndex + 1).padStart(2, "0");
  const last = String(total).padStart(2, "0");

  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.beams} aria-hidden="true">
        <span style={{ "--r": "16deg", "--t": "10%" }} />
        <span style={{ "--r": "-20deg", "--t": "55%" }} />
        <span style={{ "--r": "24deg", "--t": "85%" }} />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>White Party Conect</span>
          <h2 className={styles.title}>
            Quando o palco termina,
            <br />
            <span className={styles.titleAccent}>as conexões continuam.</span>
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
              640: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.4, spaceBetween: 30 },
            }}
            className={styles.swiper}
          >
            {photos.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.frame}>
                  {item.photo ? (
                    <img
                      className={styles.photo}
                      src={item.photo}
                      alt={item.alt || "White Party Conect"}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.photoFallback} aria-hidden="true">
                      White Party 2026
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Foto anterior"
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
              aria-label="Próxima foto"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className={styles.teaser}>
          <span className={styles.teaserPulse} aria-hidden="true" />
          <span className={styles.teaserBadge}>
            <span className={styles.teaserDot} />
            EM BREVE • EXPERIÊNCIA 2027
          </span>
          <p className={styles.teaserText}>
            Novidades sobre a próxima White Party Conect chegam em breve.
          </p>
        </div>
      </div>
    </section>
  );
}
