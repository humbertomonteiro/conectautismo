import styles from "./home.module.css";

import Welcome from "../../components/sections/Welcome";
import Local from "../../components/sections/Local";
import PatrocinadorEExpositor from "../../components/sections/PatrocinadorEExpositor";
import Oportunidades from "../../components/sections/Oportunidades";
import BoxesTickts from "../../components/sections/BoxesTickts";
import CommonQuestions from "../../components/sections/CommonQuestions";
import RedesSociais from "../../components/shared/RedesSociais";
import Politica from "../../components/sections/Politica";
import Footer from "../../components/template/Footer";

import TopPromoBar from "../../components/shared/TopPromoBar";
import Testimonials from "../../components/sections/Testionials";
import SpeakersPos from "../../components/sections/SpeakersPos";
import Certificate from "../../components/sections/Certificate";

export default function Home() {
  return (
    <>
      <TopPromoBar />
      <div className={styles.container}>
        <Welcome />
        <SpeakersPos />
        <BoxesTickts />
        <Oportunidades />
        <Certificate />
        <PatrocinadorEExpositor />
        <Local />
        <Testimonials />
        <RedesSociais />
        <CommonQuestions />
        <Politica />
        <Footer />
      </div>
    </>
  );
}
