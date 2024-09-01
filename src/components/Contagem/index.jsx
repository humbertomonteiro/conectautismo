import { useEffect, useState } from "react";
import styles from "./contagem.module.css";
import Title from "../Title";

const dateEvent = "24 aug 2024";

const dateFinal = new Date(dateEvent);
const today = new Date();

const segTotal = (dateFinal - today) / 1000;

export default function Contagem() {
  const [finalWeeks, setFinalWeeks] = useState(0);
  const [finalDays, setFinalDays] = useState(0);
  const [finalHours, setFinalHours] = useState(0);
  const [finalMenutes, setFinalMenutes] = useState(0);

  useEffect(() => {
    setFinalWeeks(Math.floor(segTotal / 60 / 60 / 24 / 7));
    setFinalDays(Math.floor(segTotal / 60 / 60 / 24) % 7);
    setFinalHours(Math.floor(segTotal / 60 / 60) % 24);
    setFinalMenutes(Math.floor(segTotal / 60) % 60);
  }, []);

  return (
    <div className={styles.container}>
      <Title text={"CONTAGEM REGRESSIVA CONECT AUTISMO"} />
      <div className={styles.timer} data-aos="fade-down">
        <div className={styles.item}>
          <h3>{finalWeeks < 10 ? `0${finalWeeks}` : finalWeeks}</h3>
          <span>Semanas</span>
        </div>
        <span>:</span>
        <div className={styles.item}>
          <h3>{finalDays < 10 ? `0${finalDays}` : finalDays}</h3>
          <span>Dias</span>
        </div>
        <span>:</span>
        <div className={styles.item}>
          <h3>{finalHours < 10 ? `0${finalHours}` : finalHours}</h3>
          <span>Horas</span>
        </div>
        <span>:</span>
        <div className={styles.item}>
          <h3>{finalMenutes < 10 ? `0${finalMenutes}` : finalMenutes}</h3>
          <span>Minutos</span>
        </div>
      </div>
    </div>
  );
}
