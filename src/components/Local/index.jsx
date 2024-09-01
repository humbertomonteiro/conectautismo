import styles from "./local.module.css";

import logo from "../../assets/imgs/logo/logoHorizontal.png";

import { FaArrowRight } from "react-icons/fa";
import Title from "../Title";

export default function Local() {
  return (
    <div className={styles.container}>
      <Title text={"LOCAL"} />
      <div className={styles.boxes} data-aos="zoom-in">
        <div className={styles.box}>
          <div className={styles.img}>
            <img src={logo} alt="logo" />
          </div>
          <a
            href="https://www.instagram.com/conect.autismo/"
            target="_blank"
            className={styles.button}
          >
            ConectAutismo
            <FaArrowRight />
          </a>
        </div>

        <div className={styles.box}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7962.645344873391!2d-38.453857000000006!3d-3.7396969999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7464d784ca471%3A0x2401a6bfcd1dc08d!2sGran%20Mareiro%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1720821138262!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.text}>
            <p>Para o Congresso Conect Autismo:</p>
            <p>Data: 24 e 25 de Agosto de 2024</p>
            <p>Local: Gran Mareiro Hotel, Fortaleza, Ceará</p>
            <p>Horário: Das 07:00 às 18:00</p>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7962.707493618353!2d-38.456573!3d-3.7328489999999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7479bd21e6f1d%3A0xc36dd965f8cfa4ca!2sOrla%20Praia%20Club%3A%20Gastronomia%2C%20Drinks%2C%20Happy%20Hour%2C%20Barraca%20de%20Praia%20em%20Fortaleza!5e0!3m2!1spt-BR!2sbr!4v1720821271519!5m2!1spt-BR!2sbr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.text}>
            <p>Para a Festa Pré Conect Autismo:</p>
            <p>Data: 23 de Agosto de 2024</p>
            <p>Local: ORLA PRAIA CLUB, Fortaleza CE</p>
            <p>Horário: Das 18:00 às 01:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
