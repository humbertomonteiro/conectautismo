import styles from "./speakersPos.module.css";
// import ButtonPretty from "../../shared/ButtonPretty";

// import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";

const PosMayra = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Mayra Gaiato" />
        </div>

        <div className={styles.content}>
          <div className={styles.videoContainer} data-aos="zoom-in">
            <div className={styles.videoWrapper} id="tickets2">
              <iframe
                src="https://www.youtube.com/embed/oJoGFDOJjHc?si=AxUmmENJ7haBQZQz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h3></h3>
            <p>
              Um dia inteiro de Prática com Mayra Gaiato confirmado Conect 2026!
            </p>
          </div>

          {/* <div className={styles.infoColumn}>
            <div className={styles.speakerCard} data-aos="zoom-in">
    

                <div className={styles.tabContent}>
                  <h3>“Quem sabe faz ao vivo”</h3>
                  <p>
                    Um dia inteiro de prática com Mayra Gaiato no congresso
                    conect 2026
                  </p>
                  <p className={styles.highlight}>
                    Garanta agora sua Pós + Congresso Conect
                  </p>

                  <ul className={styles.benefitsList}>
                    <li>
                      <GiCheckMark /> Pós em ABA e Estratégias Naturalistas
                    </li>
                    <li>
                      <GiCheckMark /> Certificação reconhecida
                    </li>
                    <li>
                      <GiCheckMark /> 1 dia de acesso ao Conect 2026
                    </li>
                  </ul>

                  <div className={styles.buttons}>
                    <div>
                      <ButtonPretty
                        text="Pós Mayra Gaiato"
                        link="https://institutosingular.org/pos-turma4-conect/"
                        data-color="blue"
                        target="_blank"
                      />
                    </div>
                    <div>
                      <ButtonPretty text="Garantir Conect" link="/#tickets2" />
                    </div>
                  </div>
                </div>

            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PosMayra;
