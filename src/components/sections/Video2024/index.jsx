import styles from "./video2024.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper/modules";

import { arrayImgsEvent } from "../../../data/evento2024";

import { FaArrowRight } from "react-icons/fa";

import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import Testimonials from "../Testionials";

export default function Video2024() {
  return (
    <>
      <Title text="Como foi Conect 2024?" />
      <section id="about" className={styles.container}>
        <div className={styles.content}>
          <iframe
            src="https://www.youtube.com/embed/vhyD2sDpzvo?si=2w4AhEj7EClq6uep"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.content}>
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

        <div className={styles.content}>
          <Testimonials />
          <div className={styles.buttons}>
            <ButtonPretty
              link={"#tickts"}
              // target="_blank"
              text={"me conectar também"}
            />
            <ButtonPretty
              data-color="blue"
              link={"https://conectautismo.pixieset.com"}
              text={"Fotos Conect 2024"}
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
