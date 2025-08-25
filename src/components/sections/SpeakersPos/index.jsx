import React, { useState } from "react";
import styles from "./speakersPos.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
// import mayra from "../../../assets/imgs/speakers/mayra.jpg";
// import banner from "../../../assets/imgs/speakers/banner.jpeg";
// import bannerMobile from "../../../assets/imgs/speakers/banner-mobile.jpeg";

import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";

const SpeakersPos = () => {
  const [activeTab, setActiveTab] = useState("evento");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Inédito" color="black" />
          {/* <h2 className={styles.title}>Mayra - Confirmada no Conect 2026</h2> */}
          {/* <p className={styles.subtitle}>
            Um dia inteiro de prática com Mayra Gaiato no Congresso Conect 2026
          </p> */}
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
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper} id="tickets2">
              <iframe
                src="https://www.youtube.com/embed/fXp2XUOUYhs?si=qAtFLUPE5e--OluC"
                title="Pós-graduação Mayra Gaiato"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Pós-graduação Mayra Gaiato</h3>
            <p>
              Não perca essa oportunidade! Adquira a pós-graduação e ganhe um
              dia inteiro de prática no conect autismo 2026!
            </p>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.speakerCard} data-aos="zoom-in">
              <div className={styles.tabs}>
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
              </div>

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
                          <span className={styles.price}>12 x R$ 101,15</span>
                          <ButtonPretty
                            text="Comprar Inteira"
                            link="https://pay.hotmart.com/D101401576U?off=1zhb4drs"
                            target="_blank"
                          />
                        </div>
                        <div className="">
                          <span className={styles.price}>12 x R$ 50,57</span>
                          <ButtonPretty
                            text="Comprar Meia"
                            link="https://pay.hotmart.com/D101401576U?off=rfa406il"
                            target="_blank"
                          />
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
                            text="Comprar Inteira"
                            target="_blank"
                            data-button="disabled"
                          />
                        </div>
                        <div className="">
                          <span className={styles.price}>EM BREVE</span>
                          <ButtonPretty
                            text="Comprar Meia"
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
