import styles from "./home.module.css";

import logo from "../../assets/imgs/logo/logo-png.png";

import Oportunidades from "../../components/Oportunidades";
import Video2024 from "../../components/Video2024";
import Social from "../../components/Social";

import Section from "../../components/Section";

//meia entrada
import imgMeiaEntrada from "../../assets/imgs/meia-entrada/img3.jpg";
import MeiaEntrada from "../../contentSections/MeiaEntrada";

//sobre nos
import imgSobreNos from "../../assets/imgs/sobre-nos/sobre-nos.jpg";
import SobreNos from "../../contentSections/SobreNos";

import Palestrantes from "../../components/Palestrantes";

import Patrocinador from "../../components/Patrocinador";
import { arrayPatrocinadores } from "../../data/patrocinadores";

import { arrayApoio } from "../../data/apoio";
import { FaArrowDown } from "react-icons/fa";

import PatrocinadorEExpositor from "../../components/PatrocinadorEExpositor";

//versa
import imgVersa from "../../assets/imgs/logo/logoVersa.png";
import Versa from "../../contentSections/Versa";

import RedesSociais from "../../components/RedesSociais";
import Politica from "../../components/Politica";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className={styles.container} data-aos="fade-down">
      <div className={styles.containerHome}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.text}>
          <h1>Conect Autismo</h1>
          <h1> ESTÃO PRONTOS PARA SE CONECTAR EM 2025?</h1>
          <p>
            A sua oportunidade de fazer parte de uma história de transformação e
            esperança. Venha e conecte-se com um futuro mais inclusivo e
            compreensivo.
          </p>
        </div>
        <div className={styles.buttons}>
          <a href="#about" className={styles.button}>
            Sobre o Evento <FaArrowDown />
          </a>
        </div>
      </div>
      <Video2024 />
      <Oportunidades />
      <Social />

      <Section
        title={"MEIA-ENTRADA CONECT AUTISMO"}
        styleImg={"imgSection"}
        img={imgMeiaEntrada}
        descriptionImg={"Inclusão"}
        styleComponent={"list2Section"}
        component={<MeiaEntrada />}
      />
      <Section
        title={"SOBRE NÓS"}
        styleImg={"imgSection"}
        img={imgSobreNos}
        descriptionImg={"Aline Sales"}
        styleComponent={"textSection"}
        component={<SobreNos />}
      />
      <Palestrantes />

      <Patrocinador title="PATROCINADORES" array={arrayPatrocinadores} />
      <Patrocinador title="APOIO" array={arrayApoio} />
      <PatrocinadorEExpositor />
      <Section
        styleImg={"imgSectionNoBorder"}
        img={imgVersa}
        descriptionImg={"Logo Versa"}
        styleComponent={"textSection"}
        component={<Versa />}
      />
      <RedesSociais />
      <Politica />
      <Footer />
    </div>
  );
}
