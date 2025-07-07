import styles from "./local.module.css";

import Title from "../../shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Local() {
  return (
    <div className={styles.container}>
      <Title text={"LOCAL"} />
      <div className={styles.boxes} data-aos="zoom-in">
        <div className={styles.boxCarosel}>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className={styles.carosel}
          >
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/78455887.jpg?k=727d572d0a10828803a26ac439651164fec62eb0b6f8d921f4b4d78e6e587a7f&o=&hp=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/185976805.jpg?k=e903cf91cb6dedc7e75ed1f76243d58a84daaf6bd07c9ad2cd87ab605830f42e&o=&hp=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/414521654.jpg?k=1ffcd0fe391185bc00916ca536dbc99dd61e709ecca02831bf72c849aed48d9c&o=&hp=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/101454658.jpg?k=0efc430f153caff5de958d7635024656f4e13cd2c3d7859cb7127d05f8643f63&o=&hp=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/414521636.jpg?k=d3afb5784474ca1196187bca019ffdfd913463c4bcb87599524b689e5a1e883a&o=&hp=1"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.boxLocal}>
          <div className={styles.list}>
            <h3>Gran Mareiro Hotel</h3>
            <ul>
              <li>HOTEL ⭐️⭐️⭐️⭐️⭐️</li>
              <li>EXPO EVENTOS</li>
              <li>Opção de dois restaurantes com buffet no local.</li>
              <li>Fácil acesso</li>
              <li>⁠localização privilegiada vista Mar</li>
              <li>Comodidade para hospedagem</li>
              <li>Estacionamento seguro e amplo.</li>
            </ul>
            <div className={styles.button}>
              <ButtonPretty
                // link={
                //   "https://wa.me/558592742323?text=Olá! Quero entrar na lista de espera do evento Conect Autismo."
                // }
                link="https://pay.hotmart.com/A96222789P?off=1kjo08ig"
                target="_blank"
                text={"Comprar Ingresso"}
              />
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.322673362176!2d-38.456431925026145!3d-3.7396967962342194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7464d784ca471%3A0x2401a6bfcd1dc08d!2sGran%20Mareiro%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1747591004087!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* <div className={styles.text}>
              <p>Para o Congresso Conect Autismo:</p>
              <p>Data: 24 e 25 de Agosto de 2024</p>
              <p>Local: Gran Mareiro Hotel, Fortaleza, Ceará</p>
              <p>Horário: Das 07:00 às 18:00</p>
            </div> */}
        </div>

        {/* <div className={styles.box}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7962.707493618353!2d-38.456573!3d-3.7328489999999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7479bd21e6f1d%3A0xc36dd965f8cfa4ca!2sOrla%20Praia%20Club%3A%20Gastronomia%2C%20Drinks%2C%20Happy%20Hour%2C%20Barraca%20de%20Praia%20em%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1720821271519!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.text}>
            <p>Para a Festa Pré Conect Autismo:</p>
            <p>Data: 23 de Agosto de 2024</p>
            <p>Local: ORLA PRAIA CLUB, Fortaleza CE</p>
            <p>Horário: Das 18:00 às 01:00</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
