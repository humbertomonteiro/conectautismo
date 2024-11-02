import styles from "./commonQuestions.module.css";

import { useState } from "react";

import ButtonPretty from "../../shared/ButtonPretty";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Title from "../../shared/Title";

export default function CommunQuestions() {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);

  return (
    <>
      <Title text="perguntas frequentes" />
      <section className={styles.container} data-aos="zoom-in">
        <div className={styles.ballonWhatsapp}>
          <FaWhatsapp />
          <h3>Prefere falar conosco?</h3>
          <p>Fale com nosso time de suporte pelo Whatsapp</p>
          <ButtonPretty
            text={"Falar com o time"}
            link={
              "https://api.whatsapp.com/send?phone=5585992742323&text=Ol%C3%A1%2C%20equipe%20ConectAutismo!%20Estou%20interessado(a)%20no%20evento%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.%20%0A%0APoderiam%20me%20ajudar%20com%20detalhes%20sobre%20inscri%C3%A7%C3%B5es%2C%20programa%C3%A7%C3%A3o%2C%20palestrantes%20e%20outras%20informa%C3%A7%C3%B5es%20relevantes%3F%20Obrigado(a)!%0A%0A"
            }
          />
        </div>
        <ul className={styles.questions}>
          <li className={styles.question}>
            <button onClick={() => setQ1(!q1)}>
              Para quem é o CONECT AUTISMO 2025?{" "}
              {q1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q1 && (
              <div className={styles.text}>
                <p>
                  Para todos que sonham em mergulhar no mundo TEA. Para pais
                  atípicos, familiares, médicos, educadores, psicólogos,
                  terapeutas, profissionais da saúde e todos que desejam
                  enriquecer no âmbito profissional.
                </p>
              </div>
            )}
          </li>
          <li className={styles.question}>
            <button onClick={() => setQ2(!q2)}>
              Como faço para adquirir meia-entrada?{" "}
              {q2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q2 && (
              <div className={styles.text}>
                <p>
                  Para obter meia-entrada, é necessário apresentar a Carteira de
                  Identificação Estudantil (CIE) ou documento equivalente.
                  Também são elegíveis pessoas com deficiência e seus
                  acompanhantes, famílias atípicas, idosos, jovens de baixa
                  renda e educadores, mediante documentação comprobatória
                </p>
              </div>
            )}
          </li>
          <li className={styles.question}>
            <button onClick={() => setQ3(!q3)}>
              Quais são os benefícios de participar do Congresso?{" "}
              {q3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q3 && (
              <div className={styles.text}>
                <ul>
                  <li>Acesso a palestrantes renomados e inusitados.</li>
                  <li>Certificado de 30 horas.</li>
                  <li>Acesso ao conteúdo gravado por 24 meses.</li>
                  <li>
                    Networking com uma comunidade global de profissionais da
                    saúde.
                  </li>
                  <li>Expositores com as últimas inovações em saúde.</li>
                  <li>
                    Impacto social com parte dos rendimentos apoiando
                    iniciativas sociais.
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles.question}>
            <button onClick={() => setQ4(!q4)}>
              Como entrar em contato com a equipe do Congresso Conect Austismo?{" "}
              {q4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q4 && (
              <div className={styles.text}>
                <p>
                  Você pode entrar em contato com a equipe através do e-mail
                  disponibilizado na página de vendas conectautismobr@gmail.com
                  ou via Instagram @conect.austismo
                </p>
              </div>
            )}
          </li>
          <li className={styles.question}>
            <button onClick={() => setQ5(!q5)}>
              Como funciona a política de cancelamento e reembolso?{" "}
              {q5 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q5 && (
              <div className={styles.text}>
                <p>
                  Respeitamos o Código de Defesa do Consumidor, permitindo
                  cancelamentos e reembolsos em até 7 dias após a compra. Após
                  este período, não oferecemos cancelamentos, transferencias de
                  titularidade ou reembolsos devido aos compromissos já
                  estabelecidos.
                </p>
              </div>
            )}
          </li>
          <li className={styles.question}>
            <button onClick={() => setQ6(!q6)}>
              Há descontos para compras em grupo?{" "}
              {q6 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q6 && (
              <div className={styles.text}>
                <p>
                  Sim, oferecemos um desconto de 20% para compras de 5 ou mais
                  ingressos para o congresso presencial.
                </p>
              </div>
            )}
          </li>
          <li className={styles.question}>
            <button onClick={() => setQ7(!q7)}>
              Como será o acesso ao conteúdo online?{" "}
              {q7 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q7 && (
              <div className={styles.text}>
                <p>
                  O conteúdo será gravado e editado e disponibilizado na
                  plataforma Hotmart para que o aluno possa usufruir a vontade
                  durante 24 meses. Permitindo que você assista quando e onde
                  desejar.
                </p>
              </div>
            )}
          </li>
        </ul>
      </section>
    </>
  );
}
