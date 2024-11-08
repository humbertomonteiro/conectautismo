import styles from "./patrocinadorEExpositor.module.css";

import Title from "../../shared/Title";
import ButtonBasic from "../../shared/ButtonBasic";
import ButtonPretty from "../../shared/ButtonPretty";

import { FaArrowDown } from "react-icons/fa";

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
          <div className={styles.buttons}>
            <ButtonBasic
              link="#patrocinador"
              text="Todos os patrocinadores"
              icon={<FaArrowDown />}
            />

            <ButtonPretty
              link="https://api.whatsapp.com/send/?phone=558592742323&text&type=phone_number&app_absent=0"
              text="ADQUIRA SEU ESPAÇO AQUI"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
