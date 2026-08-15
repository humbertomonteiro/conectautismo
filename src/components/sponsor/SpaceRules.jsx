import styles from "./sponsor.module.css";

const SpaceRules = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Regras do Espaço</h1>
    <h3>Regras Gerais</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        É proibido fumar no interior do espaço, conforme o Decreto n° 2018/96 e
        a Lei Federal n° 92914/96, que preveem a proibição do uso de cigarros em
        ambiente coletivo, privado ou público, com penalidade de multa aos que
        as infrigirem.
      </li>
      <li className={styles.listItem}>
        É obrigatório uso de EPI (Equipamentos de Proteção Individual), de
        acordo com os serviços a serem executados, durante todo o período de
        montagem e desmontagem dos stands.
      </li>
      <li className={styles.listItem}>
        Não será permitido o consumo de alimentos na área de montagem.
      </li>
      <li className={styles.listItem}>
        Não será permitido serviços de pintura no local de evento.
      </li>
      <li className={styles.listItem}>
        Proibido máquinas de fumaça, incensos ou aromaterapia de qualquer tipo.
      </li>
      <li className={styles.listItem}>
        Não poderá ser guardado qualquer tipo de material atrás dos estandes;
      </li>
      <li className={styles.listItem}>
        A montadora deverá colocar uma forração protetora sobre o piso, em toda
        a extensão da área a ser ocupada. Em nenhuma hipótese, os stands deverão
        ser montados diretamente sobre o piso.
        <li>
          A forração deverá ser fixada com fita crepe + ‘dupla face 3M de 25
          mm’. Outro tipo de material ou fita não será permitido.
        </li>
      </li>
      <li className={styles.listItem}>
        Não é permitido apoiar, fixar, colar, amarrar, pendurar ou colocar
        qualquer tipo de material nas paredes, divisórias, portas dos salões,
        teto dos salões, nos foyers e/ou áreas de circulação, sem a autorização
        prévia da coordenação de eventos do Centro de Eventos. É terminantemente
        proibido fixar qualquer material nos “Sprinkles”
      </li>
      <li className={styles.listItem}>
        Não será permitido qualquer tipo de montagem ou obstrução às saídas de
        emergência, extintores e/ou hidrantes. Também não será permitida a
        passagem de fios frente às portas, que deverão permanecer livres para
        circulação, e todos os passa-cabos deverão estar devidamente
        sinalizados.
      </li>
      <li className={styles.listItem}>
        Quaisquer danos causados à estrutura do espaço, sendo comprovada a
        autoria destes, serão de responsabilidade do expositor e de seus
        fornecedores.
      </li>
      <li className={styles.listItem}>
        Nos pavilhões climatizados não poderá ser colocado ar condicionado nos
        stands.
      </li>
      <li className={styles.listItem}>
        Fica expressamente vedado o ingresso de menores de 18 anos aos espaços
        autorizados, durante o período de montagem e desmontagem dos eventos.
      </li>
    </ul>

    <h3>Sanitários</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Os toaletes não deverão ser utilizados para limpeza de materiais,
        lavagem de pano de chão etc.
      </li>
      <li className={styles.listItem}>É proibido fumar nos sanitários.</li>
      <li className={styles.listItem}>
        Os sanitários de serviço do local estarão liberados para a higiene
        pessoal dos colaboradores das montadoras, estando terminantemente
        proibida sua utilização para limpeza de equipamentos, materiais, lavagem
        de pincéis etc.
      </li>
      <li className={styles.listItem}>
        A utilização destes para realização de propagandas de qualquer espécie
        NÃO está autorizada.
      </li>
    </ul>
  </div>
);

export default SpaceRules;
