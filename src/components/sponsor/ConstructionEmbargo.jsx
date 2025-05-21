import styles from "./sponsor.module.css";

const ConstructionEmbargo = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Embargo da construção</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        A Comissão Organizadora tem o direito de embargar a construção do stand
        ou a parte dele que possa estar em desacordo com as normas de segurança
        estruturais e deste manual.
      </li>
      <li className={styles.listItem}>
        Caso a montadora contratada pelo expositor não reformule o projeto e a
        construção em tempo hábil, o stand não poderá ser utilizado no período
        de realização, sem prejuízo dos custos contratuais com os organizadores.
      </li>
    </ul>
  </div>
);

export default ConstructionEmbargo;
