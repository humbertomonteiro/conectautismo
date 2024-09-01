import Title from "../Title";
import styles from "./patrocinadorEExpositor.module.css";

import { FaArrowRight } from "react-icons/fa";

export default function PatrocinadorEExpositor() {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <Title text={"Patrocinador & Expositor"} />
        <div className={styles.content} data-aos="zoom-in">
          <p>
            Garantindo visibilidade e posicionamento. Ideal para quem quer se
            posicionar e mostrar sua marca. Focado em trazer sua relevância ao
            mercado.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=558592742323&text&type=phone_number&app_absent=0"
            target="_blank"
            className={styles.button}
          >
            ADQUIRA SEU ESPAÇO
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
