import styles from "./sponsor.module.css";

const ProhibitedEquipment = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Equipamentos proibidos</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        É proibido o funcionamento de motores a combustão no interior do evento.
        É também proibida a utilização de explosivos, gases não inertes, tóxicos
        e combustíveis;
      </li>
      <li className={styles.listItem}>
        É expressamente proibido o uso de gás tipo GLP, ou qualquer outro tipo
        de gás inflamável.
      </li>
      <li className={styles.listItem}>
        É proibido fechar as saídas de emergências, acessos à hidrantes e
        extintores com materiais de montagem, estandes e qualquer tipo de
        objetos, durante a montagem, realização e desmontagem do evento.
      </li>
    </ul>
  </div>
);

export default ProhibitedEquipment;
