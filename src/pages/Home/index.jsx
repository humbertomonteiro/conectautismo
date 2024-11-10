import styles from "./home.module.css";

import Welcome from "../../components/sections/Welcome";
// import FormEvent from "../../components/sections/FormEvent";
import Video2024 from "../../components/sections/Video2024";
// import Testionials from "../../components/sections/Testionials";
import Palestrantes from "../../components/sections/Palestrantes";
import Social from "../../components/sections/Social";
import PatrocinadorEExpositor from "../../components/sections/PatrocinadorEExpositor";
import Patrocinador from "../../components/shared/Patrocinador";
import Oportunidades from "../../components/sections/Oportunidades";
import BoxesTickts from "../../components/sections/BoxesTickts";
import CommonQuestions from "../../components/sections/CommonQuestions";
import Section from "../../components/shared/Section";
import RedesSociais from "../../components/sections/RedesSociais";
import Politica from "../../components/sections/Politica";
import Footer from "../../components/template/Footer";

//meia entrada
import imgMeiaEntrada from "../../assets/imgs/meia-entrada/img.jpg";
import MeiaEntrada from "../../contentSections/MeiaEntrada";

//versa
// import imgVersa from "../../assets/imgs/logo/logoVersa.png";
// import Versa from "../../contentSections/Versa";

import { arrayPatrocinadores } from "../../data/patrocinadores";
import { arrayApoio } from "../../data/apoio";
import CheckList from "../../components/sections/CheckList";
import CarouselScrollInfinit from "../../components/shared/CarouselScrollInfinit";

export default function Home() {
  return (
    <div className={styles.container} data-aos="fade-down">
      <Welcome />
      {/* <FormEvent /> */}
      <Video2024 />
      {/* <Testionials /> */}
      <Palestrantes />
      <PatrocinadorEExpositor />
      <Oportunidades />
      <BoxesTickts />
      {/* <Section
        styleImg={"imgSectionNoBorder"}
        img={imgVersa}
        descriptionImg={"Logo Versa"}
        styleComponent={"textSection"}
        component={<Versa />}
        title={"Versa"}
        /> */}
      <Section
        id={"meia-entrada"}
        title={"MEIA-ENTRADA CONECT AUTISMO"}
        styleImg={"imgSection"}
        img={imgMeiaEntrada}
        descriptionImg={"Inclusão"}
        styleComponent={"list2Section"}
        component={<MeiaEntrada />}
      />
      <Social />
      {/* <CarouselScrollInfinit
        title={"Patrocinadores"}
        array={arrayPatrocinadores}
      /> */}
      <Patrocinador title="PATROCINADORES" array={arrayPatrocinadores} />
      <Patrocinador title="APOIO" array={arrayApoio} />
      <CommonQuestions />
      <CheckList />
      <RedesSociais />
      <Politica />
      <Footer />
    </div>
  );
}
