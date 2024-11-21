import { useMemo } from "react";
import styles from "./carouselGallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function CarouselGallery({ array }) {
  const slides = useMemo(
    () =>
      array.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={styles.carousel}>
            <img loading="lazy" src={item.img} alt={item.name} />
          </div>
        </SwiperSlide>
      )),
    [array]
  );

  return (
    <Swiper
      data-aos={"zoom-in"}
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {slides}
    </Swiper>
  );
}
