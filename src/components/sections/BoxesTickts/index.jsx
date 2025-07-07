import styles from "./boxesTickts.module.css";

import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

import TimeLineLotes from "../TimeLineLotes";

export default function BoxesTickts() {
  return (
    <section id="tickts" className={styles.container}>
      <Title text={"INGRESSO CONECT AUTISMO 2025"} />
      {/* <TimeLineLotes /> */}
      {/* <ButtonPretty
        // link={
        //   "https://pay.hotmart.com/A96222789P?off=cui8duv5&bid=1742215373582"
        // }
        // link={
        //   "https://wa.me/558592742323?text=Olá! Quero entrar na lista de espera do evento Conect Autismo."
        // }
        link="https://pay.hotmart.com/A96222789P?off=1kjo08ig"
        target="_blank"
        text={"LOTE EXTRA"}
      /> */}
      <div className={styles.boxes}>
        <div className={styles.box} data-aos="zoom-in">
          <h2>INGRESSO COMPLETO CONECT 2025 - (Ingressos esgotados)</h2>
          <h3>2 dias de congresso + PRÉ-Festa.</h3>

          <strong>BENEFÍCIOS CONECT AUTISMO:</strong>
          <ul>
            <li>Palestrantes Renomados Nacionais e internacionais.</li>
            <li>Certificado qualificado.</li>
            <li>Um Grande Palco.</li>
            <li>Delicioso coffee break.</li>
            <li>Degustação CAFÉ SANTA CLARA.</li>
            <li>Kit congressista exclusivo.</li>
            <li>Evento com Cenografia Projetada.</li>
            <li>Ambiente Acolhedor e Climatizado.</li>
            <li>
              Espaços instagramaveis para fotos, com fotógrafos profissionais
              registrando os melhores momentos.
            </li>
            <li>Expositores nacionais e internacionais.</li>
            <li>
              Palestranstes com conteúdos respaldados por pesquisas e estudos
              científicos classificados como nível 1A ou 1B.
            </li>
            <li>Conteúdo Online Gravado 24 meses.</li>
            <li>Sessão de autógrafo com grandes nomes.</li>
            <li>Sala de Descompressão (Espaço sensorial)</li>
            <li>Todos os espaços com acessibilidade.</li>
          </ul>

          <div className={styles.shop}>
            <div className={styles.button}>
              <ButtonPretty
                // link={
                //   "https://wa.me/558592742323?text=Olá! Quero entrar na lista de espera do evento Conect Autismo."
                // }
                link="https://pay.hotmart.com/A96222789P?off=1kjo08ig"
                target="_blank"
                text={"Lote Extra com festa"}
              />
              <strong>R$ 1248,00</strong>
              <span>Com festa</span>
            </div>
            <div className={styles.button}>
              <ButtonPretty
                // link={
                //   "https://wa.me/558592742323?text=Olá! Quero entrar na lista de espera do evento Conect Autismo."
                // }
                link="https://pay.hotmart.com/A96222789P?off=cpagfpj6"
                target="_blank"
                text={"Lote extra sem festa"}
              />
              <strong>R$ 1148,00</strong>
              <span>Sem festa</span>
            </div>
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
            <div className={styles.button}>
              <ButtonPretty
                link={"https://pay.hotmart.com/A96222789P?off=aqn2jvpg"}
                target="_blank"
                text={"quero muito ir"}
              />
              <strong>R$ 225,00</strong>
              {/* <span>LOTE PRE VENDA JÁ COM VALOR DE MEIA ENTRADA.</span> */}
              <span>MEIA ENTRADA.</span>
            </div>
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
            <div className={styles.button}>
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
            </div>
            <div className={styles.button}>
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
      </div>
    </section>
  );
}
