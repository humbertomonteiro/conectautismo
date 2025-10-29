import React, { useState } from "react";
import styles from "./speakersPos.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
// import mayra from "../../../assets/imgs/speakers/mayra.jpg";
// import banner from "../../../assets/imgs/speakers/banner.jpeg";
// import bannerMobile from "../../../assets/imgs/speakers/banner-mobile.jpeg";

import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";
import useLink from "../../../contexts/LinkContexts";

const SpeakersPos = () => {
  const [activeTab] = useState("evento");
  const { ticketAll, ticketHalf, ticketGroup } = useLink();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Inédito" color="black" />
        </div>

        <div className={styles.content}>
          {/* <div className={styles.mediaColumn} data-aos="zoom-in">
            <div className={styles.speakerImage} id="tickets2">
              <img
                className={styles.mobile}
                src={mayra}
                alt="Mayra - Palestrante Confirmada"
              />
              <div className={styles.imgOverlay}>
                <div className={styles.imgContent}>
                  <h3>Mayra Gaiato</h3>
                  <p>Referência nacional em Autismo e ABA.</p>
                </div>
              </div>
              <div className={styles.badge}>
                Confirmada <GiCheckMark />
              </div>
            </div>
          </div> */}
          <div className={styles.videoContainer} data-aos="zoom-in">
            <div className={styles.videoWrapper} id="tickets2">
              <iframe
                src="https://www.youtube.com/embed/oJoGFDOJjHc?si=AxUmmENJ7haBQZQz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h3></h3>
            <p>
              Um dia inteiro de Prática com Mayra Gaiato confirmado Conect 2026!
            </p>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.speakerCard} data-aos="zoom-in">
              {/* <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${
                    activeTab === "evento" ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab("evento")}
                >
                  Opções de Ingresso
                </button>
                <button
                  className={`${styles.tab} ${
                    activeTab === "pos" ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab("pos")}
                >
                  Pós-Graduação
                </button>
              </div> */}

              {activeTab === "pos" && (
                <div className={styles.tabContent}>
                  <h3>“Quem sabe faz ao vivo”</h3>
                  <p>
                    Um dia inteiro de prática com Mayra Gaiato no congresso
                    conect 2026
                  </p>
                  <p className={styles.highlight}>
                    Garanta agora sua pós e seu conect 2026
                  </p>

                  <ul className={styles.benefitsList}>
                    <li>
                      <GiCheckMark /> Pós em ABA e Estratégias Naturalistas
                    </li>
                    <li>
                      <GiCheckMark /> Certificação reconhecida
                    </li>
                    <li>
                      <GiCheckMark /> 1 dia de acesso ao Conect 2026
                    </li>
                  </ul>

                  <ButtonPretty
                    text="Garanta agora sua pós"
                    link="https://institutosingular.org/pos-turma4-conect/"
                    data-color="blue"
                    target="_blank"
                  />
                </div>
              )}

              {activeTab === "evento" && (
                <div className={styles.tabContent}>
                  <h3>Opções de Ingresso</h3>
                  <p>Escolha a melhor forma de participar do Conect 2026:</p>

                  <div className={styles.ticketOptions}>
                    <div className={styles.ticketCard}>
                      <h4>Pacote 3 Dias</h4>
                      <p>Acesso completo a todos os dias do evento</p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>
                            {ticketHalf.price}
                          </span>
                          <ButtonPretty
                            text="Comprar Meia"
                            link={ticketHalf.link}
                            target="_blank"
                          />
                        </div>

                        <div className="">
                          <span className={styles.price}>
                            {ticketAll.price}
                          </span>
                          <ButtonPretty
                            text="Comprar Inteira"
                            link={ticketAll.link}
                            target="_blank"
                          />
                        </div>
                        <div className="">
                          <span className={styles.price}>
                            {ticketGroup.price}
                            <span className={styles.textLower}>cada</span>
                          </span>
                          <ButtonPretty
                            text="Comprar Grupo"
                            link={ticketGroup.link}
                            target="_blank"
                          />
                          <p className={styles.info}>Mínimo 4 ingressos</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.ticketCard}>
                      <h4>Pacote 2 Dias</h4>
                      <p>
                        Para quem já tem 1 dia através da pós-graduação Mayra
                        Gaiato.
                      </p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>EM BREVE</span>
                          <ButtonPretty
                            text="Comprar Meia"
                            target="_blank"
                            data-button="disabled"
                          />
                        </div>
                        <div className="">
                          <span className={styles.price}>EM BREVE</span>
                          <ButtonPretty
                            text="Comprar Inteira"
                            target="_blank"
                            data-button="disabled"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersPos;
