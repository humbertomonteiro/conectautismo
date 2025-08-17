import { useEffect, useState } from "react";
import styles from "./contagem.module.css";

export default function Contagem({ dateEvent }) {
  const [finalDays, setFinalDays] = useState(0);
  const [finalHours, setFinalHours] = useState(0);
  const [finalMinutes, setFinalMinutes] = useState(0);
  const [finalSeconds, setFinalSeconds] = useState(0);

  useEffect(() => {
    // Parse da data no formato DD/MM/YYYY
    const [day, month, year] = dateEvent.split("/");
    const dateFinal = new Date(
      `${year}-${month}-${day}T00:00:00-03:00`
    ).getTime();

    const updateTimer = () => {
      const today = new Date().getTime();
      const segTotal = (dateFinal - today) / 1000;

      if (segTotal <= 0) {
        setFinalDays(0);
        setFinalHours(0);
        setFinalMinutes(0);
        setFinalSeconds(0);
        return;
      }

      const days = Math.floor(segTotal / (60 * 60 * 24));
      const hours = Math.floor((segTotal % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((segTotal % (60 * 60)) / 60);
      const seconds = Math.floor(segTotal % 60);

      setFinalDays(days);
      setFinalHours(hours);
      setFinalMinutes(minutes);
      setFinalSeconds(seconds);
    };

    // Atualiza imediatamente e a cada segundo
    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, [dateEvent]);

  // Formata números com dois dígitos
  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div className={styles.container}>
      {/* <Title text={"CONTAGEM REGRESSIVA CONECT AUTISMO"} /> */}
      <div className={styles.timer} data-aos="fade-down">
        <div className={styles.item}>
          <h3>{formatTime(finalDays)}</h3>
          <span>Dias</span>
        </div>
        <span>:</span>
        <div className={styles.item}>
          <h3>{formatTime(finalHours)}</h3>
          <span>Horas</span>
        </div>
        <span>:</span>
        <div className={styles.item}>
          <h3>{formatTime(finalMinutes)}</h3>
          <span>Minutos</span>
        </div>
        <span>:</span>
        <div className={styles.item}>
          <h3>{formatTime(finalSeconds)}</h3>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  );
}
