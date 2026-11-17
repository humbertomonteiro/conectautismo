import styles from "./Authority.module.css";

import { FaBrain, FaExchangeAlt, FaHandsHelping, FaEye } from "react-icons/fa";

// Textos de cabeçalho (edite aqui)
const EYEBROW = "O CONGRESSO";
const TITLE_LINE_1 = "Por que estar";
const TITLE_LINE_2 = "no Conect?";
const INTRO = ""; // opcional: parágrafo curto abaixo do título

const benefits = [
  {
    title: "CIÊNCIA",
    icon: <FaBrain />,
    description: "Conhecimento que amplia perspectivas.",
  },
  {
    title: "ATUALIZAÇÃO",
    icon: <FaExchangeAlt />,
    description:
      "Grandes especialistas discutindo o presente e o futuro do neurodesenvolvimento.",
  },
  {
    title: "CONEXÃO",
    icon: <FaHandsHelping />,
    description: "Pessoas de diferentes lugares reunidas pelo mesmo propósito.",
  },
  {
    title: "EXPERIÊNCIA",
    icon: <FaEye />,
    description:
      "Porque algumas coisas precisam ser vividas para serem compreendidas.",
  },
];

export default function Authority() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.header} data-aos="fade-up">
          <span className={styles.eyebrow}>{EYEBROW}</span>
          <h2 className={styles.heading}>
            {TITLE_LINE_1}
            <br />
            <span className={styles.headingAccent}>{TITLE_LINE_2}</span>
          </h2>
          {INTRO && <p className={styles.intro}>{INTRO}</p>}
        </header>

        <ol className={styles.list}>
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.cardText}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.description}>{benefit.description}</p>
              </div>
              <div className={styles.icon} aria-hidden="true">
                {benefit.icon}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
