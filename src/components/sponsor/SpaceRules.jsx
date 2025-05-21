import styles from "./sponsor.module.css";

const SpaceRules = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Regras do Espaço</h1>
    <h3>Regras Gerais</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        É proibido fumar no interior do espaço, conforme o Decreto nº 2018/96 e
        a Lei Federal nº 92914/96, que preveem a proibição do uso de cigarros em
        ambiente coletivo, privado ou público, com penalidade de multa.
      </li>
      <li className={styles.listItem}>
        Os sanitários de serviço estarão liberados para higiene pessoal dos
        colaboradores das montadoras, sendo proibida sua utilização para limpeza
        de equipamentos, materiais, ou lavagem de pincéis.
      </li>
      <li className={styles.listItem}>
        Não será permitido o consumo de alimentos na área de montagem.
      </li>
      <li className={styles.listItem}>
        Nenhum material de montagem deverá ser apoiado, fixado ou colado nas
        paredes, pilares ou teto do local do evento.
      </li>
      <li className={styles.listItem}>
        A montadora deverá colocar uma forração protetora sobre o piso, em toda
        a extensão da área a ser ocupada. Os stands não podem ser montados
        diretamente sobre o piso.
      </li>
      <li className={styles.listItem}>
        Quaisquer danos causados à estrutura do espaço, comprovada a autoria,
        serão de responsabilidade do expositor e de seus fornecedores.
      </li>
      <li className={styles.listItem}>
        Não será permitido serviços de pintura no local do evento.
      </li>
      <li className={styles.listItem}>
        A forração deverá ser fixada com fita crepe + “dupla face 3M 25 mm”.
        Outro tipo de material ou fita não será permitido.
      </li>
      <li className={styles.listItem}>
        Proibido o uso de máquinas de fumaça, incensos ou aromaterapia de
        qualquer tipo.
      </li>
      <li className={styles.listItem}>
        Não é permitido apoiar, amarrar, pendurar ou colocar qualquer material
        nas paredes, divisórias, portas dos salões, teto, foyers ou áreas de
        circulação, nem nos tetos dos salões, sem autorização prévia da
        coordenação de eventos do Centro de Eventos. É terminantemente proibido
        fixar material nos “sprinklers”.
      </li>
      <li className={styles.listItem}>
        Não será permitido qualquer tipo de montagem ou obstrução às saídas de
        emergência, extintores e hidrantes. Também não será permitida a passagem
        de fios em frente às portas, que deverão permanecer livres para
        circulação, utilizando passa-cabos devidamente sinalizados.
      </li>
      <li className={styles.listItem}>
        Nos pavilhões climatizados, não poderá ser colocado ar-condicionado nos
        stands.
      </li>
      <li className={styles.listItem}>
        Não poderá ser guardado qualquer tipo de material atrás dos estandes.
      </li>
      <li className={styles.listItem}>
        Fica expressamente vedado o ingresso de menores de 18 anos aos espaços
        autorizados durante o período de montagem e desmontagem dos eventos.
      </li>
    </ul>

    <h3>Sanitários</h3>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        As toaletes não deverão ser utilizadas para limpeza de materiais,
        lavagem de pano de chão, ou similares.
      </li>
      <li className={styles.listItem}>É proibido fumar nos sanitários.</li>
      <li className={styles.listItem}>
        A utilização dos sanitários para realização de propagandas de qualquer
        espécie não está autorizada.
      </li>
    </ul>
  </div>
);

export default SpaceRules;
