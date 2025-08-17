import styles from "./boxesTickts.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";

const tickets = [
  {
    id: "complete",
    title: "INGRESSO COMPLETO CONECT 2025",
    subtitle: "3 dias de congresso + PRÉ-Festa (Ingressos esgotados)",
    benefits: [
      "Palestrantes Renomados Nacionais e internacionais",
      "Certificado qualificado",
      "Um Grande Palco",
      "Delicioso coffee break",
      "Degustação CAFÉ SANTA CLARA",
      "Kit congressista exclusivo",
      "Evento com Cenografia Projetada",
      "Ambiente Acolhedor e Climatizado",
      "Espaços instagramaveis para fotos, com fotógrafos profissionais registrando os melhores momentos",
      "Expositores nacionais e internacionais",
      "Palestrantes com conteúdos respaldados por pesquisas e estudos científicos classificados como nível 1A ou 1B",
      "Conteúdo Online Gravado 24 meses",
      "Sessão de autógrafo com grandes nomes",
      "Sala de Descompressão (Espaço sensorial)",
      "Todos os espaços com acessibilidade",
    ],
    options: [
      {
        link: "https://pay.hotmart.com/D101401576U?off=1zhb4drs",
        text: "PRÉ-VENDA",
        price: "R$ 978,00",
        label: null,
        disabled: false,
      },
      // {
      //   link: "https://pay.hotmart.com/D101401576U?off=1zhb4drs",
      //   text: "PRÉ-VENDA",
      //   price: "R$ 1148,00",
      //   label: "Sem festa",
      //   disabled: false,
      // },
    ],
    meiaEntradaLink: "#meia-entrada",
  },
  {
    id: "party",
    title: "Festa Pré Conect Autismo",
    subtitle: "22/08/2025 em Fortaleza",
    description:
      "Devido ao grande sucesso e desejo de todos, a pedidos teremos novamente nossa querida festa. Momento de muita conexão e interação entre palestrantes e congressistas.",
    benefits: [
      "Open Bar Premium",
      "Finguer Foods Buffet",
      "Local Aconchegante",
      "Bate-Papo",
      "Show AO VIVO",
      "Banda & DJ",
      "Local acessível",
      "Som e Iluminação acolhedora",
      "Garanta a festa para seus acompanhantes",
    ],
    options: [
      {
        link: null,
        text: "PRÉ-VENDA",
        price: "R$ 225,00",
        label: null,
        disabled: false,
      },
    ],
  },
  {
    id: "group",
    title: "GRUPO 20% DE DESCONTO",
    subtitle: "",
    description: "",
    benefits: [
      "Mínimo 5 ingressos",
      "⁠Desconto exclusivo de 20%.",
      "Ideal para clínicas, empresas, órgãos públicos e grupo de amigos em busca de grandes conhecimentos.",
      "Desconto por tempo limitado.",
    ],
    options: [
      {
        link: "https://pay.hotmart.com/D101401576U?off=1zhb4drs?coupon=GRUPO",
        text: "PRÉ-VENDA",
        price: "R$ 782,40 cada",
        label: "",
        disabled: false,
      },
      // {
      //   link: null,
      //   text: "ESGOTADO",
      //   price: "R$ 750,40 cada",
      //   label: "",
      //   disabled: true,
      // },
    ],
  },
];

export default function BoxesTickts() {
  return (
    <section id="tickts" className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <Title text="INGRESSO CONECT AUTISMO 2025" />
        {/* <ButtonPretty
          link="https://pay.hotmart.com/A96222789P?off=cpagfpj6"
          target="_blank"
          text="GARANTIR AGORA"
          className={styles.mainCta}
        /> */}
        <div className={styles.boxes}>
          {tickets.map((ticket) => (
            <div key={ticket.id} className={styles.box} data-aos="zoom-in">
              <h2>{ticket.title}</h2>
              {ticket.subtitle && <h3>{ticket.subtitle}</h3>}
              {ticket.description && <p>{ticket.description}</p>}
              <strong>Benefícios:</strong>
              <ul>
                {ticket.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <div className={styles.shop}>
                {ticket.options.map((option, index) => (
                  <div key={index} className={styles.button}>
                    <ButtonPretty
                      link={option.link}
                      target="_blank"
                      text={option.text}
                      data-button={option.disabled ? "disabled" : undefined}
                      aria-disabled={option.disabled}
                    />
                    <strong>{option.price}</strong>
                    {option.label && <span>{option.label}</span>}
                  </div>
                ))}
                {ticket.meiaEntradaLink && (
                  <a
                    className={styles.link}
                    href={ticket.meiaEntradaLink}
                    aria-label="Conferir condições de meia-entrada"
                  >
                    Conferir condições de meia-entrada
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
