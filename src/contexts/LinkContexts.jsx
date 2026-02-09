import { createContext, useContext, useState } from "react";

export const LinkContext = createContext({});

export function LinkProvider({ children }) {
  const [ticketAll, setTicketAll] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=2id7i2k7",
    price: "12 x R$ 103,22",
  });
  const [ticketHalf, setTicketHalf] = useState({
    // link: "https://pay.hotmart.com/D101401576U?off=45mef41r",
    link: "https://pay.hotmart.com/D101401576U?off=45mef41r&_gl=1*1w8wynw*_ga*MTk4MzI0NzcyOC4xNzYzOTAwNjU1*_ga_1PCEYDM0JC*czE3NjM5Nzg3NzMkbzMkZzAkdDE3NjM5Nzg3NzMkajYwJGwwJGgw",
    price: "12 x R$ 61,93",
  });
  const [ticketGroup4, setTicketGroup4] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=ny9zl0te&_gl=1*ovrrrb*_ga*MTgwMzY2OTc0OS4xNzcwNjYxNzgy*_ga_1PCEYDM0JC*czE3NzA2NjE3ODEkbzEkZzAkdDE3NzA2NjE3ODEkajYwJGwwJGgw&bid=1770663152185",
    price: "12 x R$ 82,57",
  });
  const [ticketGroup5, setTicketGroup5] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=b5diwahh",
    price: "12 x R$ 72,25",
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
        ticketGroup4,
        setTicketGroup4,
        ticketGroup5,
        setTicketGroup5,
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
