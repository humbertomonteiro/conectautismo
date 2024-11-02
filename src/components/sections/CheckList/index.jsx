import Title from "../../shared/Title";
import styles from "./checkList.module.css";

import { FiCheckSquare } from "react-icons/fi";

export default function CheckList() {
  return (
    <section className={styles.container} data-aos="zoom-in">
      <Title text="Check-List" />

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Festa open bar.</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Certificado qualificado</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Espaços instagramaveis para foto.</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Expositores internacionais</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Dois dias de muita imersão</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Kit congressista alta qualidade</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Conteúdo Online Gravado 24 messes</p>
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
        <p>Kit coffee break</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>1 Grande palco.</p>
      </div>

      <div className={styles.item}>
        <FiCheckSquare />
        <p>Sessão de autografo com os maiores nomes do TEA</p>
      </div>
    </section>
  );
}
