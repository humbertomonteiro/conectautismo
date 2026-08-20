import styles from "./Authority.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { FaBrain, FaExchangeAlt, FaHandsHelping, FaEye } from "react-icons/fa";
import Title from "../../shared/Title";

const benefits = [
  {
    title: "CIÊNCIA",
    icon: <FaBrain />,
    description: "Conhecimento que amplia perspectivas.",
  },
  {
    title: "ATUALIZAÇÃO",
    icon: <FaExchangeAlt />,
    description:
      "Grandes especialistas discutindo o presente e o futuro do neurodesenvolvimento.",
  },
  {
    title: "CONEXÃO",
    icon: <FaHandsHelping />,
    description: "Pessoas de diferentes lugares reunidas pelo mesmo propósito.",
  },
  {
    title: "EXPERIÊNCIA",
    icon: <FaEye />,
    description:
      "Porque algumas coisas precisam ser vividas para serem compreendidas.",
  },
];

export default function Authority() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>
      <Title text="Por que estar no Conect?" color="black" />

      <div className={styles.boxes} data-aos="zoom-in" data-delay="200">
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              // @0.00
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              // @0.75
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className={styles.mySwiper}
        >
          {benefits.map((benefit) => (
            <SwiperSlide key={benefit.title}>
              <div className={styles.box}>
                <div className={styles.iconContainer}>{benefit.icon}</div>
                <h4 className={styles.title}>{benefit.title}</h4>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
