import styles from "./sponsor.module.css";

const Garments = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>EPIs e Vestimentas</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        É obrigatório o uso de Equipamentos de Proteção Individual (EPIs) de
        acordo com os serviços a serem executados.
      </li>
      <li className={styles.listItem}>
        Todos os montadores deverão utilizar EPIs durante todo o período de
        montagem.
      </li>
    </ul>
  </div>
);

export default Garments;
