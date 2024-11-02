import styles from "./home.module.css";

import FormEvent from "../../components/sections/FormEvent";
import Video2024 from "../../components/sections/Video2024";
import Testionials from "../../components/sections/Testionials";
import Palestrantes from "../../components/sections/Palestrantes";
import Social from "../../components/sections/Social";
import PatrocinadorEExpositor from "../../components/sections/PatrocinadorEExpositor";
import Patrocinador from "../../components/shared/Patrocinador";
import Oportunidades from "../../components/sections/Oportunidades";
import CommonQuestions from "../../components/sections/CommonQuestions";
import Section from "../../components/shared/Section";
import RedesSociais from "../../components/sections/RedesSociais";
import Politica from "../../components/sections/Politica";
import Footer from "../../components/template/Footer";

//meia entrada
import imgMeiaEntrada from "../../assets/imgs/meia-entrada/img.jpg";
import MeiaEntrada from "../../contentSections/MeiaEntrada";

//versa
import imgVersa from "../../assets/imgs/logo/logoVersa.png";
import Versa from "../../contentSections/Versa";

import { arrayPatrocinadores } from "../../data/patrocinadores";
import { arrayApoio } from "../../data/apoio";
import CheckList from "../../components/sections/CheckList";

export default function Home() {
  return (
    <div className={styles.container} data-aos="fade-down">
      <FormEvent />
      <Video2024 />
      <Testionials />
      <Palestrantes />
      <Social />
      <PatrocinadorEExpositor />
      <Patrocinador title="PATROCINADORES" array={arrayPatrocinadores} />
      <Patrocinador title="APOIO" array={arrayApoio} />
      <Oportunidades />
      <Section
        styleImg={"imgSectionNoBorder"}
        img={imgVersa}
        descriptionImg={"Logo Versa"}
        styleComponent={"textSection"}
        component={<Versa />}
        title={"Versa"}
      />
      <Section
        title={"MEIA-ENTRADA CONECT AUTISMO"}
        styleImg={"imgSection"}
        img={imgMeiaEntrada}
        descriptionImg={"Inclusão"}
        styleComponent={"list2Section"}
        component={<MeiaEntrada />}
      />
      <CommonQuestions />
      <CheckList />
      <RedesSociais />
      <Politica />
      <Footer />
    </div>
  );
}
