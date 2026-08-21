import { createContext, useContext, useState } from "react";

export const LinkContext = createContext({});

export function LinkProvider({ children }) {
  //tickets black friday
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
    price: "12 x R$ 309,65",
  });

  const [ticketWithParty, setTicketWithParty] = useState({
    link: "https://eurekha.com.br/v/4545/congresso-conect-2027",
    price: "12 x R$ 59,90",
  });
  const [ticketWithoutParty, setTicketWithoutParty] = useState({
    link: "https://eurekha.com.br/v/4545/congresso-conect-2027",
    price: "12 x R$ 49,90",
  });
  const [halfTicketWithParty, setHalfTicketWithParty] = useState({
    link: "https://eurekha.com.br/v/4545/congresso-conect-2027",
    price: "12 x R$ 39.90",
  });
  const [halfTicketWithoutParty, setHalfTicketWithoutParty] = useState({
    link: "https://eurekha.com.br/v/4545/congresso-conect-2027",
    price: "12 x R$ 29,90",
  });
  const [groupTicketWithParty4, setGroupTicketWithParty4] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=u9ywuixz",
    price: "12 x de R$ 357,40",
  });
  const [groupTicketWithParty8, setGroupTicketWithParty8] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=k7y4szad",
    price: "12 x de R$ 625,44",
  });
  const [partyTicket, setPartyTicket] = useState({
    link: "https://pay.hotmart.com/D101401576U?off=irh31vpd",
    price: "10 x de R$ 12,02",
  });
  return (
    <LinkContext.Provider
      value={{
        ticketBlack10,
        ticketBlack15,
        ticketBlack25,
        ticketBlack30,
        ticketBlack40,
        ticketWithParty,
        ticketWithoutParty,
        halfTicketWithParty,
        halfTicketWithoutParty,
        groupTicketWithParty4,
        groupTicketWithParty8,
        partyTicket,
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
