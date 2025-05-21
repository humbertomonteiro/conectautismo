import styles from "./sponsor.module.css";

const GeneralRules = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Local</h1>
    <p className={styles.sectionText}>
      Centro de Convenções, Rua Exemplo, 123, São Paulo, SP.
      <br />
      Estacionamento disponível no local.
      <br />
      Acesso por transporte público: Estação Exemplo (Linha Azul).
    </p>
  </div>
);

export default GeneralRules;
