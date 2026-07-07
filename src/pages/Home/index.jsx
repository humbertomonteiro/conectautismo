import { useEffect } from "react";
import { doc, setDoc, increment } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import styles from "./home.module.css";

import Welcome from "../../components/sections/Welcome";
import Local from "../../components/sections/Local";
import PatrocinadorEExpositor from "../../components/sections/PatrocinadorEExpositor";
import Oportunidades from "../../components/sections/Oportunidades";
// import BoxesTickts from "../../components/sections/BoxesTickts";
import CommonQuestions from "../../components/sections/CommonQuestions";
import RedesSociais from "../../components/shared/RedesSociais";
import Politica from "../../components/sections/Politica";
import Footer from "../../components/template/Footer";

// import HeroPromo from "../../components/sections/HeroPromo";

import EventSchedule from "../../components/sections/EventSchedule";

import TopPromoBar from "../../components/shared/TopPromoBar";
import Testimonials from "../../components/sections/Testionials";
import Tickets from "../../components/sections/Tickets";
import Certificate from "../../components/sections/Certificate";

import PosMayra from "../../components/sections/PosMayra";
// import TicketsMinimalistSale from "../../components/sections/TicketsMinimalistSale";
import ScrollToTop from "../../components/shared/ScrollToTop";
import PartyTicket from "../../components/sections/PartyTicket";
import Supporters from "../../components/sections/Supporters";

export default function Home() {
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("ref");
    if (!slug) return;
    sessionStorage.setItem("influencer-ref", slug);
    if (sessionStorage.getItem(`tracked-view-${slug}`)) return;
    sessionStorage.setItem(`tracked-view-${slug}`, "1");
    setDoc(doc(db, "influencer-stats", slug), { pageViews: increment(1) }, { merge: true });
  }, []);

  return (
    <>
      <TopPromoBar />
      <div className={styles.container}>
        <Welcome />
        {/* <HeroPromo /> */}
        <Tickets />
        {/* <TicketsMinimalistSale saleName={"SEMANA DO CONSUMIDOR"} /> */}
        <PartyTicket />
        <PosMayra />
        <EventSchedule />
        {/* <BoxesTickts /> */}
        <Oportunidades />
        <Certificate />
        <PatrocinadorEExpositor />
        <Local />
        <Testimonials />
        <RedesSociais />
        <Supporters />
        <CommonQuestions />
        <Politica />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
