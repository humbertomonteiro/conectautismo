import styles from "./boxesTickts.module.css";

import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import { IoRocketOutline } from "react-icons/io5";
import { MdDoneOutline } from "react-icons/md";

export default function BoxesTickts() {
  return (
    <section id="tickts" className={styles.container}>
      <Title text={"INGRESSO CONECT AUTISMO 2025"} />
      <ul>
        <li>
          Pré-venda - Esgotada <MdDoneOutline />
        </li>
        <li>
          Primeiro lote - Esgotado <MdDoneOutline />
        </li>
        <li>
          Segundo lote - Voando <IoRocketOutline />
        </li>
      </ul>
      <ButtonPretty
        link={"https://pay.hotmart.com/A96222789P?off=dsj40qa5"}
        target="_blank"
        text={"garantir agora"}
      />
      <div className={styles.boxes}>
        <div className={styles.box} data-aos="zoom-in">
          <h2>INGRESSO COMPLETO CONECT 2025 - (2º Lote)</h2>
          <h3>2 dias de congresso + PRÉ-Festa.</h3>

          <ul>
            <li>Congresso presencial 23 e 24 de Agosto de 2025:</li>
            <li>⁠Um Grande palco.</li>
            <li>Delicioso coffee break.</li>
            <li>Credenciamento antecipado dois dias antes do evento</li>
            <li>
              Expositores com o que há de mais inovador no mercado (ou com
              novidades exclusivas)
            </li>
            <li>kit congressista exclusivo</li>
            <li>
              Palestranstes com conteúdos respaldados por pesquisas e estudos
              científicos classificados como nível 1A ou 1B.
            </li>
            <li>Conteúdo gravado disponível por 24 messes.</li>
            <li>
              Enriqueça seu portfólio profissional com um certificado
              reconhecido, comprovando as horas cursadas.
            </li>
            <li>
              Espaços instagramaveis para fotos, com fotógrafos profissionais
              para registrar os melhores momentos.
            </li>
            <li>
              ⁠Sessão de autografos com grandes palestrantes. Nacionais e
              internacionais.
            </li>
          </ul>
          <div className={styles.shop}>
            <ButtonPretty
              link={"https://pay.hotmart.com/A96222789P?off=dsj40qa5"}
              target="_blank"
              text={"Garantir Com festa"}
            />

            <strong>R$ 1148,00</strong>
            <ButtonPretty
              link={"https://pay.hotmart.com/A96222789P?off=t35c4yn3"}
              target="_blank"
              text={"Garantir Sem festa"}
            />
            <strong>R$ 998,00</strong>
            <a className={styles.link} href="#meia-entrada">
              Conferir condições de meia-entrada
            </a>
          </div>
        </div>

        <div className={styles.box} data-aos="zoom-in">
          <h2>
            Festa Pré Conect Autismo <br />
            22/08/2025 em Fortaleza.
          </h2>
          <p>
            Devido ao grande sucesso e desejo de todos, a pedidos teremos
            novamente nossa querida festa. Momento de muita conexão e interação
            entre palestrantes e congressistas.
          </p>
          <ul>
            <li>Open Bar Premium.</li>
            <li>Finguer Foods Buffet.</li>
            <li>Local Aconchegante.</li>
            <li>Bate-Papo.</li>
            <li>Show AO VIVO.</li>
            <li>Banda & DJ.</li>
            <li>Local acessível.</li>
            <li>Som e Iluminação acolhedora.</li>
            <li>Garanta a festa para seus acompanhantes.</li>
          </ul>
          <div className={styles.shop}>
            <ButtonPretty
              link={"https://pay.hotmart.com/A96222789P?off=aqn2jvpg"}
              target="_blank"
              text={"quero muito ir"}
            />
            <strong>R$ 225,00</strong>
            <span>LOTE PRE VENDA JÁ COM VALOR DE MEIA ENTRADA.</span>
          </div>
        </div>

        <div className={styles.box} data-aos="zoom-in">
          <h2>GRUPO 20% DE DESCONTO</h2>
          <p></p>
          <ul>
            <li>Mínimo 5 ingressos.</li>
            <li>Máximo de 10 por compra.</li>
            <li>⁠Desconto exclusivo de 20%.</li>
            <li>
              Ideal para clínicas, empresas e grupo de amigos em busca de
              grandes conhecimentos.
            </li>
            <li>Desconto por tempo limitado.</li>
          </ul>
          <div className={styles.shop}>
            <ButtonPretty
              link={
                "https://pay.hotmart.com/A96222789P?off=fwurs0rj&bid=1732896360049"
              }
              target="_blank"
              text="Grupo com festa"
            />
            <strong>
              R$ 878,40 <span>cada</span>
            </strong>
            <ButtonPretty
              link={"https://pay.hotmart.com/A96222789P?off=gndkzfaq"}
              target="_blank"
              text="Grupo sem festa"
            />
            <strong>
              R$ 750,40 <span>cada</span>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
