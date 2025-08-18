import styles from "./about.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import { arrayImgsEvent } from "../../../data/evento2024";

// Dados mockados - substitua pelos seus
const eventData = {
  title: "Sobre o Conect",
  description:
    "O Conect Autismo é o maior congresso de neurodesenvolvimento do Norte e Nordeste, para compartilhar conhecimento, experiências e promover a inclusão.",
  highlights: [
    "3 dias de imersão em conhecimento científico",
    "Mais de 30 palestrantes especializados",
    "Workshops práticos para familiares e profissionais",
    "Espaço inclusivo para pessoas com TEA",
  ],
  videoId: "vhyD2sDpzvo", // ID do YouTube
};

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <Title text={eventData.title} />

      <div className={styles.container}>
        {/* Conteúdo textual à esquerda */}
        <div className={styles.contentText} data-aos="zoom-in">
          <p className={styles.description}>{eventData.description}</p>

          <ul className={styles.highlights}>
            {eventData.highlights.map((item, index) => (
              <li key={index} className={styles.highlightItem}>
                <span className={styles.checkIcon}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.buttons}>
            <ButtonPretty
              data-color="blue"
              link={"https://conectautismo.pixieset.com"}
              text={"FOTOS CONECT 2024"}
              icon={<FaArrowRight />}
              target="_blank"
            />
            <ButtonPretty
              link={"#tickets"}
              text={"QUERO PARTICIPAR"}
              data-color="accent"
            />
          </div>
        </div>

        {/* Swiper à direita */}
        <div className={styles.swiperContainer}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={styles.swiper}
          >
            {/* Slide do vídeo como primeiro item */}
            {/* <SwiperSlide className={styles.videoSlide}>
              <div className={styles.videoContainer}>
                <iframe
                  src={`https://www.youtube.com/embed/${eventData.videoId}`}
                  title="Vídeo do Conect Autismo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className={styles.playOverlay}>
                  <FaPlay className={styles.playIcon} />
                </div>
              </div>
            </SwiperSlide> */}

            {/* Slides de imagens */}
            {arrayImgsEvent.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  loading="lazy"
                  src={img.img}
                  alt={`Evento Conect Autismo ${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
