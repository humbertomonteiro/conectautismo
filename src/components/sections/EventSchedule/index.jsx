// components/EventSchedule/EventSchedule.jsx
import React from "react";
import styles from "./EventSchedule.module.css";
import { FaClock, FaExclamationTriangle } from "react-icons/fa";
import ButtonPretty from "../../shared/ButtonPretty";

const EventSchedule = ({ id }) => {
  const scheduleData = [
    {
      day: "SEXTA",
      time: "Dia todo",
      title: "Prática com Mayra Gaiato",
      description: "Quem sabe faz ao vivo - Dia inteiro de prática clínica",
      type: "practice",
      isSeparateTicket: false,
    },
    {
      day: "SEXTA NOITE",
      time: "Horário a definir",
      title: "White Party Conect Autismo",
      description: "Festa exclusiva do Conect Autismo",
      type: "party",
      isSeparateTicket: true,
    },
    {
      day: "SÁBADO",
      time: "Manhã e Tarde",
      title: "Palestras",
      description: "Palestras com especialistas e profissionais renomados",
      type: "talk",
      isSeparateTicket: false,
    },
    {
      day: "DOMINGO",
      time: "Manhã e Tarde",
      title: "Palestras",
      description: "Palestras e encerramento do evento",
      type: "talk",
      isSeparateTicket: false,
    },
  ];

  return (
    <section id={id || "schedule"} className={styles.container}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.header}>
        <h2 className={styles.title}>CRONOGRAMA</h2>
        <p className={styles.subtitle}>
          Confira a programação completa do Conect Autismo 2026
        </p>
      </div>

      <div className={styles.timeline}>
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${styles[item.type]} ${
              item.isSeparateTicket ? styles.separateTicket : ""
            }`}
          >
            <div className={styles.timelineContent}>
              <div className={styles.time}>
                <FaClock className={styles.timeIcon} />
                {item.time}
              </div>

              <div className={styles.itemMain} data-aos="zoom-in">
                <div className={styles.itemHeader}>
                  <span className={styles.day}>{item.day}</span>
                  {item.isSeparateTicket && (
                    <span className={styles.warningTag}>
                      <FaExclamationTriangle /> Ingresso separado
                    </span>
                  )}
                </div>

                <div className={styles.itemText}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>

                  {item.isSeparateTicket && (
                    <div className={styles.ticketAction}>
                      <ButtonPretty link="#party-ticket" text="Garantir" />

                      {/* <span className={styles.soon}>Vendas em breve</span> */}
                    </div>
                  )}

                  {!item.isSeparateTicket && (
                    <div className={styles.includedTag}>
                      Incluso no ingresso do Conect
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < scheduleData.length - 1 && (
                  <div className={styles.markerLine}></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aviso discreto no final */}
      {/* <div className={styles.footerNote}>
        <FaExclamationTriangle className={styles.footerIcon} />
        <p>
          <strong>Importante:</strong> A White Party de sexta à noite possui
          ingresso separado e não está inclusa no ingresso do Conect Autismo.
        </p>
      </div> */}
    </section>
  );
};

export default EventSchedule;
