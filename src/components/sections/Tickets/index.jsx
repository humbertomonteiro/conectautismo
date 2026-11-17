import { useState } from "react";
import styles from "./Tickets.module.css";
import ButtonPretty from "../../shared/ButtonPretty";

import Title from "../../shared/Title";
import useLink from "../../../contexts/LinkContexts";
import CarouselScrollInfinitPromo from "../../shared/CarouselScrollInfinitPromo";

// Cada ticket pode ter mais de uma "variante" (ex: sem festa / com festa).
// Os preços, links, parcelas, "De:" e selo vêm prontos de links.tickets
// (ver LinkContexts.jsx). Aqui ficam só textos e estrutura dos cards.
const TICKETS = [
  {
    id: "meia",
    name: "Meia-Entrada",
    tagline: "Ideal para estudantes",
    benefits: [
      "Acesso completo aos 2 dias de evento",
      "Certificado de participação",
      "Material de apoio digital",
      "Acesso à gravação por 30 dias",
      "Kit de boas-vindas",
      "É obrigatória a apresentação do documento de meia-entrada.",
    ],
    variants: [
      { key: "withParty", label: "Com Festa" },
      { key: "withoutParty", label: "Sem Festa" },
    ],
  },
  {
    id: "inteira",
    name: "Inteira",
    tagline: "A escolha mais completa",
    featured: true,
    badge: "Mais Procurado",
    benefits: [
      "Acesso completo aos 2 dias de evento",
      "Certificado de participação",
      "Material de apoio digital",
      "Acesso à gravação por 90 dias",
      "Kit de boas-vindas",
    ],
    variants: [
      { key: "withParty", label: "Com Festa" },
      { key: "withoutParty", label: "Sem Festa" },
    ],
  },
];

const Tickets = () => {
  const { tickets } = useLink();

  // guarda a variante selecionada (índice) para cada card
  const [selected, setSelected] = useState(
    TICKETS.reduce((acc, ticket) => {
      acc[ticket.id] = 0;
      return acc;
    }, {})
  );

  const handleSelect = (ticketId, index) => {
    setSelected((prev) => ({ ...prev, [ticketId]: index }));
  };

  return (
    <section className={styles.section} id="tickets">
      <CarouselScrollInfinitPromo
        dataSlideDouble={{ first: "Black", second: "Friday" }}
        variant="tiltRight"
        placement="top"
        direction="right"
        speed={10}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Garanta Seu Ingresso" color="black" />
          <p className={styles.subtitleText}>
            Escolha a melhor forma de participar do Conect 2027
          </p>
        </div>

        <div className={styles.ticketOptions} data-aos="zoom-in">
          {TICKETS.map((ticket) => {
            const activeIndex = selected[ticket.id];
            const activeVariant = ticket.variants[activeIndex];
            const activeData = tickets?.[ticket.id]?.[activeVariant.key];

            // se faltar dado no contexto, não quebra a página
            if (!activeData) return null;

            return (
              <div
                key={ticket.id}
                className={`${styles.ticketCard} ${
                  ticket.featured ? styles.featured : ""
                }`}
              >
                {ticket.badge && (
                  <span className={styles.badge}>{ticket.badge}</span>
                )}

                <div className={styles.cardHeader}>
                  <h4 className={styles.cardTitle}>{ticket.name}</h4>
                  <p className={styles.cardTagline}>{ticket.tagline}</p>
                </div>

                {activeData.discountPercent && (
                  <span className={styles.discountRibbon}>
                    {activeData.discountPercent}% OFF
                  </span>
                )}

                <div className={styles.priceBlock}>
                  {activeData.originalPrice && (
                    <span className={styles.priceEyebrow}>
                      De:{" "}
                      <span className={styles.originalPrice}>
                        {activeData.originalPrice}
                      </span>
                    </span>
                  )}
                  <span className={styles.priceEyebrow}>
                    {activeData.originalPrice ? "Por apenas" : ""}
                  </span>
                  <span className={styles.price}>{activeData.price}</span>
                  {activeData.installmentNote && (
                    <span className={styles.priceCaption}>
                      {activeData.installmentNote}
                    </span>
                  )}
                  <span className={styles.noteTax}>
                    (Mais taxa da plataforma de pagamento)
                  </span>
                </div>

                {ticket.variants.length > 1 && (
                  <div
                    className={styles.variantToggle}
                    role="tablist"
                    aria-label={`Opções de ${ticket.name}`}
                  >
                    {ticket.variants.map((variant, index) => (
                      <button
                        key={variant.key}
                        type="button"
                        role="tab"
                        aria-selected={activeIndex === index}
                        className={`${styles.toggleButton} ${
                          activeIndex === index ? styles.toggleActive : ""
                        }`}
                        onClick={() => handleSelect(ticket.id, index)}
                      >
                        {variant.label}
                        {variant.tag && (
                          <span className={styles.toggleTag}>
                            {variant.tag}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                <ul className={styles.benefitsList}>
                  {ticket.benefits.map((benefit) => (
                    <li key={benefit}>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <circle cx="10" cy="10" r="10" fill="currentColor" />
                        <path
                          d="M6 10.5L8.5 13L14 7.5"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.ctaWrapper}>
                  <ButtonPretty
                    text={`Garantir ${activeVariant.label}`}
                    link={activeData.link}
                    target="_blank"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tickets;
