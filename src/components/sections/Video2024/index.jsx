import styles from "./video2024.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper/modules";

import { arrayImgsEvent } from "../../../data/evento2024";

import { FaArrowRight } from "react-icons/fa";

import Title from "../../shared/Title";
import ButtonBasic from "../../shared/ButtonBasic";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Video2024() {
  return (
    <section id="about" className={styles.container}>
      <Title text="Como foi Conect 2024?" />
      <div className={styles.content} data-aos="zoom-in">
        <div className={styles.midia}>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/vhyD2sDpzvo?si=2w4AhEj7EClq6uep"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.images}>
            <div className={styles.swiper}>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={styles.swiperSlide}
              >
                {arrayImgsEvent.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img loading="lazy" src={img.img} alt={`imagem ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <ButtonPretty
          link={"#tickts"}
          // target="_blank"
          text={"quero me conectar também"}
        />
        <ButtonBasic
          link="https://conectautismo.pixieset.com"
          text="Fotos Conect 2024"
          icon={<FaArrowRight />}
        />
      </div>
    </section>
  );
}
