import styles from "./oportunidade.module.css";

import ampliacao from "../../../assets/imgs/oportunidades/ampliacao.png";
import acesso from "../../../assets/imgs/oportunidades/acesso-recursos.png";
import desenvolvimento from "../../../assets/imgs/oportunidades/desenvolvimento.png";
import aprendizado from "../../../assets/imgs/oportunidades/aprendizado.png";
import trocaExperiencias from "../../../assets/imgs/oportunidades/troca-experiencias.png";
import visibilidade from "../../../assets/imgs/oportunidades/visibilidade.png";
import atualizacao from "../../../assets/imgs/oportunidades/atualizacao.png";
import acoesSociais from "../../../assets/imgs/oportunidades/acoes-sociais.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import Title from "../../shared/Title";

export default function oportunidades() {
  return (
    <div className={styles.container}>
      <Title text={"OPORTUNIDADES"} />
      <div className={styles.boxes} data-aos="zoom-in" data-delay="200">
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
              },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img
                  loading="lazy"
                  src={ampliacao}
                  alt="Ampliação de Conhecimento"
                />
                <h3>Ampliação de Conhecimento</h3>
                <p>
                  Mergulhe no universo do autismo com o Conect Autismo. Este
                  evento é uma janela para o mundo do TEA, oferecendo insights
                  profundos através de apresentações de especialistas de renome
                  internacional. Explore as mais recentes descobertas, terapias
                  inovadoras e abordagens progressivas que estão moldando o
                  futuro do autismo
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img loading="lazy" src={acesso} alt="Acesso a Recursos" />
                <h3>Acesso a Recursos</h3>
                <p>
                  Participar do Conect Autismo significa ter acesso a um arsenal
                  de recursos valiosos. Desde terapias de vanguarda e técnicas
                  de apoio até informações cruciais sobre serviços e
                  organizações dedicadas ao TEA, tudo ao seu alcance. É uma
                  oportunidade única para enriquecer seu conhecimento e rede de
                  apoio.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img
                  loading="lazy"
                  src={desenvolvimento}
                  alt="Desenvolvimento Profissional"
                />
                <h3>Desenvolvimento Profissional</h3>
                <p>
                  Para profissionais da saúde, educadores e terapeutas, o Conect
                  Autismo é um catalisador para o crescimento profissional.
                  Atualize suas habilidades, absorva novas abordagens
                  terapêuticas e mantenha-se à frente das tendências emergentes
                  no campo do autismo. Aqui, a evolução profissional encontra a
                  inovação.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img
                  loading="lazy"
                  src={aprendizado}
                  alt="Aprendizado Contínuo"
                />
                <h3>Aprendizado Contínuo</h3>
                <p>
                  Com uma diversidade de palestrantes e especialistas de elite,
                  o evento é um epicentro de aprendizado contínuo. Descubra as
                  pesquisas mais atuais, terapias inovadoras e estratégias
                  eficazes de apoio ao TEA. Cada sessão é uma porta aberta para
                  novos conhecimentos e perspectivas.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img
                  loading="lazy"
                  src={trocaExperiencias}
                  alt="Troca de Experiências"
                />
                <h3>Troca de Experiências</h3>
                <p>
                  O Conect Autismo é um ponto de encontro para líderes,
                  profissionais e entusiastas do TEA de todo o mundo. Este
                  ambiente é fértil para colaborações significativas, troca de
                  ideias e experiências que podem elevar carreiras e enriquecer
                  vidas. Participe deste intercâmbio de saberes com os mais
                  influentes no campo do autismo.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img
                  loading="lazy"
                  src={visibilidade}
                  alt="Visibilidade e Reconhecimento"
                />
                <h3>Visibilidade e Reconhecimento</h3>
                <p>
                  Para expositores e palestrantes, o evento oferece uma
                  plataforma de visibilidade inigualável. É a chance de destacar
                  produtos, serviços e pesquisas diante de um público
                  especializado, expandindo reconhecimento e oportunidades de
                  negócios em um mercado em crescimento.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img
                  loading="lazy"
                  src={atualizacao}
                  alt="Atualização Pessoal"
                />
                <h3>Atualização Pessoal</h3>
                <p>
                  O Conect Autismo é um centro vibrante de atualização e
                  aprendizado. Com palestras e workshops abordando as tendências
                  mais recentes e abordagens eficazes no manejo do TEA, o evento
                  enriquece tanto o desenvolvimento profissional quanto pessoal
                  dos participantes.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.box} data-aos="zoom-in">
                <img loading="lazy" src={acoesSociais} alt="Ações Sociais" />
                <h3>Ações Sociais</h3>
                <p>
                  Compromisso Social e Transformação: Conect Autismo & Casa
                  Ronald McDonald Um Passo Adiante na Solidariedade. Com cada
                  ingresso vendido para o Conect Autismo, não apenas avançamos
                  na educação e conscientização sobre o autismo, mas também
                  abraçamos uma causa maior. Uma parte de cada ingresso é
                  destinada ao Casa Ronald McDonald, e é com orgulho que
                  compartilhamos nossa validação como doadores.
                  {/* Parte da receita do Conect Autismo é destinada a projetos sociais
              transformadores, como o TEAFRICA, que capacita profissionais e
              familiares na África sobre o TEA. Esta iniciativa sublinha o
              compromisso do evento com impactos sociais positivos, tanto local
              quanto globalmente. */}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
        {/* <div className={styles.boxes}> */}

        {/* </div> */}
      </div>
    </div>
  );
}
