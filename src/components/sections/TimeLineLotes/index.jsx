import styles from "./timeLineLotes.module.css";

// import { IoRocketOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const TimeLineLotes = () => {
  const lotes = [
    { name: "Pré-venda", status: "Esgotado", icon: <IoClose /> },
    { name: "1º Lote", status: "Esgotado", icon: <IoClose /> },
    { name: "2º Lote", status: "Esgotado", icon: <IoClose /> },
    { name: "3º Lote", status: "Esgotado", icon: <IoClose /> },
    // { name: "3º Lote", status: "Esgotado", icon: <IoRocketOutline /> }, Icone de foguete para informar lote acabando
  ];

  return (
    <div className={styles.timeline} data-aos="zoom-in">
      <h2>INGRESSOS ESGOTADOS - Entre na lista de espera!</h2>
      {/* <h2>GARANTA JÁ SUA VAGA</h2> */}
      <div className={styles.boxes}>
        {lotes.map((lote, index) => (
          <>
            <a
              href="https://pay.hotmart.com/A96222789P?off=cui8duv5&bid=1742215373582"
              target="_blank"
              key={index}
              className={styles.timelineItem}
              data-current={lote.status === "Últimas 100 vagas"}
            >
              <div>
                <span>{lote.name}</span>
                <p>{lote.status}</p>
                {lote.icon}
              </div>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default TimeLineLotes;
