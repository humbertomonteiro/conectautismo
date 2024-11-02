import styles from "./testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import Title from "../../shared/Title";
import { testimonials } from "../../../data/testimonials";
import logo from "../../../assets/imgs/logo/logo.jpg";
// import ButtonPretty from "../../shared/ButtonPretty";

import { FaStar } from "react-icons/fa";

export default function Testionials() {
  return (
    <section className={styles.container}>
      {/* <Title text={"REVIEWS"} /> */}
      <div className={styles.testimonials}>
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
              },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimony) => (
              <SwiperSlide>
                <div key={testimony.name} className={styles.testimony}>
                  <div className={styles.img}>
                    <img
                      src={
                        testimony.img === "" || !testimony.img
                          ? logo
                          : testimony.img
                      }
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
            ))}
          </Swiper>
        </>

        {/* <div className={styles.buttons}>
          <ButtonPretty link={"#formEvent"} text={"Próximo evento"} />
        </div> */}
      </div>
    </section>
  );
}
