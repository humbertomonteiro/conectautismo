import styles from "./sponsor.module.css";

const Promotions = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Promoções</h1>

    <h3 className={styles.subSectionTitle}>Ações Promocionais</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Ações promocionais são permitidas apenas dentro dos limites do stand do
        expositor.
      </li>
      <li className={styles.listItem}>
        Corredores são de uso comum, sendo proibido aliciar visitantes,
        distribuir impressos ou artigos promocionais, sob pena de recolhimento
        pela Comissão Organizadora.
      </li>
      <li className={styles.listItem}>
        Não é permitida a instalação de infláveis, faixas, painéis, motivos
        decorativos ou tapetes fora do stand.
      </li>
      <li className={styles.listItem}>
        Proibida a circulação de pessoas com fantasias, trajes infláveis ou
        caracterizações representando produtos, marcas ou temas do expositor em
        corredores ou áreas comuns.
      </li>
      <li className={styles.listItem}>
        Todo material exposto deve ser retirado no primeiro dia de desmontagem
        (24/08/2025). Materiais não retirados serão destruídos.
      </li>
      <li className={styles.listItem}>
        A Comissão Organizadora pode suspender a demonstração de materiais que
        apresentem riscos a pessoas, mercadorias ou estruturas. Materiais
        irregulares serão apreendidos e devolvidos após o evento.
      </li>
      <li className={styles.listItem}>
        Atividades científicas ou sociais fora do Centro de Convenções devem ser
        aprovadas previamente pela comissão e não podem coincidir com atividades
        oficiais do evento.
      </li>
    </ul>

    <h3 className={styles.subSectionTitle}>Demonstração de Equipamentos</h3>
    <p className={styles.sectionText}>
      A demonstração de equipamentos deve seguir normas de segurança para evitar
      transtornos no evento.
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        A Comissão Organizadora pode suspender ou limitar o horário de
        demonstrações que produzam ruído, vibrações, fumaça, odores ou outros
        transtornos.
      </li>
      <li className={styles.listItem}>
        Qualquer promoção no Centro de Convenções ou usando seu nome requer
        autorização prévia.
      </li>
    </ul>

    <h3 className={styles.subSectionTitle}>Panfletagem</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Distribuição de panfletos é permitida apenas dentro do stand.
      </li>
      <li className={styles.listItem}>
        Panfletagem em áreas comuns requer autorização prévia da organização.
      </li>
    </ul>

    <h3 className={styles.subSectionTitle}>Brindes</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Recomenda-se distribuir brindes como itens de papelaria (canetas, lápis,
        blocos, agendas, canecas, squeezes, etc.).
      </li>
      <li className={styles.listItem}>
        A distribuição deve ser restrita à área do stand, sendo proibida em
        áreas comuns.
      </li>
      <li className={styles.listItem}>
        Cada empresa deve seguir seu código de conduta e as normas das
        associações às quais é afiliada.
      </li>
    </ul>

    <h3 className={styles.subSectionTitle}>
      Resoluções RDC nº 96/2008 e nº 23/2009 – ANVISA
    </h3>
    <p className={styles.sectionText}>
      A distribuição de amostras grátis de medicamentos deve seguir as normas da
      ANVISA:
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Amostras grátis só podem ser distribuídas a profissionais prescritores
        em ambulatórios, hospitais, consultórios médicos ou odontológicos.
      </li>
      <li className={styles.listItem}>
        Proibida a distribuição de amostras grátis de vacinas, preparações
        magistrais ou medicamentos isentos de prescrição.
      </li>
      <li className={styles.listItem}>
        Material promocional deve ser distribuído a participantes com
        identificação profissional visível nos crachás.
      </li>
      <li className={styles.listItem}>
        Espaços de exposição e auditórios podem exibir o nome comercial do
        medicamento, substância ativa e/ou nome da empresa, usando a marca
        aprovada pela ANVISA.
      </li>
      <li className={styles.listItem}>
        Proibido o uso de slogans, símbolos, imagens ou argumentos publicitários
        nos materiais.
      </li>
    </ul>
  </div>
);

export default Promotions;
