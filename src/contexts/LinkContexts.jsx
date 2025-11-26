import { createContext, useContext, useState } from "react";

export const LinkContext = createContext({});

export function LinkProvider({ children }) {
  const [ticketAll, setTicketAll] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=2id7i2k7",
    price: "12 x R$ 103,22",
  });
  const [ticketHalf, setTicketHalf] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=45mef41r",
    price: "12 x R$ 61,93",
  });
  const [ticketGroup, setTicketGroup] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=ny9zl0te",
    price: "12 x R$ 82,57",
  });
  const [ticketBlack10, setTicketBlack10] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=zx4epga5",
    price: "12 x R$ 92,89",
  });
  const [ticketBlack15, setTicketBlack15] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=11fiu5r4",
    price: "12 x R$ 175,46",
  });
  const [ticketBlack25, setTicketBlack25] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=66gkftgt",
    price: "12 x R$ 232,23",
  });
  const [ticketBlack30, setTicketBlack30] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=b5diwahh",
    price: "12 x R$ 289,00",
  });
  const [ticketBlack40, setTicketBlack40] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=rorp1x93",
    price: "12 x R$ 258,05",
  });
  return (
    <LinkContext.Provider
      value={{
        ticketAll,
        setTicketAll,
        ticketHalf,
        setTicketHalf,
        ticketGroup,
        setTicketGroup,
        ticketBlack10,
        ticketBlack15,
        ticketBlack25,
        ticketBlack30,
        ticketBlack40,
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
