import styles from "./patrocinadorEExpositor.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Title from "../../shared/Title";

// Static image imports
import img1 from "../../../assets/imgs/stands/img-1.jpeg";
import img2 from "../../../assets/imgs/stands/img-2.jpeg";
import img3 from "../../../assets/imgs/stands/img-3.jpeg";
import img4 from "../../../assets/imgs/stands/img-4.jpeg";
import img5 from "../../../assets/imgs/stands/img-5.jpeg";
import img6 from "../../../assets/imgs/stands/img-6.jpeg";
import img7 from "../../../assets/imgs/stands/img-7.jpeg";
import img8 from "../../../assets/imgs/stands/img-8.jpeg";
import img9 from "../../../assets/imgs/stands/img-9.jpeg";
import img10 from "../../../assets/imgs/stands/img-10.jpeg";
import img11 from "../../../assets/imgs/stands/img-11.jpeg";
import img12 from "../../../assets/imgs/stands/img-12.jpeg";

// Array of images for the carousel
const standImages = [
  { src: img1, alt: "Stand 1" },
  { src: img2, alt: "Stand 2" },
  { src: img3, alt: "Stand 3" },
  { src: img4, alt: "Stand 4" },
  { src: img5, alt: "Stand 5" },
  { src: img6, alt: "Stand 6" },
  { src: img7, alt: "Stand 7" },
  { src: img8, alt: "Stand 8" },
  { src: img9, alt: "Stand 9" },
  { src: img10, alt: "Stand 10" },
  { src: img11, alt: "Stand 11" },
  { src: img12, alt: "Stand 12" },
];

export default function PatrocinadorEExpositor() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <Title text="Patrocinador & Expositor" color="black" />
        <div className={styles.contentWrapper} data-aos="fade-up">
          <div className={styles.carouselSection}>
            <h3 className={styles.sponsorsHeader}>Faça parte você também</h3>
            <p className={styles.subtitle}>
              Garantindo visibilidade e posicionamento, ideal para quem quer se
              posicionar e mostrar sua marca. Focado em trazer sua relevância ao
              mercado.
            </p>
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Autoplay, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className={styles.swiper}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {standImages.map((image, index) => (
                <SwiperSlide key={index} className={styles.slideContent}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.standImage}
                    onError={(e) => {
                      e.target.src = "/fallback-image.jpg";
                    }}
                  />
                  <div className={styles.slideOverlay}>{image.alt}</div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.ctaButtons}>
              <ButtonPretty
                data-color="blue"
                link="https://api.whatsapp.com/send/?phone=558592742323&text&type=phone_number&app_absent=0"
                text="QUERO SER EXPOSITOR 2026"
              />
            </div>
          </div>
          {/* <div className={styles.sponsorsSection}>
            <div className={styles.sponsorsGrid}>
              <img
                src={allSponsors}
                alt="Logos de todos os patrocinadores"
                className={styles.sponsorsImage}
              />
              <span className={styles.badge}>Patrocinadores 2025</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
