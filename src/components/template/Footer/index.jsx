import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>© ConectAutismo. Todos os direitos reservados.</p>
      </div>
      <div className={styles.box}>
        <p>CONECTAUTISMO LTDA</p>
      </div>
      <div className={styles.box}>
        <p>CNPJ: 53.145.083/0001-73</p>
      </div>
      <div className={styles.box}>
        <p className={styles.create}>
          Criado por <a href="">Hum Dev</a> com ❤️
        </p>
      </div>
    </div>
  );
}
