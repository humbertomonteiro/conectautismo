import { FaArrowRight } from "react-icons/fa";
import styles from "./sponsor.module.css";

const Documentation = ({ setActiveSection }) => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Documentação Obrigatória</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Apólice de Seguro (Com as coberturas descritas no Manual).
      </li>
      <li className={styles.listItem}>
        Termo de Responsabilidade{" "}
        <div className={styles.downloadButtonContainer}>
          <a
            className={styles.downloadButton}
            href="https://docs.google.com/document/d/1Rpz9pxMUrV-hMDT-hg9_W-Q_SobPhsGW/mobilebasic"
            target="_blank"
          >
            Termo de responsabilidade <FaArrowRight />
          </a>
        </div>
      </li>
      <li className={styles.listItem}>
        Laudos Técnicos das Instalações Temporárias e Elétricas
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
