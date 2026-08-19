import styles from "./PresentationVideo.module.css";
// import ButtonPretty from "../../shared/ButtonPretty";

// import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";
import drThiagoCastroVideo from "../../../assets/videos/dr-thiago-castro.mp4";
import ButtonPretty from "../../shared/ButtonPretty";

export default function PresentationVideo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title
            text="ANTES DE CONHECER 2027,
LEMBRE POR QUE O CONECT É INESQUECÍVEL."
          />
        </div>

        <div className={styles.content}>
          <div className={styles.videoContainer} data-aos="zoom-in">
            <div className={styles.videoWrapper} id="tickets2">
              <video src={drThiagoCastroVideo} controls playsInline />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <ButtonPretty text=" EU QUERO ESTAR LÁ" link="#tickets" />
        </div>
      </div>
    </section>
  );
}
