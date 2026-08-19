// import styles from "./Hero.module.css";
// import logoMobile from "../../../assets/imgs/logo/logo-mobile.png";
// import ButtonPretty from "../../shared/ButtonPretty";
// // import bg from "../../../assets/imgs/background/bg.jpg";
// import bg from "../../../assets/imgs/background/bg-mobile.jpeg";
// import { FaCamera, FaWhatsapp } from "react-icons/fa";
// import { IoIosImages } from "react-icons/io";

// export default function Hero() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.backgroundOverlay}></div>
//       <div className={styles.container}>
//         <div className={styles.content}>
//           <div className={styles.logo} data-aos="zoom-in">
//             <img loading="lazy" src={logoMobile} alt="Logo Conect Autismo" />
//           </div>
//           <div className={styles.text} data-aos="zoom-in" data-aos-delay="300">
//             <p className={styles.subtitle}>
//               Maior Congresso sobre transtorno do{" "}
//               <strong>Neurodesenvolvimento</strong> Norte e Nordeste.
//             </p>
//             <div className={styles.highlight}>
//               <span className={styles.highlightMobile}>
//                 21, 22 e 23 de agosto 2026 | Centro de eventos do Ceará
//               </span>
//             </div>
//           </div>

//           {/* Bloco de destaque - Cadastro Facial */}
//           <div
//             className={styles.facialCta}
//             data-aos="zoom-in"
//             data-aos-delay="200"
//           >
//             <span className={styles.facialBadge}>NOVO</span>
//             <p className={styles.facialText}>
//               Faça seu <strong>cadastro facial</strong> e agilize sua entrada no
//               evento!
//             </p>
//             <ButtonPretty
//               link={"https://www.byface.com.br/login/cadastro"}
//               text={"Cadastro Facial"}
//               data-color="red"
//               target="_blank"
//               icon={<FaCamera />}
//             />
//           </div>

//           <div className={styles.buttons} data-aos-delay="300">
//             <ButtonPretty link={"#tickets2"} text={"Garanta sua vaga agora"} />

//             {/* <ButtonPretty
//               link={"https://congressoconect.pixieset.com"}
//               text={"Fotos Conect 2025"}
//               data-color="line"
//               target="_blank"
//               icon={<IoIosImages />}
//             /> */}
//             <ButtonPretty
//               link={
//                 "https://chat.whatsapp.com/Jk4RP0kn3Jz18YTzYHidK5?s=cl&p=i&ilr=0"
//               }
//               text={"ENTRE PARA A COMUNIDADE CONECT"}
//               data-color="line"
//               target="_blank"
//               icon={<FaWhatsapp />}
//             />
//           </div>
//         </div>
//         <div className={styles.image}>
//           <img src={bg} alt="Imagem de pessoas felizes no conect autismo" />
//         </div>
//       </div>
//     </section>
//   );
// }
import styles from "./Hero.module.css";
import bgDesktop from "../../../assets/imgs/background/bg-910x410.jpeg";
import bgMobile from "../../../assets/imgs/background/bg-500x500.jpeg";
import ButtonPretty from "../../shared/ButtonPretty";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img
          className={styles.bgDesktop}
          src={bgDesktop}
          alt="Background Conect 2027"
        />
        <img
          className={styles.bgMobile}
          src={bgMobile}
          alt="Background Conect 2027"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            TEM COISA QUE VOCÊ APRENDE. TEM COISA QUE VOCÊ VIVE. NO CONECT, AS
            DUAS ACONTECEM.
          </h1>
          <p>
            A 5ª edição já tem data. E você pode garantir seu lugar antes de
            todo mundo.
          </p>
          <div className={styles.buttons}>
            <ButtonPretty text="GARANTIR MEU LUGAR" link="#tickets" />
          </div>
          <span>Condição especial de abertura • Quantidade limitada</span>
        </div>
      </div>
    </div>
  );
}
