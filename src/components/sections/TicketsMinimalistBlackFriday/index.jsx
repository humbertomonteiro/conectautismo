import React, { useState } from "react";
import styles from "./TicketsMinimalistBlackFriday.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
// import mayra from "../../../assets/imgs/speakers/mayra.jpg";
// import banner from "../../../assets/imgs/speakers/banner.jpeg";
// import bannerMobile from "../../../assets/imgs/speakers/banner-mobile.jpeg";

import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";
import useLink from "../../../contexts/LinkContexts";

const TicketsMinimalistBlackFriday = () => {
  const [activeTab] = useState("evento");
  const {
    ticketBlack10,
    ticketBlack15,
    ticketBlack25,
    ticketBlack30,
    ticketBlack40,
  } = useLink();

  return (
    <section className={styles.section} id="tickets2">
      <div className={styles.globalLines}>
        <div className={styles.gLine1}></div>
        <div className={styles.gLine2}></div>
        <div className={styles.gLine3}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="BLACK FRIDAY CONECT" />
        </div>

        <div className={styles.content}>
          <div className={styles.infoColumn}>
            <div className={styles.speakerCard} data-aos="zoom-in">
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

              <div className={styles.tabContent}>
                <h3>Opções de Ingresso</h3>
                <p>Escolha a melhor forma de participar do Conect 2026:</p>

                <div className={styles.ticketOptions}>
                  <div className={styles.ticketCard}>
                    <h4>INGRESSO BLACK FRIDAY - DESCONTO PROGRESSIVO</h4>
                    {/* <ul className={styles.listDiscount}>
                      <li>1 Ingresso 10% OFF</li>
                      <li>2 Ingressos 15% OFF</li>
                      <li>3 Ingressos 25% OFF</li>
                      <li>4 Ingressos 30% OFF</li>
                      <li>5 Ingressos ou mais 40% OFF</li>
                    </ul> */}
                    <div className={styles.buttons}>
                      <div className="">
                        <span className={styles.price}>
                          <div className={styles.quantityTickets}>
                            1 Ingresso por
                          </div>{" "}
                          {ticketBlack10.price}
                        </span>
                        <ButtonPretty
                          text="Garantir 10% OFF"
                          link={ticketBlack10.link}
                          target="_blank"
                          data-color="yellow"
                        />
                        <p className={styles.info}>R$ 1114,68 o ingresso</p>
                      </div>

                      <div className="">
                        <span className={styles.price}>
                          <div className={styles.quantityTickets}>
                            2 Ingressos por
                          </div>{" "}
                          {ticketBlack15.price}
                        </span>
                        <ButtonPretty
                          text="Garantir 15% OFF"
                          link={ticketBlack15.link}
                          target="_blank"
                          data-color="yellow"
                        />
                        <p className={styles.info}>R$ 1052,76 cada ingresso</p>
                      </div>

                      <div className="">
                        <span className={styles.price}>
                          <div className={styles.quantityTickets}>
                            3 Ingressos por
                          </div>{" "}
                          {ticketBlack25.price}
                        </span>
                        <ButtonPretty
                          text="Garantir 25% OFF"
                          link={ticketBlack25.link}
                          target="_blank"
                          data-color="yellow"
                        />
                        <p className={styles.info}>R$ 928,92 cada ingresso</p>
                      </div>

                      <div className="">
                        <span className={styles.price}>
                          <div className={styles.quantityTickets}>
                            4 Ingressos por
                          </div>{" "}
                          {ticketBlack30.price}
                        </span>
                        <ButtonPretty
                          text="Garantir 30% OFF"
                          link={ticketBlack30.link}
                          target="_blank"
                          data-color="yellow"
                        />
                        <p className={styles.info}>R$ 867,00 cada ingresso</p>
                      </div>

                      <div className="">
                        <span className={styles.price}>
                          <div className={styles.quantityTickets}>
                            5 Ingressos por
                          </div>{" "}
                          {ticketBlack40.price}
                          {/* <span className={styles.textLower}>cada</span> */}
                        </span>
                        <ButtonPretty
                          text="Garantir 40% OFF"
                          link={ticketBlack40.link}
                          target="_blank"
                          data-color="yellow"
                        />
                        <p className={styles.info}>R$ 619,32 cada ingresso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsMinimalistBlackFriday;
