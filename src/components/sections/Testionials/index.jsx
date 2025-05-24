import styles from "./testimonials.module.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import { testimonials } from "../../../data/testimonials";
import logo from "../../../assets/imgs/logo/logo.jpg";
import Title from "../../shared/Title";

import { FaStar } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";

export default function Testimonials() {
  const [sizeScreen, setSizeScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    // Função para atualizar o tamanho da tela
    const atualizarTamanhoTela = () => {
      setSizeScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Altera o número com base no tamanho da tela
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Para telas menores que 768px
      } else {
        setSlidesPerView(3); // Para telas maiores
      }
    };

    // Chama a função ao carregar o componente
    atualizarTamanhoTela();

    // Adiciona um listener para mudanças no tamanho da janela
    window.addEventListener("resize", atualizarTamanhoTela);

    // Limpeza: remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", atualizarTamanhoTela);
    };
  }, []);

  const slides = testimonials.map((testimony) => (
    <SwiperSlide key={testimony.name}>
      <div className={styles.review}>
        <div className={styles.content}>
          <div className={styles.quote}>
            <BiSolidQuoteRight />
          </div>
          <div className={styles.user}>
            <img
              src={
                testimony.img === "" || !testimony.img ? logo : testimony.img
              }
              alt={testimony.name}
            />
          </div>
          <strong>{testimony.name}</strong>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>{testimony.comment}</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <section className={styles.container}>
      <Title text="reviews" />
      <div className={styles.reviews}>
        <Swiper
          // effect={"coverflow"}
          // grabCursor={true}
          // centeredSlides={true}
          // navigation={false}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }}
          // breakpoints={{
          //   "@0.00": {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   "@0.75": {
          //     slidesPerView: 1,
          //   },
          // }}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          spaceBetween={30}
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
}
