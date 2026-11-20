import { createContext, useContext, useState } from "react";

export const LinkContext = createContext({});

const LOTE = {
  discountPercent: 40,
  installments: 10,
  installmentFee: 0.1664, // acréscimo do parcelamento (16,64%)
};

const LINK_EUREKHA = "https://eurekha.com.br/v/4545/congresso-conect-2027";

const TICKET_PRICES = {
  inteira: {
    withoutParty: { cash: 499.0, link: LINK_EUREKHA },
    withParty: { cash: 559.0, link: LINK_EUREKHA },
  },
  meia: {
    withoutParty: { cash: 299.0, link: LINK_EUREKHA },
    withParty: { cash: 359.0, link: LINK_EUREKHA },
  },
};

const formatBRL = (num) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);

const buildTicket = ({ cash, link, installmentValue }) => {
  const { discountPercent, installments, installmentFee } = LOTE;

  // parcela calculada; se quiser forçar um valor, passe installmentValue
  const parcel =
    installmentValue ??
    Math.round(((cash * (1 + installmentFee)) / installments) * 100) / 100;

  const original = cash / (1 - discountPercent / 100);

  return {
    link,
    price: `${installments} x ${formatBRL(parcel)}`,
    installmentNote: `ou ${formatBRL(cash)} à vista`,
    originalPrice: formatBRL(original),
    // selo derivado dos dois valores exibidos (De x valor à vista)
    discountPercent: Math.round((1 - cash / original) * 100),
  };
};

const buildTickets = (prices) =>
  Object.fromEntries(
    Object.entries(prices).map(([id, variants]) => [
      id,
      Object.fromEntries(
        Object.entries(variants).map(([key, v]) => [key, buildTicket(v)])
      ),
    ])
  );

const TICKETS_DATA = buildTickets(TICKET_PRICES);

export function LinkProvider({ children }) {
  return (
    <LinkContext.Provider
      value={{
        tickets: TICKETS_DATA,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}

export default function useLink() {
  const context = useContext(LinkContext);

  if (!context) {
    throw new Error("useLink deve ser usado dentro de um LinkProvider");
  }

  return context;
}
