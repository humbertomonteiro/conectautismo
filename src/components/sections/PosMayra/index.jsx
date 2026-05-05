import styles from "./speakersPos.module.css";
// import ButtonPretty from "../../shared/ButtonPretty";

// import { GiCheckMark } from "react-icons/gi";
import Title from "../../shared/Title";
import drThiagoCastroVideo from "../../../assets/videos/dr-thiago-castro.mp4";

const PosMayra = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Recado para você" />
        </div>

        <div className={styles.content}>
          <div className={styles.videoContainer} data-aos="zoom-in">
            <div className={styles.videoWrapper} id="tickets2">
              <video src={drThiagoCastroVideo} controls playsInline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosMayra;
