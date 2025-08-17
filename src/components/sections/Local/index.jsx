import styles from "./local.module.css";
import Title from "../../shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Local() {
  return (
    <div className={styles.container}>
      <Title text="LOCAL" />
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.boxes} data-aos="zoom-in">
        <div className={styles.boxLocal}>
          <div className={styles.list}>
            <h3>Gran Mareiro Hotel</h3>
            <ul>
              <li>HOTEL ⭐️⭐️⭐️⭐️⭐️</li>
              <li>EXPO EVENTOS</li>
              <li>Opção de dois restaurantes com buffet no local.</li>
              <li>Fácil acesso</li>
              <li>Localização privilegiada vista Mar</li>
              <li>Comodidade para hospedagem</li>
              <li>Estacionamento seguro e amplo.</li>
            </ul>
            <div className={styles.button}>
              <ButtonPretty
                link="https://pay.hotmart.com/A96222789P?off=cpagfpj6"
                target="_blank"
                text="Comprar Ingresso"
              />
            </div>
          </div>
        </div>
        <div className={styles.boxCarousel}>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={10}
            className={styles.carousel}
          >
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/78455887.jpg?k=727d572d0a10828803a26ac439651164fec62eb0b6f8d921f4b4d78e6e587a7f&o=&hp=1"
                alt="Gran Mareiro Hotel exterior"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/185976805.jpg?k=e903cf91cb6dedc7e75ed1f76243d58a84daaf6bd07c9ad2cd87ab605830f42e&o=&hp=1"
                alt="Gran Mareiro Hotel interior"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/414521654.jpg?k=1ffcd0fe391185bc00916ca536dbc99dd61e709ecca02831bf72c849aed48d9c&o=&hp=1"
                alt="Gran Mareiro Hotel event space"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/101454658.jpg?k=0efc430f153caff5de958d7635024656f4e13cd2c3d7859cb7127d05f8643f63&o=&hp=1"
                alt="Gran Mareiro Hotel amenities"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/414521636.jpg?k=d3afb5784474ca1196187bca019ffdfd913463c4bcb87599524b689e5a1e883a&o=&hp=1"
                alt="Gran Mareiro Hotel conference room"
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
            </SwiperSlide>
          </Swiper>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.322673362176!2d-38.456431925026145!3d-3.7396967962342194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7464d784ca471%3A0x2401a6bfcd1dc08d!2sGran%20Mareiro%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1747591004087!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Gran Mareiro Hotel, Fortaleza, Ceará"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
