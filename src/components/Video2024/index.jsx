import styles from "./video2024.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper/modules";

import { arrayImgsEvent } from "../../data/evento2024";

import { FaArrowRight } from "react-icons/fa";

import Title from "../Title";
import ButtonBasic from "../ButtonBasic";

export default function Video2024() {
  return (
    <section id="about" className={styles.container}>
      <Title text="Como foi Conect 2024?" />
      <div className={styles.content} data-aos="zoom-in">
        <div className={styles.text}>
          <div className={styles.swiper}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className={styles.swiperSlide}
            >
              {arrayImgsEvent.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.img} alt={`imagem ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <ButtonBasic
            link="https://conectautismo.pixieset.com"
            text=" Ver todas as imagens"
            icon={<FaArrowRight />}
          />
        </div>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube.com/embed/vhyD2sDpzvo?si=2w4AhEj7EClq6uep"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
