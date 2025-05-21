import styles from "./sponsor.module.css";

const Schedule = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Cronograma</h1>
    <div>
      <h3>Descarga de Materiais e Montagem</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>21 de Agosto de 2025:</strong> 08h – 18h - Montadora Oficial
          (Marcação e Descarga de Material). Autorizado apenas produção do
          evento.
        </li>
        <li className={styles.listItem}>
          <strong>22 de Agosto de 2025:</strong> 12h – 18h - Expositores
          Credenciados (Entrada de material).
        </li>
        <li className={styles.listItem}>
          <strong>Detalhes Finais:</strong> 18h (Não é permitido montagem a
          partir deste horário).
        </li>
      </ul>
    </div>

    <div>
      <h3>Desmontagem</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>24 de Agosto de 2025:</strong> 18h às 20h (Após congresso,
          retirada de itens pessoais e materiais de valor).
        </li>
        <li className={styles.listItem}>
          <strong>25 de Agosto de 2025:</strong> 06h às 18h.
        </li>
      </ul>
    </div>

    <div>
      <h3>Avisos e Infrações</h3>
      <p>
        Acompanhe a programação do evento no site: <a href="#">Programação</a>.
        O horário de chegada da equipe de atendimento do expositor, que ficará
        alocada no stand, deverá anteceder a abertura do evento, durante os dias
        de sua realização.
      </p>
      <p>
        O stand deverá estar aberto e pronto para receber os congressistas desde
        a abertura de cada dia do evento.
      </p>
      <p>
        Fica terminantemente proibido o fechamento e/ou desmontagem do stand
        antes do horário de encerramento do evento, estando o expositor sujeito
        às penalidades previstas contratualmente.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Todos os horários indicados devem ser respeitados, pois não serão
          aceitos atrasos nos processos de montagem tanto da área da feira
          quanto das demais áreas do evento.
        </li>
        <li className={styles.listItem}>
          Organize e oriente suas equipes para cumprir os períodos de montagem e
          desmontagem indicados.
        </li>
        <li className={styles.listItem}>
          Em caso de atrasos que ultrapassem os horários apresentados, a
          montadora e os patrocinadores estarão sujeitos a uma multa.{" "}
          <span>
            (Os valores serão apurados e apresentados pela organização)
          </span>
          <br />
          <strong>
            Válido para descarregamento, montagem, manutenção e desmontagem.
          </strong>
        </li>
      </ul>
    </div>
  </div>
);

export default Schedule;
