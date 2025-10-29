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
  return (
    <LinkContext.Provider
      value={{
        ticketAll,
        setTicketAll,
        ticketHalf,
        setTicketHalf,
        ticketGroup,
        setTicketGroup,
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
