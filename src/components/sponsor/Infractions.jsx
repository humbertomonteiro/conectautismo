import styles from "./sponsor.module.css";

const Infractions = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Infrações</h1>
    <p className={styles.sectionText}>
      O descumprimento das regras deste manual sujeitará o expositor às
      seguintes medidas:
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Notificação por e-mail sobre a irregularidade, com solicitação de
        suspensão imediata.
      </li>
      <li className={styles.listItem}>
        Em caso de reincidência ou continuidade, aplicação de multas
        não-compensatórias conforme a infração:
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Atraso na entrega do projeto (pré-evento):</strong> R$
            500,00 + R$ 100,00 por hora de atraso.
          </li>
          <li className={styles.listItem}>
            <strong>Atraso na montagem do stand:</strong> R$ 5.000,00 por hora
            de atraso + custos extras das equipes de acompanhamento.
          </li>
          <li className={styles.listItem}>
            <strong>Atraso na desmontagem do stand:</strong> R$ 5.000,00 por
            hora de atraso + custos extras das equipes de acompanhamento.
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Infractions;
