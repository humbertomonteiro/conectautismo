import styles from "./carouselGallery.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function CarouselGallery({ array }) {
  return (
    <>
      <Swiper
        data-aos={"zoom-in"}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {array.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.carousel}>
              <img src={item.img} alt={item.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
