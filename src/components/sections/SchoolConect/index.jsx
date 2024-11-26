import styles from "./schoolConect.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import school from "../../../assets/imgs/school-conect/img-event-logo.jpg";

const SchoolConect = () => {
  return (
    <section className={styles.container}>
      <Title text={"Conect autismo nas escolas"} />
      <div className={styles.content} data-aos="zoom-in">
        <div className={styles.text}>
          <h3>Conectando escolas, construindo uma sociedade mais inclusiva</h3>
          <p>
            Bem-vindos ao projeto <mark>"Conect autismo nas escolas"!</mark>
            Nossa missão é levar conhecimento e conscientização sobre o autismo
            às escolas, promovendo inclusão, aceitação e suporte aos
            profissionais de educação. Juntos, construamos uma sociedade mais
            inclusiva!"
          </p>
          <ButtonPretty
            data-color="blue"
            link={
              "https://docs.google.com/forms/d/1CfY0_4leSB9P57ktF3zxmWL6duDfAsltz5e_LbN4MQY/edit"
            }
            text={"Quero na minha escola"}
          />
        </div>
        <div className={styles.img}>
          <img
            src={school}
            alt="Imagem da logo Conect autismo no evento 2024."
          />
        </div>
      </div>
    </section>
  );
};

export default SchoolConect;
