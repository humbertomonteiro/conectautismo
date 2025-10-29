import styles from "./local.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

import centroDeEventos from "../../../assets/imgs/local/centro-de-eventos.png";

import useLink from "../../../contexts/LinkContexts";

export default function Local() {
  const { ticketAll } = useLink();
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
              <span>QUANDO</span> <p>Dias 21, 22 e 23 de agosto de 2026</p>
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
              link={ticketAll.link}
              target="_blank"
              text="Comprar Ingresso"
            />
          </div>
        </div>
        <div className={styles.boxCarousel}>
          <img
            src={centroDeEventos}
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
