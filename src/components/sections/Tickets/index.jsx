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
  const {
    ticketWithParty,
    ticketWithoutParty,
    halfTicketWithParty,
    halfTicketWithoutParty,
    groupTicketWithParty4,
    groupTicketWithParty8,
    partyTicket,
  } = useLink();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Garanta Seu Ingresso" color="black" />
          {/* 
          <div className={styles.loteAlert}>
            <div className={styles.eventBadge}>
              <span>ATENÇÃO</span>
              <span className={styles.badgeYear}>ÚLTIMA CHANCE</span>
            </div>
            <p className={styles.alertText}>
              <strong>Virada de lote</strong> acontece no dia{" "}
              <strong>12 de abril</strong>
            </p>
            <span className={styles.alertSub}>
              Preços aumentam após essa data
            </span>
          </div> */}
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
                      <h4>Meia</h4>
                      <p>Acesso completo a todos os dias do evento</p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>
                            {halfTicketWithoutParty.price}
                          </span>
                          <ButtonPretty
                            text="Garantir Sem Festa"
                            link={halfTicketWithoutParty.link}
                            target="_blank"
                          />
                        </div>

                        <div className="">
                          <span className={styles.price}>
                            {halfTicketWithParty.price}
                          </span>
                          <ButtonPretty
                            text="Garantir Com Festa"
                            link={halfTicketWithParty.link}
                            target="_blank"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.ticketCard}>
                      <h4>Inteira</h4>
                      <p>Acesso completo a todos os dias do evento</p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>
                            {ticketWithoutParty.price}
                          </span>
                          <ButtonPretty
                            text="Garantir Sem Festa"
                            link={ticketWithoutParty.link}
                            target="_blank"
                          />
                        </div>

                        <div className="">
                          <span className={styles.price}>
                            {ticketWithParty.price}
                          </span>
                          <ButtonPretty
                            text="Garantir Com Festa"
                            link={ticketWithParty.link}
                            target="_blank"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={styles.ticketCard}>
                      <h4>Desconto em Grupo</h4>
                      <p>
                        <p className={styles.info}>
                          Venha em grupo, garanta 20% OFF Ou 30% OFF e GANHE a
                          Festa.
                        </p>
                      </p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>
                            {groupTicketWithParty4.price}
                            {/* <span className={styles.textLower}>cada</span> */}
                          </span>
                          <ButtonPretty
                            text="4 Pessoas 20% OFF"
                            link={groupTicketWithParty4.link}
                            target="_blank"
                          />
                          {/* <p className={styles.info}>20% OFF</p> */}
                        </div>
                        <div className="">
                          <span className={styles.price}>
                            {groupTicketWithParty8.price}
                            {/* <span className={styles.textLower}>cada</span> */}
                          </span>
                          <ButtonPretty
                            text="8 Pessoas 30% OFF"
                            link={groupTicketWithParty8.link}
                            target="_blank"
                          />
                          {/* <p className={styles.info}>30% OFF</p> */}
                        </div>
                      </div>
                    </div>
                    <div className={styles.ticketCard}>
                      <h4>Pré-festa avulsa</h4>
                      <p>
                        <p className={styles.info}>
                          Garanta o seu e do seu acompanhante
                        </p>
                      </p>
                      <div className={styles.buttons}>
                        <div className="">
                          <span className={styles.price}>
                            {partyTicket.price}
                            <span className={styles.textLower}>cada</span>
                          </span>
                          <ButtonPretty
                            text="Garantir Pré-festa"
                            link={partyTicket.link}
                            target="_blank"
                          />
                          {/* <p className={styles.info}>20% OFF</p> */}
                        </div>
                        {/* <div className="">
                          <span className={styles.price}>
                            {ticketGroup5.price}
                            <span className={styles.textLower}>cada</span>
                          </span>
                          <ButtonPretty
                            text="Grupo 8 Pessoas"
                            link={ticketGroup5.link}
                            target="_blank"
                          />
                          <p className={styles.info}>30% OFF</p>
                        </div> */}
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
              <h3>Palestrantes 2026</h3>
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
              {/* <div className={styles.buttonSpeakers}>
                <ButtonPretty text="Garantir Festa" link="#party-ticket" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
