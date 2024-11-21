import styles from "./home.module.css";

import Welcome from "../../components/sections/Welcome";
import Video2024 from "../../components/sections/Video2024";
import Palestrantes from "../../components/sections/Palestrantes";
import Social from "../../components/sections/Social";
import PatrocinadorEExpositor from "../../components/sections/PatrocinadorEExpositor";
import Patrocinador from "../../components/shared/Patrocinador";
import Oportunidades from "../../components/sections/Oportunidades";
import BoxesTickts from "../../components/sections/BoxesTickts";
import CommonQuestions from "../../components/sections/CommonQuestions";
import RedesSociais from "../../components/shared/RedesSociais";
import Politica from "../../components/sections/Politica";
import Footer from "../../components/template/Footer";

import { arrayPatrocinadores } from "../../data/patrocinadores";
import { arrayApoio } from "../../data/apoio";
import CheckList from "../../components/sections/CheckList";
import HalfiPrice from "../../components/sections/HalfPrice";

export default function Home() {
  return (
    <div className={styles.container} data-aos="fade-down">
      <Welcome />
      <Video2024 />
      <Palestrantes />
      <PatrocinadorEExpositor />
      <Oportunidades />
      <BoxesTickts />
      <HalfiPrice />
      <Social />
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
