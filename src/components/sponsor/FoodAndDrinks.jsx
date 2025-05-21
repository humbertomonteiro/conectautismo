import styles from "./sponsor.module.css";

const FoodAndDrinks = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Alimentos e Bebidas</h1>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        Os expositores poderão oferecer alimentos e bebidas aos participantes
        desde que sejam seguidas as recomendações sanitárias: disponibilização
        de álcool gel nas bancadas de buffet e constante higienização das
        estruturas.
      </li>
      <li className={styles.listItem}>
        O expositor poderá optar pelo buffet de sua preferência.
      </li>
      <li className={styles.listItem}>
        Lembrando que todos os fornecedores devem estar em dia com sua
        documentação , principalmente o alvará sanitário.
      </li>
      <li className={styles.listItem}>
        Ressaltamos ainda que não será será permitido o descarte de sobras de
        alimentos e bebidas nas lixeiras gerais das áreas sociais da feira.
      </li>
      <li>
        O descarte deverá ser feito nos locais e reservatórios indicados.
        Lembre-se que há regras de descarte nas lixeiras sustentáveis.
      </li>
      <li>
        A utilização dos sanitários não está liberada para consumo ou descarte
        de itens de alimentos.
      </li>
      <li>
        É PROIBIDO servir bebidas alcoólicas durante todo o período do evento.
        Passível do stand ser interditado em caso de descumprimento dessa regra.
      </li>
    </ul>
  </div>
);

export default FoodAndDrinks;
