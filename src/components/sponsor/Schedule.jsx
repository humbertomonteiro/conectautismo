import styles from "./sponsor.module.css";

const Schedule = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Cronograma</h1>
    <div>
      <h3>Descarga de Materiais e Montagem</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>20 DE AGOSTO DE 2026:</strong>{" "}
          <div className={styles.listItemHighlight}>08h ÀS 17h</div> -
          EXPOSITORES CREDENCIADOS (DESCARGA DE MATERIAL E MONTAGEM){" "}
          <strong>NÃO</strong> é permitido montagem a partir do horário e data
          estipulado! <br /> <strong>PAVILHÃO A SER UTILIZADO: MUNDAÚ</strong>
        </li>
      </ul>
    </div>

    <div>
      <h3>Desmontagem</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>23 DE AGOSTO DE 2026 :</strong>{" "}
          <div className={styles.listItemHighlight}>18h30 ÀS 20h</div> – APÓS O
          CONGRESSO <br />
          <strong>RETIRADA DE ITENS PESSOAIS E MATERIAIS DE VALOR.</strong>
        </li>
        <li className={styles.listItem}>
          <strong>24 DE AGOSTO DE 2026:</strong>{" "}
          <div className={styles.listItemHighlight}>08h ÀS 17h</div> – PRODUÇÃO
          E EXPOSITORES CREDENCIADOS (DESMONTAGEM) <br />
          <strong>NÃO</strong> é permitido desmontagem a partir do horário e
          data estipulado!
        </li>
      </ul>
    </div>

    <div>
      <h3>
        Avisos e Infrações – VÁLIDO PARA DESCARREGAMENTO, MONTAGEM, MANUTENÇÃO E
        DESMONTAGEM.
      </h3>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          O horário de chegada da equipe de atendimento do Expositor, que ficará
          alocada em seu stand, deverá anteceder à abertura do evento, durante
          todos os dias de sua realização.
        </li>
        <li className={styles.listItem}>
          O stand já deverá estar aberto a visitações dos congressistas desde a
          abertura de cada dia do evento.
        </li>
        <li className={styles.listItem}>
          Todos os horários indicados acima devem ser respeitados, visto que não
          serão tolerados atrasos no processo de montagem tanto na área da
          feira, quanto nas demais áreas do evento.
        </li>
        <li className={styles.listItem}>
          Orientem suas equipes para cumprimento dos períodos de montagem e
          desmontagem indicados.
        </li>
        <li className={styles.listItem}>
          Fica terminantemente proibido o fechamento e/ou desmontagem do stand
          antes do encerramento do evento, estando o Expositor sujeito às
          penalidades previstas contratualmente
        </li>
        <li className={styles.listItem}>
          Em caso de quaisquer atrasos que ultrapasse os horários aqui
          estipulados, a montadora e os patrocinadores estarão sujeitos à multa,
          com valores apurados e apresentados pela organização mediante a
          situação.
        </li>
      </ul>

      <div className={styles.warningMessage}>
        <h3>IMPORTANTE:</h3>
        <ul>
          <li>
            A organização NÃO se responsabiliza pelo fornecimento de materiais,
            mobiliário ou estrutura para os estandes. Cada expositor deverá
            providenciar todos os itens necessários para a montagem e operação
            do seu espaço, como mesas, cadeiras, suportes para banners,
            displays, extensões, entre outros. Caso prefira, o expositor poderá
            contratar uma empresa especializada para realizar a montagem e a
            estruturação do estande.
          </li>
          <li>
            A organização NÃO fornecerá ponto elétrico para os estandes dos
            expositores. Caso haja necessidade de energia elétrica, toda a
            instalação, solicitação e estrutura necessária deverão ser
            providenciadas pela empresa montadora contratada pelo expositor, que
            será integralmente responsável pela execução e adequação da
            instalação, em conformidade com as normas de segurança e do local do
            evento.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Schedule;
