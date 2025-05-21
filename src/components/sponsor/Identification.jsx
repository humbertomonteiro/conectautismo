import styles from "./sponsor.module.css";

const Identification = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Identificação</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        A equipe deverá comparecer ao credenciamento antes de ingressar nas
        áreas do evento para retirar sua credencial.
      </li>
      <li className={styles.listItem}>
        Documento de identificação (RG, carteira de motorista, etc.).
      </li>
      <li className={styles.listItem}>Ingresso Conect Autismo válido.</li>
    </ul>
    <p>
      Após apresentação dos documentos mencionados, o expositor poderá ter
      acesso à área de montagem. Expositores que não apresentarem documentos
      serão impedidos de acessar a área de montagem do evento.
    </p>
  </div>
);

export default Identification;
