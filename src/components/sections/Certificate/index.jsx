import styles from "./certificate.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Certificate() {
  return (
    <div className={styles.container}>
      <Title text="EMITA SEU CERTIFICADO " />
      <div className={styles.backgroundOverlay}></div>

      <div className={styles.boxes} data-aos="zoom-in">
        <div className={styles.boxInfo}>
          {/* <h3>EMITA AGORA SEU CERTIFICADO CONECT 2025</h3> */}
          <p className={styles.subtitle}>Te vejo no Conect Autismo 2026!</p>

          <ul className={styles.highlight}>
            <li>
              <span>PARTICIPOU</span>
              <p>Do Conect Autismo 2025</p>
            </li>
            <li>
              <span>GARANTA</span>
              <p>Seu certificado de participação</p>
            </li>
            <li>
              <span>VALIDADE</span>
              <p>Certificado com validade nacional</p>
            </li>
            <li>
              <span>PRÓXIMO EVENTO</span>
              <p>Te vejo no Conect Autismo 2026!</p>
            </li>
          </ul>

          <div className={styles.text}>
            Todos os participantes do Conect Autismo 2025 têm direito a receber
            seu certificado de participação. Emita agora mesmo o seu documento e
            garanta o comprovante desta experiência enriquecedora.
          </div>

          <div className={styles.button}>
            <ButtonPretty
              link="https://drive.google.com/drive/folders/1RruTsWw5F0avnQWB8drVqbUNPaUWLxEq?usp=sharing"
              target="_blank"
              text="Emitir Certificado"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
