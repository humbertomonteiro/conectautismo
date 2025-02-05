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
          <h3 id="meia-entrada">Veja se você se encaixa na meia entrada:</h3>
          <ul>
            <li>
              ✔︎ Pessoas com Deficiência (PcD), incluindo autistas: Apresentar
              documento comprovativo da condição.
            </li>

            <li>
              ✔︎ Idosos (60 anos ou mais): Documento de identidade com foto.
            </li>

            <li>
              ✔︎ Estudantes (de qualquer curso): Carteira de Identificação
              Estudantil (CIE), Comprovante de Matrícula ou Mensalidade.
            </li>

            <li>
              ✔︎ Professores de redes públicas e privadas: Comprovante de
              vínculo com instituição de ensino.
            </li>

            <li>
              ✔︎ Pais de autistas: Documento que comprove a condição de
              responsável legal.
            </li>
          </ul>

          <span>
            🔖 Para obter o benefício da meia entrada, utilize o CUPOM:
            MEIAENTRADA (tudo em maiúsculo, sem espaços) no momento da compra.
            Este cupom não é acumulativo com outros descontos ou promoções.
          </span>

          <span>
            Lembre-se: os documentos comprobatórios devem ser apresentados na
            entrada do evento. A meia entrada é um direito que promove a
            inclusão e o acesso, e sua colaboração na apresentação dos
            documentos é necessário. Caso contrario. Teremos a opção de upgrade
            no dia do credenciamento.
          </span>
        </div>

        <div className={styles.button}>
          <ButtonPretty
            text={"garanta meia com festa"}
            link={
              "https://pay.hotmart.com/A96222789P?checkoutMode=6&off=dsj40qa5&offDiscount=MEIAENTRADA"
            }
            target="_blank"
          />
          <strong>R$ 574,00</strong>
        </div>

        <div className={styles.button}>
          <ButtonPretty
            text={"garanta meia sem festa"}
            link={
              "https://pay.hotmart.com/A96222789P?checkoutMode=6&off=t35c4yn3&offDiscount=MEIAENTRADA"
            }
            target="_blank"
          />
          <strong>R$ 499,00</strong>
        </div>
      </div>
    </section>
  );
}
