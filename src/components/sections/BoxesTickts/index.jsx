import styles from "./boxesTickts.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import Contagem from "../../shared/Contagem";
import { hasCountdownEnded } from "../../../Utils/DateEnded";
import useLink from "../../../contexts/LinkContexts";

export default function BoxesTickts() {
  const dateEvent = "2025-08-22";
  const isPreSaleStarted = hasCountdownEnded(dateEvent);
  const { ticketAll, ticketHalf, ticketGroup } = useLink();

  const tickets = [
    {
      id: "complete",
      title: "INGRESSO COMPLETO CONECT 2026",
      subtitle: "3 dias de congresso ",
      benefits: [
        "Inédito um dia inteiro de prática com Mayra Gaiato; quem sabe faz ao vivo",
        "Realizado no segundo maior centro de eventos do Brasil, com estrutura ampla, moderna, climatizada e 100% acessível.",
        "Palestrantes nacionais e internacionais de referência, trazendo conteúdos respaldados por pesquisas científicas de nível 1A e 1B.",
        "Certificado qualificado para valorização acadêmica e curricular.",
        "Kit congressista exclusivo com materiais especiais do evento.",
        "Conteúdo online gravado por 24 meses, garantindo acesso prolongado a todas as palestras.",
        "Credenciamento antecipado sem filas, com QR Code de acesso rápido.",
        "Sessões de autógrafos com grandes nomes da área.",
        "Ambiente imersivo e cenografia projetada, trazendo experiências sensoriais que tornam o evento inesquecível.",
        "Espaços instagramáveis e interativos, com cenários temáticos e fotógrafos profissionais captando seus melhores momentos.",
        "Expositores nacionais e internacionais apresentando novidades, tecnologias e soluções exclusivas.",
        "Espaço Zen para relaxamento e bem-estar.",
        "Localização estratégica: a apenas 3 minutos do Shopping Iguatemi, com diversas opções de hospedagem próximas.",
        "Área dedicada a trabalhos científicos, fomentando a produção acadêmica e a inovação.",
        "Certificado digital disponível de forma prática e rápida após o evento.",
        "Espaço de experiências práticas, com demonstrações de métodos terapêuticos e educacionais inovadores.",
      ],
      options: [
        ,
        {
          link: ticketHalf.link,
          text: "SEGUNDO LOTE MEIA-ENTRADA",
          price: ticketHalf.price,
          label: "",
          disabled: false,
        },
        {
          link: ticketAll.link,
          text: "SEGUNDO LOTE INTEIRA",
          price: ticketAll.price,
          label: null,
          disabled: false,
        },
      ],
      // meiaEntradaLink: "#meia-entrada",
    },
    // {
    //   id: "complete",
    //   title: "INGRESSO COMPLETO CONECT 2026",
    //   subtitle: "2 dias de congresso ",
    //   benefits: [
    //     "Inédito um dia inteiro de prática com Mayra Gaiato; quem sabe faz ao vivo",
    //     "Realizado no segundo maior centro de eventos do Brasil, com estrutura ampla, moderna, climatizada e 100% acessível.",
    //     "Palestrantes nacionais e internacionais de referência, trazendo conteúdos respaldados por pesquisas científicas de nível 1A e 1B.",
    //     "Certificado qualificado para valorização acadêmica e curricular.",
    //     "Kit congressista exclusivo com materiais especiais do evento.",
    //     "Conteúdo online gravado por 24 meses, garantindo acesso prolongado a todas as palestras.",
    //     "Credenciamento antecipado sem filas, com QR Code de acesso rápido.",
    //     "Sessões de autógrafos com grandes nomes da área.",
    //     "Ambiente imersivo e cenografia projetada, trazendo experiências sensoriais que tornam o evento inesquecível.",
    //     "Espaços instagramáveis e interativos, com cenários temáticos e fotógrafos profissionais captando seus melhores momentos.",
    //     "Expositores nacionais e internacionais apresentando novidades, tecnologias e soluções exclusivas.",
    //     "Espaço Zen para relaxamento e bem-estar.",
    //     "Localização estratégica: a apenas 3 minutos do Shopping Iguatemi, com diversas opções de hospedagem próximas.",
    //     "Área dedicada a trabalhos científicos, fomentando a produção acadêmica e a inovação.",
    //     "Certificado digital disponível de forma prática e rápida após o evento.",
    //     "Espaço de experiências práticas, com demonstrações de métodos terapêuticos e educacionais inovadores.",
    //   ],
    //   options: [
    //     {
    //       link: "https://pay.hotmart.com/D101401576U?off=rfa406il",
    //       text: "MEIA DOIS DIAS",
    //       // price: "12 x R$ 40,00",
    //       price: "EM BREVE",
    //       label: "",
    //       disabled: true,
    //     },
    //     {
    //       link: "https://pay.hotmart.com/D101401576U?off=1zhb4drs",
    //       text: "INTEIRA DOIS DIAS",
    //       // price: "12 x R$ 80.00",
    //       price: "EM BREVE",
    //       label: null,
    //       disabled: true,
    //     },
    //   ],
    //   // meiaEntradaLink: "#meia-entrada",
    // },
    {
      id: "group",
      title: "GRUPO 20% DE DESCONTO",
      subtitle: "3 dias de congresso ",
      description: "",
      benefits: [
        "Mínimo 4 ingressos",
        "⁠Desconto exclusivo de 20%.",
        "Ideal para clínicas, empresas, órgãos públicos e grupo de amigos em busca de grandes conhecimentos.",
        "Desconto por tempo limitado.",
      ],
      options: [
        {
          link: ticketGroup.link,
          // text: "INGRESSO PRÉ-VENDA",
          text: "SEGUNDO LOTE GRUPO",
          price: `${ticketGroup.price} cada`,
          // price: "EM BREVE",
          label: "",
          // disabled: true,
        },
      ],
    },
  ];

  return (
    <section id="tickts" className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <Title text="INGRESSO CONECT AUTISMO 2026" />

        <div className={styles.headerButton}>
          <ButtonPretty
            text="Garantir meu ingresso"
            link={ticketAll.link}
            target="_blank"
          />
        </div>
        <div className={styles.boxes}>
          {tickets.map((ticket) => (
            <div key={ticket.id} className={styles.box} data-aos="zoom-in">
              <h2>{ticket.title}</h2>
              {ticket.subtitle && <h3>{ticket.subtitle}</h3>}
              {ticket.description && <p>{ticket.description}</p>}{" "}
              <strong>Benefícios:</strong>
              <ul>
                {ticket.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              {isPreSaleStarted ? (
                <div className={styles.shop}>
                  {ticket.options.map((option, index) => (
                    <div key={index} className={styles.button}>
                      <strong>{option.price}</strong>
                      <ButtonPretty
                        link={option.link}
                        target="_blank"
                        text={option.text}
                        data-button={option.disabled ? "disabled" : undefined}
                        aria-disabled={option.disabled}
                      />

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
              ) : (
                <div className={styles.placeholder}>
                  <h3>Pré-venda ainda não começou!</h3>
                  <p>
                    Os ingressos estarão disponíveis a partir de 22 de agosto de
                    2025. Fique atento!
                  </p>
                  <Contagem dateEvent={"22/08/2025"} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
