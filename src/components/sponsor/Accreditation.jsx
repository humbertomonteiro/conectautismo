import styles from "./sponsor.module.css";

const Accreditation = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Credenciamento</h1>

    <h3 className={styles.subSectionTitle}>Credenciamento</h3>
    <p className={styles.sectionText}>
      O expositor é responsável pelo credenciamento de seus funcionários e
      fornecedores.
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Enviar os dados da equipe via e-mail conforme orientações da
        organização.
      </li>
      <li className={styles.listItem}>
        O expositor responde por danos, avarias, furtos ou roubos causados por
        sua equipe ou fornecedores cadastrados.
      </li>
    </ul>

    <h3 className={styles.subSectionTitle}>Retirada de Credenciais</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Disponível a partir de 21/08/2025, quinta-feira, às 14:00.
      </li>
      <li className={styles.listItem}>
        Cada expositor deve retirar sua credencial individualmente.
      </li>
      <li className={styles.listItem}>
        Credenciais extras não serão disponibilizadas.
      </li>
    </ul>
  </div>
);

export default Accreditation;
