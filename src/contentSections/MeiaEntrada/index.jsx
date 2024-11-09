import ButtonPretty from "../../components/shared/ButtonPretty";

export default function MeiaEntrada() {
  return (
    <>
      <p id="meia-entrada">Veja se você se encaixa na meia entrada:</p>
      <ul>
        <li>
          ✔︎Pessoas com Deficiência (PcD), incluindo autistas: Apresentar
          documento comprovativo da condição.
        </li>

        <li>✔︎ dosos (60 anos ou mais): Documento de identidade com foto.</li>

        <li>
          ✔︎ Estudantes (de qualquer curso): Carteira de Identificação
          Estudantil (CIE), Comprovante de Matrícula ou Mensalidade.
        </li>

        <li>
          ✔︎ Professores de redes públicas e privadas: Comprovante de vínculo
          com instituição de ensino.
        </li>

        <li>
          ✔︎ Pais de autistas: Documento que comprove a condição de responsável
          legal.
        </li>
      </ul>

      <span>
        🔖 Para obter o benefício da meia entrada, utilize o CUPOM: MEIAENTRADA
        (tudo em maiúsculo, sem espaços) no momento da compra. Este cupom não é
        acumulativo com outros descontos ou promoções.
      </span>

      <span>
        Lembre-se: os documentos comprobatórios devem ser apresentados na
        entrada do evento. A meia entrada é um direito que promove a inclusão e
        o acesso, e sua colaboração na apresentação dos documentos é necessário.
        Caso contrario. Teremos a opção de upgrade no dia do credenciamento.
      </span>

      <ButtonPretty
        text={"garanta agora"}
        link={
          "https://pay.hotmart.com/A96222789P?off=2bsyn86r&bid=1730990288806"
        }
        target="_blank"
      />
      {/* <p>
        Lembre-se: os documentos comprobatórios devem ser apresentados na
        entrada do evento. A meia entrada é um direito que promove a inclusão e
        o acesso, e sua colaboração na apresentação dos documentos é essencial.
      </p> */}
    </>
  );
}
