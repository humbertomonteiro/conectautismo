import { useState } from "react";
import styles from "./Tickets.module.css";
import ButtonPretty from "../../shared/ButtonPretty";

import Title from "../../shared/Title";
import useLink from "../../../contexts/LinkContexts";

// Cada ticket pode ter mais de uma "variante" (ex: sem festa / com festa).
// Ajuste os textos de benefícios livremente — são só um ponto de partida.
// Extrai APENAS o valor numérico que vem depois de "R$" — ignora prefixos
// como "12x de", que antes eram lidos por engano como parte do número.
const parseBRLPrice = (value) => {
  if (typeof value !== "string") return null;
  const match = value.match(/R\$\s*([\d.]*\d(?:,\d+)?)/);
  if (!match) return null;
  const normalized = match[1].replace(/\./g, "").replace(",", ".");
  const num = parseFloat(normalized);
  return Number.isNaN(num) ? null : num;
};

// Extrai o número de parcelas de textos como "12x de R$ 111,69" -> 12
const parseInstallmentCount = (value) => {
  if (typeof value !== "string") return null;
  const match = value.match(/(\d+)\s*x/i);
  return match ? parseInt(match[1], 10) : null;
};

const formatBRLPrice = (num) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);

// Se o ingresso não trouxer um originalPrice manual, calculamos automaticamente
// um preço "de" que reflita um desconto de X% sobre o preço atual.
// Fórmula correta de desconto: precoOriginal = precoAtual / (1 - desconto)
// Ex: 25% de desconto -> precoOriginal = precoAtual / 0.75 (não precoAtual * 1.3)
const DISCOUNT_PERCENT = 40; // ajuste aqui, mantenha entre 20 e 30

const withComputedDiscount = (data) => {
  if (!data || !data.price) return data;
  if (data.originalPrice) return data; // já veio pronto do LinkContext, respeita

  const installmentValue = parseBRLPrice(data.price);
  if (installmentValue === null) return data;

  // Se o preço atual for parcelado (ex: "12x de R$ 111,69"), o valor "De:"
  // deve ser o total à vista, não o valor da parcela.
  const installments = parseInstallmentCount(data.price);
  const currentTotal = installments
    ? installmentValue * installments
    : installmentValue;

  const discount = data.discountPercent ?? DISCOUNT_PERCENT;
  const originalTotal = currentTotal / (1 - discount / 100);

  return {
    ...data,
    originalPrice: formatBRLPrice(originalTotal), // valor cheio, sem "Nx de"
    discountPercent: discount,
  };
};

// Valores "à vista" informados manualmente por ticket/variante.
// Se o LinkContext já trouxer um installmentNote próprio, ele tem prioridade
// (ver getActiveData mais abaixo).
const CASH_PRICES = {
  inteira: {
    withoutParty: "R$ 299,00",
    withParty: "R$ 399,00",
  },
  meia: {
    withoutParty: "R$ 629,90",
    withParty: "R$ 679,90",
  },
  grupo: {
    group4: "R$ 3.455,68",
    group8: "R$ 6.047,44",
  },
};

const getActiveData = (ticketId, variantKey, rawData) => {
  const cashPrice = CASH_PRICES[ticketId]?.[variantKey];
  const withCashNote = {
    ...rawData,
    installmentNote:
      rawData?.installmentNote ??
      (cashPrice ? `ou ${cashPrice} à vista` : undefined),
  };
  return withComputedDiscount(withCashNote);
};

const TICKETS = [
  // {
  //   id: "meia",
  //   name: "Meia-Entrada",
  //   tagline: "Ideal para estudantes",
  //   benefits: [
  //     "Acesso completo aos 3 dias de evento",
  //     "Certificado de participação",
  //     "Material de apoio digital",
  //     "Acesso à gravação por 30 dias",
  //   ],
  //   variants: [
  //     { key: "withoutParty", label: "Sem Festa" },
  //     { key: "withParty", label: "Com Festa" },
  //   ],
  //   getData: (links) => ({
  //     withoutParty: links.halfTicketWithoutParty,
  //     withParty: links.halfTicketWithParty,
  //   }),
  // },
  {
    id: "inteira",
    name: "Inteira",
    tagline: "A escolha mais completa",
    featured: true,
    badge: "Mais Procurado",
    benefits: [
      "Acesso completo aos 3 dias de evento",
      "Certificado de participação",
      "Material de apoio digital",
      "Acesso à gravação por 90 dias",
      "Kit de boas-vindas",
    ],
    variants: [
      { key: "withoutParty", label: "Sem Festa" },
      { key: "withParty", label: "Com Festa" },
    ],
    getData: (links) => ({
      withoutParty: links.ticketWithoutParty,
      withParty: links.ticketWithParty,
    }),
  },
  // {
  //   id: "grupo",
  //   name: "Desconto em Grupo",
  //   tagline: "Leve seu time com desconto",
  //   badge: "Melhor Custo-Benefício",
  //   benefits: [
  //     "Tudo do ingresso Inteira",
  //     "Desconto progressivo por integrante",
  //     "Festa de encerramento inclusa",
  //     "Check-in prioritário em grupo",
  //   ],
  //   variants: [
  //     { key: "group4", label: "4 Pessoas", tag: "20% OFF" },
  //     { key: "group8", label: "8 Pessoas", tag: "30% OFF" },
  //   ],
  //   getData: (links) => ({
  //     group4: links.groupTicketWithParty4,
  //     group8: links.groupTicketWithParty8,
  //   }),
  // },
];

const Tickets = () => {
  const links = useLink();

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
      <div className={styles.container}>
        <div className={styles.header}>
          <Title text="Garanta Seu Ingresso" color="black" />
          <p className={styles.subtitleText}>
            Escolha a melhor forma de participar do Conect 2027
          </p>
        </div>

        <div className={styles.ticketOptions} data-aos="zoom-in">
          {TICKETS.map((ticket) => {
            const data = ticket.getData(links);
            const activeIndex = selected[ticket.id];
            const activeVariant = ticket.variants[activeIndex];
            const activeData = getActiveData(
              ticket.id,
              activeVariant.key,
              data[activeVariant.key] || {}
            );

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
