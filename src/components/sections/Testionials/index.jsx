import styles from "./testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { testimonials } from "../../../data/testimonials";
import Title from "../../shared/Title";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      {/* <Title text="Depoimentos" color="black" /> */}

      <div className={styles.container}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          className={styles.swiper}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // 768: {
            //   slidesPerView: 2,
            //   spaceBetween: 30,
            // },
          }}
        >
          {testimonials.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                {/* <div className={styles.quoteOpen}>
                  <BiSolidQuoteAltLeft />
                </div> */}

                <div className={styles.content}>
                  <div className={styles.avatar}>
                    <img
                      src={testimony.img || "/default-avatar.png"}
                      alt={testimony.name}
                      onError={(e) => {
                        e.target.src = "/default-avatar.png";
                      }}
                    />
                  </div>

                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={styles.starFilled} />
                    ))}
                  </div>

                  <h3 className={styles.name}>{testimony.name}</h3>
                  <p className={styles.comment}>{testimony.comment}</p>
                </div>

                {/* <div className={styles.quoteClose}>
                  <BiSolidQuoteAltRight />
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
