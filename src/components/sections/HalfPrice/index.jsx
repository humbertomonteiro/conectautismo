import styles from "./halfPrice.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import img from "../../../assets/imgs/meia-entrada/img.jpg";

const ticketOptions = [
  {
    id: "with-party",
    text: "ESGOTADO",
    link: null,
    price: "R$ 748,80",
    disabled: true,
  },
  {
    id: "without-party",
    text: "LOTE EXTRA SEM FESTA",
    link: "https://pay.hotmart.com/A96222789P?off=cpagfpj6&offDiscount=EXTRAMEIA",
    price: "R$ 688,80",
    disabled: false,
  },
];

export default function HalfiPrice() {
  return (
    <section id="meia-entrada" className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <Title text="Meia Entrada" color="black" />
        <div className={styles.contentWrapper} data-aos="zoom-in">
          {/* <div className={styles.imageSection}>
            <img
              loading="lazy"
              src={img}
              alt="Imagem de palestra do Conect Autismo"
              className={styles.eventImage}
            />
          </div> */}
          <div className={styles.contentSection}>
            <h3 className={styles.header}>Quem tem direito à meia entrada:</h3>
            <ul className={styles.benefitsList}>
              <li>
                Pessoas com Deficiência (PcD), incluindo autistas: Apresentar
                documento comprovativo da condição CIPTEA ou LAUDO válido e
                documento com foto.
              </li>
              <li>
                Idosos (60 anos ou mais): Documento de identidade com foto.
              </li>
              <li>
                Estudantes (de qualquer curso): Carteira de Identificação
                Estudantil (CIE), Comprovante de Matrícula, Mensalidade ou
                declaração da instituição.
              </li>
              <li>
                Professores de redes públicas e privadas: Comprovante de vínculo
                com instituição de ensino.
              </li>
              <li>
                Pais de autistas: Documento que comprove a condição de
                responsável legal e CIPTEA ou LAUDO do filho.
              </li>
            </ul>
            <p className={styles.note}>
              Lembre-se: os documentos comprobatórios devem ser apresentados na
              entrada do evento. A meia entrada é um direito que promove a
              inclusão e o acesso, e sua colaboração na apresentação dos
              documentos é necessária. Caso contrário, teremos a opção de
              upgrade no dia do credenciamento.
            </p>
            <div className={styles.ctaButtons}>
              {ticketOptions.map((option) => (
                <div key={option.id} className={styles.button}>
                  <ButtonPretty
                    text={option.text}
                    link={option.link}
                    target="_blank"
                    data-button={option.disabled ? "disabled" : undefined}
                    aria-disabled={option.disabled}
                    // data-color="blue"
                  />
                  <strong>{option.price}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
