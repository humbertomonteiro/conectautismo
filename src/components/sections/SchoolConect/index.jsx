import styles from "./schoolConect.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

const SchoolConect = () => {
  return (
    <section className={styles.container}>
      <Title text={"Conect autismo nas escolas"} />
      <div className={styles.content} data-aos="zoom-in">
        <div className={styles.text}>
          <h3>Conectando escolas, construindo uma sociedade mais inclusiva</h3>
          <p>
            Bem-vindos ao projeto <mark>"Conect autismo nas escolas"!</mark>{" "}
            <br />
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
            text={"QUERO NA MINHA ESCOLA"}
          />
        </div>
        <div className={styles.img}>
          <img
            // src={school}
            src="https://img.freepik.com/fotos-gratis/colegas-de-escola-abracados_23-2148763994.jpg?ga=GA1.1.2095538369.1681160396&semt=ais_hybrid&w=740"
            alt="Imagem da logo Conect autismo no evento 2024."
          />
        </div>
      </div>
    </section>
  );
};

export default SchoolConect;
