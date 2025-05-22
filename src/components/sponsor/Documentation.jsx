import styles from "./sponsor.module.css";

const Documentation = ({ setActiveSection }) => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Documentação Obrigatória</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Projeto do Stand (Aprovado pelo Arquiteto Cenomagia).
      </li>
      <li className={styles.listItem}>
        Apólice de Seguro (Com as coberturas descritas no Manual).
      </li>
      <li className={styles.listItem}>
        Termo de Responsabilidade (Disponível para download na página do
        expositor).
      </li>
      <li className={styles.listItem}>
        Laudos Técnicos das Instalações Temporárias e Elétricas (Disponível para
        download no sistema do expositor).
      </li>
      <li className={styles.listItem}>Comprovante de Pagamento de Quitação.</li>
    </ul>
    <p>
      Sem a apresentação das documentações acima, não será permitido o início do
      processo de montagem.
    </p>
    <button
      className={styles.linkButton}
      onClick={() => setActiveSection("schedule")}
      role="link"
      aria-label="Navegar para o cronograma"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActiveSection("schedule");
        }
      }}
    >
      Confira os prazos de envio da documentação na página do expositor.
    </button>
  </div>
);

export default Documentation;
