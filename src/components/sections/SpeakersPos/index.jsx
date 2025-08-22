import React, { useState } from "react";
import styles from "./speakersPos.module.css";
import mayraQrCode from "../../../assets/imgs/speakers/mayra-qr-code.png";
import ButtonPretty from "../../shared/ButtonPretty";

import { GiCheckMark } from "react-icons/gi";

const SpeakersPos = () => {
  const [activeTab, setActiveTab] = useState("pos");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Mayra - Confirmada no Conect 2026</h2>
          <p className={styles.subtitle}>
            Inédito: um dia todo de prática. Quem sabe faz ao vivo!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoColumn}>
            <div className={styles.speakerCard}>
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
                    Faça a pós-graduação com a Mayra e ganhe um dia de acesso ao
                    Conect 2026!
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
                      <span className={styles.price}>R$ 297,00</span>
                      <ButtonPretty text="Comprar esse" />
                    </div>

                    <div className={styles.ticketCard}>
                      <h4>Pacote 2 Dias</h4>
                      <p>Para quem já tem 1 dia através da pós-graduação.</p>
                      <span className={styles.price}>R$ 199,00</span>
                      <ButtonPretty text="Comprar esse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.mediaColumn}>
            <div className={styles.videoContainer}>
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
            </div>

            {/* <div className={styles.qrCodeContainer}>
              <h3>Escaneie para saber mais</h3>
              <div className={styles.qrCode}>
                <img src={mayraQrCode} alt="QR Code para a pós-graduação" />
              </div>
              <p>
                Use sua câmera para escanear o código e acessar informações
                sobre a pós-graduação
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersPos;
