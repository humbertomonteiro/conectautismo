import { useState, useEffect } from "react";
import styles from "./welcome.module.css";
import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
import ButtonPretty from "../../shared/ButtonPretty";
import bg from "../../../assets/imgs/background/bg.jpg";

export default function Welcome() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Define a data de término como 19 de agosto de 2025 às 00:00
    const endTime = new Date("2025-08-19T00:00:00-03:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Atualiza o temporizador imediatamente e a cada segundo
    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  // Formata o tempo para exibir com dois dígitos
  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <section className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo} data-aos="zoom-in">
            <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" />
          </div>
          <div className={styles.text} data-aos="zoom-in" data-aos-delay="300">
            <p className={styles.subtitle}>
              O <strong>maior congresso</strong> sobre transtorno do
              neurodesenvolvimento norte e nordeste.
            </p>
            <div className={styles.highlight}>
              <span className={styles.highlightMobile}>
                21, 22 e 23 de agosto 2026
              </span>{" "}
              <span className={styles.divider}>|</span>{" "}
              <span className={styles.highlightMobile}>
                Centro de eventos do Ceará
              </span>
            </div>
          </div>
          <div
            className={styles.countdown}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span>
              Pré-venda começa em:{" "}
              {timeLeft.days > 0 ||
              timeLeft.hours > 0 ||
              timeLeft.minutes > 0 ||
              timeLeft.seconds > 0
                ? `${timeLeft.days}d ${formatTime(timeLeft.hours)}:${formatTime(
                    timeLeft.minutes
                  )}:${formatTime(timeLeft.seconds)}`
                : "Vendas abertas!"}
            </span>
          </div>
          <div
            className={styles.buttons}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <ButtonPretty link={"#tickts"} text={"Compre com o menor preço"} />
          </div>
        </div>
        <div className={styles.image}>
          <img src={bg} alt="Imagem de pessoas felizes no conect autismo" />
        </div>
      </div>
    </section>
  );
}
