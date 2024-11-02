import styles from "./commonQuestions.module.css";

import ButtonPretty from "../../shared/ButtonPretty";

export default function CommunQuestions() {
  return (
    <section>
      <div className={styles.ballonWhatsapp}>
        <h3>Prefere falar conosco?</h3>
        <p>
          Fale com nosso time de suporte pelo Whatsapp
          <ButtonPretty
            text={"Falar com o time"}
            link={
              "https://api.whatsapp.com/send?phone=5585992742323&text=Ol%C3%A1%2C%20equipe%20ConectAutismo!%20Estou%20interessado(a)%20no%20evento%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.%20%0A%0APoderiam%20me%20ajudar%20com%20detalhes%20sobre%20inscri%C3%A7%C3%B5es%2C%20programa%C3%A7%C3%A3o%2C%20palestrantes%20e%20outras%20informa%C3%A7%C3%B5es%20relevantes%3F%20Obrigado(a)!%0A%0A"
            }
          />
        </p>
      </div>

      <div className={styles.questions}>
        <h3>Perguntas Frequentes</h3>
      </div>
    </section>
  );
}
