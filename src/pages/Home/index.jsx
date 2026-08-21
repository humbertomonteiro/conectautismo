import { useEffect } from "react";
import { doc, setDoc, increment } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import styles from "./home.module.css";

import Hero from "../../components/sections/Hero";
import Local from "../../components/sections/Local";
import PatrocinadorEExpositor from "../../components/sections/PatrocinadorEExpositor";
import AuthorityStats from "../../components/sections/AuthorityStats";
import Authority from "../../components/sections/Authority";
import CommonQuestions from "../../components/sections/CommonQuestions";
import RedesSociais from "../../components/shared/RedesSociais";
import Politica from "../../components/sections/Politica";
import Footer from "../../components/template/Footer";
import TopPromoBar from "../../components/shared/TopPromoBar";
import SocialProof from "../../components/sections/SocialProof";
import Tickets from "../../components/sections/Tickets";
import Certificate from "../../components/sections/Certificate";
import PresentationVideo from "../../components/sections/PresentationVideo";
import ScrollToTop from "../../components/shared/ScrollToTop";
import WhiteParty from "../../components/sections/WhiteParty";
import Supporters from "../../components/sections/Supporters";
// import SpeakersCarousel from "../../components/sections/SpeakersCarousel";
import ExperienceGallery from "../../components/sections/ExperienceGallery";
import PreSaleScarcity from "../../components/sections/PreSaleScarcity";
import FinalCall from "../../components/sections/FinalCall";

export default function Home() {
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("ref");
    if (!slug) return;
    sessionStorage.setItem("influencer-ref", slug);
    if (sessionStorage.getItem(`tracked-view-${slug}`)) return;
    sessionStorage.setItem(`tracked-view-${slug}`, "1");
    setDoc(
      doc(db, "influencer-stats", slug),
      { pageViews: increment(1) },
      { merge: true }
    );
  }, []);

  return (
    <>
      <TopPromoBar />
      <div className={styles.container}>
        <Hero />
        <PresentationVideo />
        <AuthorityStats />
        {/* <SpeakersCarousel /> */}
        <ExperienceGallery />
        <SocialProof />
        <Authority />
        <WhiteParty />
        <Tickets />
        <PreSaleScarcity />
        <FinalCall />
        <Certificate />
        <PatrocinadorEExpositor />
        <Local />
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
