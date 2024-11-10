import ButtonPretty from "../../shared/ButtonPretty";
import Title from "../../shared/Title";
import styles from "./checkList.module.css";

import { FiCheckSquare } from "react-icons/fi";

export default function CheckList() {
  return (
    <>
      <Title text="Check-List" />
      <section className={styles.container} data-aos="zoom-in">
        <div className={styles.content}>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Certificado qualificado.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Espaços instagramaveis para foto.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Expositores internacionais.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Dois dias de muita imersão.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Kit congressista alta qualidade.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Conteúdo Online Gravado 24 messes.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Sessão de fotos com fotografo profissional.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Palestrantes internacionais.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Grandes palestrantes inusitados.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>1 Grande palco.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Sessão de autografo com os maiores nomes do TEA.</p>
          </div>
          <div className={styles.item}>
            <FiCheckSquare />
            <p>Pré festa white party, open bar.</p>
          </div>
        </div>
        <ButtonPretty
          text={"Garantir minha vaga"}
          link={
            "https://pay.hotmart.com/A96222789P?off=2bsyn86r&bid=1730990288806&_gl=1*1vuf1r1*_ga*NzA2OTE0OTMuMTY4NTU2MzQzMg..*_ga_1PCEYDM0JC*MTczMTIyNzU1NS4xMi4xLjE3MzEyMzgzOTQuNjAuMC4w"
          }
        />
      </section>
    </>
  );
}
