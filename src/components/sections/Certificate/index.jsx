import styles from "./certificate.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Certificate() {
  return (
    <>
      <div className={styles.container}>
        <Title text="EMITA SEU CERTIFICADO CONGRESSISTA — CONECT AUTISMO 2026" />
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.boxes} data-aos="zoom-in">
          <div className={styles.boxInfo}>
            {/* <h3>EMITA AGORA SEU CERTIFICADO CONECT 2025</h3> */}
            <ul className={styles.highlight}>
              <li>
                <span>PARTICIPOU</span>
                <p>
                  Certificado exclusivo para quem participou do Conect Autismo
                  2026.
                </p>
              </li>
            </ul>
            <div className={styles.text}>
              Para validação, o CPF deverá constar na base oficial de inscritos
              do evento. Caso contrário, o certificado não terá validade.
            </div>
            <div className={styles.button}>
              <ButtonPretty
                link="https://certificado-conect.vercel.app"
                target="_blank"
                text="EMITA AGORA SEU CERTIFICADO"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
