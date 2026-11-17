import styles from "./AuthorityStats.module.css";
import ButtonPretty from "../../shared/ButtonPretty";
import { FaWhatsapp } from "react-icons/fa";

export default function AuthorityStats({
  edition = "4ª",
  year = "2027",
  linkGroup = "https://chat.whatsapp.com/J4YPyyOhufFIdp4x3rZSeQ?s=cl&p=i&mlu=4&ilr=4&iam=2",
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Você sabe onde está comprando</span>

        <h2 className={styles.title}>
          3 edições construíram essa história.
          <br />
          <span className={styles.titleAccent}>A {edition} começa agora.</span>
        </h2>

        <div className={styles.whatsappGroup}>
          <p>
            Entre na nossa comunidade para receber bônus, benefícios e
            informações em primeira mão.
          </p>
          <ButtonPretty
            data-color="blue"
            text="Entrar para familia Conect"
            icon={<FaWhatsapp />}
            link={linkGroup}
            target="_blank"
          />
        </div>

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {edition.toUpperCase()} EDIÇÃO • {year}
        </div>
      </div>
    </section>
  );
}
