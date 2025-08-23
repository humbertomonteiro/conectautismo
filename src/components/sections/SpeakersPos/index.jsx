import React, { useState } from "react";
import styles from "./speakersPos.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
// import mayra from "../../../assets/imgs/speakers/mayra.jpg";
import banner from "../../../assets/imgs/speakers/banner.jpeg";
import bannerMobile from "../../../assets/imgs/speakers/banner-mobile.jpeg";

import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";

const SpeakersPos = () => {
  const [activeTab, setActiveTab] = useState("pos");

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
          <div className={styles.infoColumn}>
            <div className={styles.speakerCard} data-aos="zoom-in">
              {/* <div className={styles.speakerImage}>
                <img src={mayra} alt="Mayra - Palestrante Confirmada" />
                <div className={styles.badge}>Confirmada</div>
              </div> */}

              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${
                    activeTab === "pos" ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab("pos")}
                >
                  Pós-Graduação
                </button>
                <button
                  className={`${styles.tab} ${
                    activeTab === "evento" ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab("evento")}
                >
                  Opções de Ingresso
                </button>
              </div>

              {activeTab === "pos" && (
                <div className={styles.tabContent}>
                  <h3>Invista no seu futuro</h3>
                  <p>
                    um dia inteiro de prática com Mayra gaiato! “Quem sabe faz
                    ao vivo”
                  </p>

                  <ul className={styles.benefitsList}>
                    <li>
                      <GiCheckMark /> Acesso a conteúdo exclusivo
                    </li>
                    <li>
                      <GiCheckMark /> Certificação reconhecida
                    </li>
                    <li>
                      <GiCheckMark /> 1 dia de acesso ao Conect 2026
                    </li>
                    <li>
                      <GiCheckMark /> Networking com profissionais
                    </li>
                  </ul>

                  <ButtonPretty
                    text="Visitar site da Mayra"
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
                      <span className={styles.price}>12 x R$ 101,15</span>
                      <ButtonPretty
                        text="Comprar Agora"
                        link="https://pay.hotmart.com/D101401576U?off=1zhb4drs"
                        target="_blank"
                      />
                    </div>

                    <div className={styles.ticketCard}>
                      <h4>Pacote 2 Dias</h4>
                      <p>Para quem já tem 1 dia através da pós-graduação.</p>
                      <span className={styles.price}>12 x R$ 80,00</span>
                      <ButtonPretty text="Comprar Agora" target="_blank" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.mediaColumn} data-aos="zoom-in">
            {/* <div className={styles.videoContainer}>
              <h3>Convite Especial</h3>
              <div className={styles.videoWrapper}>
                <video controls poster="/caminho/para/video-poster.jpg">
                  <source src={mayraQrCode} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              <p>
                Assista ao convite especial da Mayra para sua pós-graduação.
              </p>
            </div> */}
            <div className={styles.speakerImage}>
              <img
                className={styles.desktop}
                src={banner}
                alt="Mayra - Palestrante Confirmada"
              />
              <img
                className={styles.mobile}
                src={bannerMobile}
                alt="Mayra - Palestrante Confirmada"
              />
              {/* <div className={styles.imgOverlay}>
                <div className={styles.imgContent}>
                  <h4>Mayra Gaiato</h4>
                  <p>Referência nacional em Autismo e ABA</p>
                </div>
              </div> */}
              {/* <div className={styles.badge}>
                Confirmada <GiCheckMark />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersPos;
