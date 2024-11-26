import styles from "./testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import { testimonials } from "../../../data/testimonials";
import logo from "../../../assets/imgs/logo/logo.jpg";
// import Title from "../../shared/Title";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const slides = testimonials.map((testimony) => (
    <SwiperSlide key={testimony.name}>
      <div className={styles.testimony}>
        <div className={styles.img}>
          <img
            src={testimony.img === "" || !testimony.img ? logo : testimony.img}
            alt={testimony.name}
          />
        </div>
        <div className={styles.content}>
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
      {/* <Title text="reviews" /> */}
      <div className={styles.testimonials}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className={styles.mySwiper}
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
}
