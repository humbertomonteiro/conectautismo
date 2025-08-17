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
    <section className={styles.section}>
      <Title text="perguntas frequentes" color="black" />
      <div className={styles.backgroundOverlay}></div>
      <section className={styles.container}>
        <div className={styles.ballonWhatsapp} data-aos="zoom-in">
          <FaWhatsapp />
          <h3>Prefere falar conosco?</h3>
          <p>Fale com nosso time de suporte pelo Whatsapp</p>
          <ButtonPretty
            data-color="blue"
            text={"FALAR COM O TIME"}
            link={
              "https://api.whatsapp.com/send?phone=5585992742323&text=Ol%C3%A1%2C%20equipe%20ConectAutismo!%20Estou%20interessado(a)%20no%20evento%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es.%20%0A%0APoderiam%20me%20ajudar%20com%20detalhes%20sobre%20inscri%C3%A7%C3%B5es%2C%20programa%C3%A7%C3%A3o%2C%20palestrantes%20e%20outras%20informa%C3%A7%C3%B5es%20relevantes%3F%20Obrigado(a)!%0A%0A"
            }
          />
        </div>
        <ul className={styles.questions} data-aos="zoom-in">
          <li className={styles.question}>
            <button onClick={() => setQ1(!q1)}>
              Para quem é o Congresso Conect 2026?{" "}
              {q1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q1 && (
              <div className={styles.text}>
                <p>
                  O Congresso Conect 2026 é destinado a todos que desejam se
                  aprofundar no universo das pesquisas e estudos sobre o
                  neurodesenvolvimento. Um espaço de troca e aprendizado que
                  reúne pais atípicos, familiares, médicos, educadores,
                  psicólogos, terapeutas e profissionais da saúde, além de todos
                  que buscam enriquecer conhecimentos, ampliar perspectivas e
                  fortalecer sua atuação tanto no campo pessoal quanto
                  profissional.
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
              Benefícios do Congresso Conect 2026?{" "}
              {q3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q3 && (
              <div className={styles.text}>
                <ul>
                  <li>
                    O Congresso Conect 2026 reúne em um só lugar pesquisas
                    inéditas, especialistas de referência e conteúdos exclusivos
                    sobre neurodesenvolvimento. É a oportunidade de atualizar
                    seus conhecimentos, fortalecer sua atuação profissional,
                    trocar experiências valiosas e ampliar conexões com
                    famílias, instituições e profissionais de diversas áreas.
                  </li>
                  <li>
                    Tudo isso em um cenário de grandeza: o Centro de Eventos do
                    Ceará, o segundo maior centro de eventos do Brasil, que
                    oferece infraestrutura moderna, conforto e a experiência
                    ideal para receber um dos maiores encontros sobre
                    neurodesenvolvimento do país.
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className={styles.question}>
            <button onClick={() => setQ4(!q4)}>
              Como entrar em contato com a equipe, do Congresso Conect?{" "}
              {q4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {q4 && (
              <div className={styles.text}>
                <p>
                  Você pode entrar em contato com a equipe através do e-mail:{" "}
                  <a
                    href="mailto:comercial@congressoconect.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comercial@congressoconect.com.br
                  </a>
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
    </section>
  );
}
