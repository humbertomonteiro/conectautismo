import styles from "./sponsor.module.css";

const Sound = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Som</h1>
    <h2>Som ao vivo e música ambiente</h2>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Não é permitido o uso de som amplificado nem show ao vivo no interior
        dos estandes e áreas de circulação comum;
      </li>
      <li className={styles.listItem}>
        A desobediência a norma estabelecida no item acima sujeitará o EXPOSITOR
        às seguintes penalidades pela ordem:
      </li>
    </ul>
    <ol className={styles.list}>
      <li className={styles.listItemOrder}>
        Aviso de advertência através da Coordenação de Evento;
      </li>
      <li className={styles.listItemOrder}>
        Segunda advertência com corte de energia por 15 minutos;
      </li>
      <li className={styles.listItemOrder}>
        Corte de energia do stand com religação somente após 1 hora;
      </li>
      <li className={styles.listItemOrder}>
        Corte de energia do stand com religação somente no dia seguinte;
      </li>
    </ol>
  </div>
);

export default Sound;
