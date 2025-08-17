import styles from "./halfPrice.module.css";

import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import img from "../../../assets/imgs/meia-entrada/img.jpg";

export default function HalfiPrice() {
  return (
    <section>
      <Title text="Meia entrada" />

      <div className={styles.container} data-aos="zoom-in">
        <div className={styles.img}>
          <img
            loading="lazy"
            src={img}
            alt="Imagem de palestra do Conect Autismo"
          />
        </div>
        <div className={styles.content}>
          {/* <h3 id="meia-entrada">Veja se você se encaixa na meia entrada:</h3> */}
          <h3 id="meia-entrada">Meia entrada:</h3>
          <ul>
            <li>
              ✔︎ Pessoas com Deficiência (PcD), incluindo autistas: Apresentar
              documento comprovativo da condição CIPTEA ou LAUDO válido e
              documento com foto.
            </li>

            <li>
              ✔︎ Idosos (60 anos ou mais): Documento de identidade com foto.
            </li>

            <li>
              ✔︎ Estudantes (de qualquer curso): Carteira de Identificação
              Estudantil (CIE), Comprovante de Matrícula, Mensalidade ou
              declaração da instituição.
            </li>

            <li>
              ✔︎ Professores de redes públicas e privadas: Comprovante de
              vínculo com instituição de ensino.
            </li>

            <li>
              ✔︎ Pais de autistas: Documento que comprove a condição de
              responsável legal e CIPTEA ou LAUDO do filho.
            </li>
          </ul>

          {/* <span>
            🔖 Para obter o benefício da meia entrada, utilize o CUPOM:
            MEIAENTRADA (tudo em maiúsculo, sem espaços) no momento da compra.
            Este cupom não é acumulativo com outros descontos ou promoções.
          </span> */}

          <span>
            Lembre-se: os documentos comprobatórios devem ser apresentados na
            entrada do evento. A meia entrada é um direito que promove a
            inclusão e o acesso, e sua colaboração na apresentação dos
            documentos é necessário. Caso contrario, teremos a opção de upgrade
            no dia do credenciamento.
          </span>
        </div>

        <div className={styles.buttons}>
          <div className={styles.button}>
            <ButtonPretty
              // text={"LOTE EXTRA COM FESTA"}
              // link={
              //   "https://pay.hotmart.com/A96222789P?off=1kjo08ig&offDiscount=EXTRAMEIA"
              // }
              // link={
              //   "https://wa.me/558592742323?text=Olá! Quero entrar na lista de espera do evento Conect Autismo."
              // }
              // target="_blank"
              text="ESGOTADO"
              data-button="disabled"
            />
            <strong>R$ 748,80</strong>
          </div>
          <div className={styles.button}>
            <ButtonPretty
              text={"LOTE EXTRA SEM FESTA"}
              link={
                "https://pay.hotmart.com/A96222789P?off=cpagfpj6&offDiscount=EXTRAMEIA"
              }
              // link={
              //   "https://wa.me/558592742323?text=Olá! Quero entrar na lista de espera do evento Conect Autismo."
              // }
              target="_blank"
            />
            <strong>R$ 688,80</strong>
          </div>
        </div>

        {/* <div className={styles.button}>
          <ButtonPretty
            text={"entrar na lista de espera"}
            // link={
            //   "https://pay.hotmart.com/A96222789P?off=j7epqdn7&bid=1742216074507&offDiscount=MEIAENTRADA"
            // }
            link={
              "https://wa.me/558592742323?text=Olá! Quero entrar na lista de espera do evento Conect Autismo."
            }
            target="_blank"
          />
          <strong>R$ 524,00</strong>
        </div> */}
      </div>
    </section>
  );
}
