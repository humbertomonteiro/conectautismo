import styles from "./local.module.css";
import Title from "../../shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ButtonPretty from "../../shared/ButtonPretty";

import centro1 from "../../../assets/imgs/location/ampla.jpg";
import centro2 from "../../../assets/imgs/location/frente.jpg";

export default function Local() {
  return (
    <div className={styles.container}>
      <Title text="LOCAL" />
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.boxes} data-aos="zoom-in">
        <div className={styles.boxLocal}>
          <h3>O PALCO DO CONECT AUTISMO 2026</h3>
          <ul className={styles.highlight}>
            <li>
              <span>ONDE</span> <p>Centro de Eventos do Ceará</p>
            </li>
            <li>
              <span>ENDEREÇO</span>{" "}
              <p>Av. Washington Soares, 999 - Edson Queiroz</p>
            </li>
            <li>
              <span>QUANDO</span> <p>Dias 21, 22 e 23 de agosto</p>
            </li>
            <li>
              <span>INÉDITO</span>{" "}
              <p>Primeiro congresso com um dia inteiro de prática.</p>
            </li>
          </ul>
          <div className={styles.text}>
            O Centro de Eventos do Ceará (CEC) é um marco na infraestrutura de
            turismo e negócios do Brasil, destacando-se como um dos mais
            modernos espaços do gênero na América Latina.
          </div>
          <div className={styles.button}>
            <ButtonPretty
              link="https://pay.hotmart.com/A96222789P?off=cpagfpj6"
              target="_blank"
              text="Comprar Ingresso"
            />
          </div>
        </div>
        <div className={styles.boxCarousel}>
          {/* <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={10}
            className={styles.carousel}
          >
            <SwiperSlide>
              <img
                src="https://centrodeeventos.ce.gov.br/wp-content/uploads/2025/05/CENTRO-DE-EVENTOS-DO-CEARA-BANNER-1-1.png"
                alt="entro de Eventos Ceará"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </SwiperSlide>
            
          </Swiper> */}
          <img
            src="https://centrodeeventos.ce.gov.br/wp-content/uploads/2025/05/CENTRO-DE-EVENTOS-DO-CEARA-BANNER-1-1.png"
            alt="entro de Eventos Ceará"
            className={styles.img}
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.209248886492!2d-38.48376262502598!3d-3.764587096209291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74603ee2a15a3%3A0x8d1efb0de23670ce!2sCentro%20de%20Eventos%20do%20Cear%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1755469191352!5m2!1spt-BR!2sbr"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
