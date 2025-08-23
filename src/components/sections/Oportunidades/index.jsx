import styles from "./oportunidade.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import {
  FaEye,
  FaExchangeAlt,
  FaGraduationCap,
  FaUserTie,
  FaTools,
  FaBrain,
  FaHandsHelping,
} from "react-icons/fa";
import Title from "../../shared/Title";

const benefits = [
  {
    title: "Visibilidade e Reconhecimento",
    icon: <FaEye />,
    description:
      "Um palco de destaque para expositores e palestrantes, que apresentam produtos, serviços e pesquisas a um público altamente qualificado.",
  },
  {
    title: "Troca de Experiências",
    icon: <FaExchangeAlt />,
    description:
      "Lugar onde os maiores profissionais, líderes e entusiastas do Neurodesenvolvimento do Brasil e do mundo compartilham ideias, fortalecem redes de colaboração e constroem novas oportunidades.",
  },
  {
    title: "Aprendizado Contínuo",
    icon: <FaGraduationCap />,
    description:
      "Pesquisas atuais, conteúdos respaldados por pesquisas e estudos científicos classificados como nível 1A ou 1B e estratégias eficazes e inovadoras que transformam práticas e ampliam horizontes.",
  },
  {
    title: "Desenvolvimento Profissional e Pessoal",
    icon: <FaUserTie />,
    description:
      "Atualize suas habilidades, absorva novas abordagens terapêuticas e esteja à frente das tendências no campo do neurodesenvolvimento. Um evento que enriquece tanto sua carreira quanto sua vida.",
  },
  {
    title: "Acesso a Recursos",
    icon: <FaTools />,
    description:
      "Conecte-se a serviços, organizações e informações de ponta, ampliando sua rede de conhecimento e apoio.",
  },
  {
    title: "Ampliação de Conhecimento",
    icon: <FaBrain />,
    description:
      "Especialistas de renome nacional e internacional apresentam as descobertas mais recentes, moldando o futuro do neurodesenvolvimento.",
  },
  {
    title: "Ações Sociais",
    icon: <FaHandsHelping />,
    description:
      "Cada ingresso contribui com causas solidárias, como a Casa Ronald McDonald, reforçando o compromisso do Conect com a transformação social.",
  },
];

export default function oportunidades() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>
      <Title text="Oportunidades" color="black" />
      {/* <Title text="Inédito" color="black" />
      <p className={styles.subtitleMain} data-aos="zoom-in">
        O primeiro congresso com um dia inteiro de prática.
      </p> */}
      <p className={styles.subtitle} data-aos="zoom-in">
        O Congresso Conect é o maior espaço de crescimento, aprendizado e
        conexões sobre transtornos do neurodesenvolvimento do Norte e Nordeste.
      </p>

      <div className={styles.boxes} data-aos="zoom-in" data-delay="200">
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              // @0.00
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              // @0.75
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className={styles.mySwiper}
        >
          {benefits.map((benefit) => (
            <SwiperSlide key={benefit.title}>
              <div className={styles.box}>
                <div className={styles.iconContainer}>{benefit.icon}</div>
                <h4 className={styles.title}>{benefit.title}</h4>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
