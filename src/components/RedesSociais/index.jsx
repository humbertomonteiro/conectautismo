import styles from "./redesSociais.module.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function RedesSociais() {
  return (
    <div className={styles.container}>
      <div className={styles.boxes} data-aos="fade-down">
        <div className={styles.box}>
          <a href="https://www.instagram.com/conect.autismo/" target="_blank">
            <IoLogoInstagram />
          </a>
        </div>
        <div className={styles.box}>
          <a
            href="https://api.whatsapp.com/send?phone=5585992742323&text=Ol%C3%A1%2C%20equipe%20ConectAutismo!%20Estou%20interessado(a)%20no%20evento%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.%20%0A%0APoderiam%20me%20ajudar%20com%20detalhes%20sobre%20inscri%C3%A7%C3%B5es%2C%20programa%C3%A7%C3%A3o%2C%20palestrantes%20e%20outras%20informa%C3%A7%C3%B5es%20relevantes%3F%20Obrigado(a)!%0A%0A"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className={styles.box}>
          <a href="https://www.instagram.com/conect.autismo/" target="_blank">
            <MdOutlineEmail />
          </a>
        </div>
        <div className={styles.box}>
          <a
            href="https://www.facebook.com/conectautismobrasil"
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </div>
        <div className={styles.box}>
          <a href="https://x.com/ConectAutismo" target="_blank">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
