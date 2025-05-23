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

// Importe o PDF se estiver na pasta src/assets
import pdfFile from "../../assets/pdfs/planta-geral.pdf";

import { MdFileDownload } from "react-icons/md";

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
        <img src={img1} alt="Planta 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Planta 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Planta 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="Planta 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="Planta 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="Planta 6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} alt="Planta 7" />
      </SwiperSlide>
    </Swiper>
    <div className={styles.downloadButtonContainer}>
      <a
        // href="/planta-geral.pdf" // Caminho do PDF na pasta public
        href={pdfFile} // Use isso se o PDF estiver em src/assets
        download="planta-geral.pdf"
        className={styles.downloadButton}
      >
        Baixar PDF <MdFileDownload />
      </a>
    </div>
  </div>
);

export default GeneralPlan;
