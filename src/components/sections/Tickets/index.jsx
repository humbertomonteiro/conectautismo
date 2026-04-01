import { useState } from "react";
import styles from "./Tickets.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
// import groupSpeakers from "../../../assets/imgs/speakers/grupo.png";
import speakers from "../../../assets/imgs/speakers/palestrantes.png";
import speakersDesktop from "../../../assets/imgs/speakers/palestrantes-desktop.png";
// import mayra from "../../../assets/imgs/speakers/mayra.jpg";
// import banner from "../../../assets/imgs/speakers/banner.jpeg";
// import bannerMobile from "../../../assets/imgs/speakers/banner-mobile.jpeg";

// import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";
import useLink from "../../../contexts/LinkContexts";

const Tickets = () => {
  const [activeTab] = useState("evento");
  const { ticketAll, ticketHalf, ticketGroup4, ticketGroup5 } = useLink();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Garanta Seu Ingresso" color="black" />
        </div>

        <div className={styles.content}>
          <div className={styles.infoColumn} id="tickets2">
            <div className={styles.speakerCard} data-aos="zoom-in">
              {activeTab === "evento" && (
                <div className={styles.tabContent}>
                  <h3>Opções de Ingresso</h3>
                  <p>Escolha a melhor forma de participar do Conect 2026:</p>

                  <div className={styles.ticketOptions}>
                    <div className={styles.ticketCard}>
                      <h4>Ingresso Individual</h4>
                      <p>Acesso completo a todos os dias do evento</p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>
                            {ticketHalf.price}
                          </span>
                          <ButtonPretty
                            text="Garantir Meia"
                            link={ticketHalf.link}
                            target="_blank"
                          />
                        </div>

                        <div className="">
                          <span className={styles.price}>
                            {ticketAll.price}
                          </span>
                          <ButtonPretty
                            text="Garantir Inteira"
                            link={ticketAll.link}
                            target="_blank"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.ticketCard}>
                      <h4>Ingresso Grupo</h4>
                      <p>
                        <p className={styles.info}>
                          Venha em grupo e ganhe 20% OFF Ou 30% OFF
                        </p>
                      </p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>
                            {ticketGroup4.price}
                            <span className={styles.textLower}>cada</span>
                          </span>
                          <ButtonPretty
                            text="Grupo 4 Ingressos"
                            link={ticketGroup4.link}
                            target="_blank"
                          />
                          <p className={styles.info}>20% OFF</p>
                        </div>
                        <div className="">
                          <span className={styles.price}>
                            {ticketGroup5.price}
                            <span className={styles.textLower}>cada</span>
                          </span>
                          <ButtonPretty
                            text="Grupo 5 Ingressos"
                            link={ticketGroup5.link}
                            target="_blank"
                          />
                          <p className={styles.info}>30% OFF</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <a className={styles.linkSaberMais} href="#tickets">
                    Saiba mais
                  </a> */}
                </div>
              )}
            </div>
          </div>

          <div className={styles.mediaColumn} data-aos="zoom-in">
            <div className={styles.speakerImage}>
              <img
                className={styles.desktop}
                src={speakersDesktop}
                alt="Palestrantes Confirmados"
              />
              <img
                className={styles.mobile}
                src={speakers}
                alt="Palestrantes Confirmados"
              />
              <div className={styles.buttonSpeakers}>
                <ButtonPretty text="Garantir Festa" link="#party-ticket" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
