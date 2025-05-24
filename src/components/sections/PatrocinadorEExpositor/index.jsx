import styles from "./patrocinadorEExpositor.module.css";

import ButtonPretty from "../../shared/ButtonPretty";

import { FaArrowUp } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../../../assets/imgs/stands/img-1.jpeg";
import img2 from "../../../assets/imgs/stands/img-2.jpeg";
import img3 from "../../../assets/imgs/stands/img-3.jpeg";
import img4 from "../../../assets/imgs/stands/img-4.jpeg";
import img5 from "../../../assets/imgs/stands/img-5.jpeg";
import img6 from "../../../assets/imgs/stands/img-6.jpeg";
import img7 from "../../../assets/imgs/stands/img-7.jpeg";
import img8 from "../../../assets/imgs/stands/img-8.jpeg";
import img9 from "../../../assets/imgs/stands/img-9.jpeg";
import img10 from "../../../assets/imgs/stands/img-10.jpeg";
import img11 from "../../../assets/imgs/stands/img-11.jpeg";
import img12 from "../../../assets/imgs/stands/img-12.jpeg";
// import img13 from "../../../assets/imgs/stands/img-13.jpeg";

export default function PatrocinadorEExpositor() {
  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.containerContent}>
        <h2>Patrocinador & Expositor</h2>
        <div className={styles.content}>
          <p>
            Garantindo visibilidade e posicionamento. Ideal para quem quer se
            posicionar e mostrar sua marca. Focado em trazer sua relevância ao
            mercado.
          </p>
          <div className={styles.buttons}>
            <ButtonPretty
              data-color="blue"
              link="#patrocinador"
              text="Todos os patrocinadores"
              icon={<FaArrowUp />}
            />

            <ButtonPretty
              link="https://api.whatsapp.com/send/?phone=558592742323&text&type=phone_number&app_absent=0"
              text="ADQUIRA SEU ESPAÇO AQUI"
            />
          </div>
        </div>
      </div>
      <div className={styles.slides}>
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className={styles.swiper}
        >
          <SwiperSlide>
            <img src={img1} alt="Stand 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Stand 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Stand 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Stand 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="Stand 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="Stand 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="Stand 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="Stand 8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="Stand 9" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} alt="Stand 10" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img11} alt="Stand 11" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} alt="Stand 12" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={img13} alt="Stand 13" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
