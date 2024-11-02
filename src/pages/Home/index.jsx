import styles from "./home.module.css";

import FormEvent from "../../components/sections/FormEvent";
import Oportunidades from "../../components/sections/Oportunidades";
import Video2024 from "../../components/sections/Video2024";
import Social from "../../components/sections/Social";
import Section from "../../components/shared/Section";

//meia entrada
import imgMeiaEntrada from "../../assets/imgs/meia-entrada/img.jpg";
import MeiaEntrada from "../../contentSections/MeiaEntrada";

// //sobre nos
// import imgSobreNos from "../../assets/imgs/sobre-nos/sobre-nos.jpg";
// import SobreNos from "../../contentSections/SobreNos";

import Palestrantes from "../../components/sections/Palestrantes";

import Patrocinador from "../../components/shared/Patrocinador";
import { arrayPatrocinadores } from "../../data/patrocinadores";

import { arrayApoio } from "../../data/apoio";
// import { FaArrowDown } from "react-icons/fa";

import PatrocinadorEExpositor from "../../components/sections/PatrocinadorEExpositor";

//versa
import imgVersa from "../../assets/imgs/logo/logoVersa.png";
import Versa from "../../contentSections/Versa";

import RedesSociais from "../../components/sections/RedesSociais";
import Politica from "../../components/sections/Politica";
import Footer from "../../components/template/Footer";
import Testionials from "../../components/sections/Testionials";

// import ButtonBasic from "../../components/shared/ButtonBasic";

export default function Home() {
  return (
    <div className={styles.container} data-aos="fade-down">
      <FormEvent />
      <Video2024 />
      {/* <Testionials /> */}
      <Social />
      <Palestrantes />
      <PatrocinadorEExpositor />
      <Patrocinador title="PATROCINADORES" array={arrayPatrocinadores} />
      <Patrocinador title="APOIO" array={arrayApoio} />
      <Section
        styleImg={"imgSectionNoBorder"}
        img={imgVersa}
        descriptionImg={"Logo Versa"}
        styleComponent={"textSection"}
        component={<Versa />}
        title={"Versa"}
      />
      <Oportunidades />
      <Section
        title={"MEIA-ENTRADA CONECT AUTISMO"}
        styleImg={"imgSection"}
        img={imgMeiaEntrada}
        descriptionImg={"Inclusão"}
        styleComponent={"list2Section"}
        component={<MeiaEntrada />}
      />
      <RedesSociais />
      <Politica />
      <Footer />
    </div>
  );
}
