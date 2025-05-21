import styles from "./sponsor.module.css";

const Cleaning = () => (
  <div className={styles.content}>
    <h1 className={styles.sectionTitle}>Limpeza</h1>
    <p>
      A organização se responsabiliza pela limpeza geral do evento. Entretanto,
      os expositores e suas montadoras são responsáveis pela retirada dos
      materiais adicionais, bem como, retirada de qualquer tipo de lixo gerado
      durante a montagem e desmontagem do evento através de caçambas de lixo;
    </p>
    <p>
      Recomendamos a limpeza frequente do stand, principalmente em regiões de
      amplo contato (superfícies) e demais áreas de grande circulação;
    </p>
    <p>
      Durante a realização do evento a organização se responsabiliza apenas pela
      limpeza dos corredores entre os stands; a limpeza no interior dos stands é
      de responsabilidade do expositor;
    </p>
    <p>
      Recomendamos que a equipe de profissionais para manutenção diária dos
      espaços internos do stand.
    </p>
  </div>
);

export default Cleaning;
