import styles from "./patrocinadorEExpositor.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Title from "../../shared/Title";

// Imagens otimizadas (webp, 1200px de largura)
import img1 from "../../../assets/imgs/stands/optimized/stand1.webp";
import img2 from "../../../assets/imgs/stands/optimized/stand2.webp";
import img3 from "../../../assets/imgs/stands/optimized/stand3.webp";

const standImages = [
  { src: img1, alt: "Stand 1" },
  { src: img2, alt: "Stand 2" },
  { src: img3, alt: "Stand 3" },
];

export default function PatrocinadorEExpositor() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <Title text="Patrocinador & Expositor" color="black" />
        <div className={styles.contentWrapper} data-aos="fade-up">
          <div className={styles.carouselSection}>
            <h3 className={styles.sponsorsHeader}>SUA MARCA NO CONECT 2027</h3>
            <p className={styles.subtitle}>
              Empresas, clínicas e profissionais autônomos também podem fazer
              parte. Apresente seu trabalho, fortaleça sua marca e crie novas
              conexões
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
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null; // evita loop infinito
                      e.currentTarget.src = "/fallback-image.jpg";
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
                text="CONHECER AS OPORTUNIDADES"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
