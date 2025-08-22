import styles from "./boxesTickts.module.css";
import Title from "../../shared/Title";
import ButtonPretty from "../../shared/ButtonPretty";
import Contagem from "../../shared/Contagem";
import { hasCountdownEnded } from "../../../Utils/DateEnded";

const tickets = [
  {
    id: "complete",
    title: "INGRESSO COMPLETO CONECT 2026",
    subtitle: "3 dias de congresso ",
    benefits: [
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
      "Área Food diversificada com opções regionais e internacionais.",
      "Localização estratégica: a apenas 3 minutos do Shopping Iguatemi, com diversas opções de hospedagem próximas.",
      "Área dedicada a trabalhos científicos, fomentando a produção acadêmica e a inovação.",
      "Certificado digital disponível de forma prática e rápida após o evento.",
      "Espaço de experiências práticas, com demonstrações de métodos terapêuticos e educacionais inovadores.",
    ],
    options: [
      {
        link: "https://pay.hotmart.com/D101401576U?off=1zhb4drs",
        text: "PRÉ-VENDA INTEIRA",
        price: "12 x R$ 101,15",
        label: null,
        disabled: false,
      },
      {
        link: "https://pay.hotmart.com/D101401576U?off=rfa406il",
        text: "PRÉ-VENDA MEIA-ENTRADA",
        price: "12 x R$ 50,57",
        label: "",
        disabled: false,
      },
    ],
    // meiaEntradaLink: "#meia-entrada",
  },
  {
    id: "complete",
    title: "INGRESSO COMPLETO CONECT 2026",
    subtitle: "2 dias de congresso ",
    benefits: [
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
      "Área Food diversificada com opções regionais e internacionais.",
      "Localização estratégica: a apenas 3 minutos do Shopping Iguatemi, com diversas opções de hospedagem próximas.",
      "Área dedicada a trabalhos científicos, fomentando a produção acadêmica e a inovação.",
      "Certificado digital disponível de forma prática e rápida após o evento.",
      "Espaço de experiências práticas, com demonstrações de métodos terapêuticos e educacionais inovadores.",
    ],
    options: [
      {
        link: "https://pay.hotmart.com/D101401576U?off=1zhb4drs",
        text: "INTEIRA DOIS DIAS",
        price: "EM BREVE",
        label: null,
        disabled: true,
      },
      {
        link: "https://pay.hotmart.com/D101401576U?off=rfa406il",
        text: "MEIA DOIS DIAS",
        price: "EM BREVE",
        label: "",
        disabled: true,
      },
    ],
    // meiaEntradaLink: "#meia-entrada",
  },

  {
    id: "group",
    title: "GRUPO 20% DE DESCONTO",
    subtitle: "3 dias de congresso ",
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
        text: "INGRESSO PRÉ-VENDA",
        // price: "12 x R$ 101,15 cada",
        price: "EM BREVE",
        label: "",
        disabled: true,
      },
    ],
  },
];

export default function BoxesTickts() {
  const dateEvent = "2025-08-22";
  const isPreSaleStarted = hasCountdownEnded(dateEvent);

  return (
    <section id="tickts" className={styles.section}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.container}>
        <Title text="INGRESSO CONECT AUTISMO 2026" />

        <div className={styles.header}>
          <h3>PRÉ-VENDA LIMITADA</h3>
          <p>Termina em:</p>
          <Contagem dateEvent={"24/08/2025"} />
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
