import styles from "./sponsor.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import img1 from "../../assets/imgs/planta-geral/img-1.jpg";
import img2 from "../../assets/imgs/planta-geral/img-2.jpg";
import img3 from "../../assets/imgs/planta-geral/img-3.jpg";
import img4 from "../../assets/imgs/planta-geral/img-4.jpg";
import img5 from "../../assets/imgs/planta-geral/img-5.jpg";
import img6 from "../../assets/imgs/planta-geral/img-6.jpg";
import img7 from "../../assets/imgs/planta-geral/img-7.jpg";

const GeneralPlan = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Planta geral</h1>
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className={styles.slide}
    >
      <SwiperSlide>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default GeneralPlan;
