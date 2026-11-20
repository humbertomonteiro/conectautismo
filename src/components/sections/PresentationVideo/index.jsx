import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./PresentationVideo.module.css";
import { FaVolumeMute, FaVolumeUp, FaExpand, FaCompress } from "react-icons/fa";
import blackFriday from "../../../assets/videos/black-friday-web.mp4";
import conect2026 from "../../../assets/videos/filme-congresso-2026-web.mp4";
import ButtonPretty from "../../shared/ButtonPretty";
import CarouselScrollInfinitPromo from "../../shared/CarouselScrollInfinitPromo";

// A ordem aqui é a ordem do carrossel: o primeiro é o que aparece em destaque.
const VIDEOS = [
  {
    id: "black-friday",
    label: "Black Friday",
    badge: "Black Friday",
    src: blackFriday,
  },
  { id: "congresso-2026", label: "Congresso 2026", src: conect2026 },
];

function VideoCard({ src, badge, isActive }) {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inView, setInView] = useState(false);

  // Detecta se o card está visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  // Só toca quando é o slide ativo E está visível. Ao sair, pausa, muta e volta ao início.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive && inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
      if (!isActive) {
        video.muted = true;
        setMuted(true);
        video.currentTime = 0.1;
      }
    }
  }, [isActive, inView]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fsElement =
        document.fullscreenElement || document.webkitFullscreenElement;
      setIsFullscreen(
        fsElement === wrapperRef.current || fsElement === videoRef.current
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video || !isActive) return; // no card lateral, o clique só traz ele pro centro
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;

    const currentFsElement =
      document.fullscreenElement || document.webkitFullscreenElement;

    if (currentFsElement) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      return;
    }

    if (wrapper?.requestFullscreen) {
      wrapper.requestFullscreen();
    } else if (wrapper?.webkitRequestFullscreen) {
      wrapper.webkitRequestFullscreen();
    } else if (video?.webkitEnterFullscreen) {
      // fallback para iOS Safari, que só permite fullscreen no <video>
      video.webkitEnterFullscreen();
    }
  };

  return (
    <div className={styles.videoWrapper} ref={wrapperRef}>
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        playsInline
        loop
        muted={muted}
        preload="metadata"
        onClick={toggleSound}
      />

      {badge && <span className={styles.badge}>{badge}</span>}

      <div className={styles.controlsRow}>
        <button
          type="button"
          className={styles.soundButton}
          onClick={toggleSound}
          aria-label={muted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
        >
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          <span className={styles.soundHint}>
            {muted ? "Ativar som" : "Som ativado"}
          </span>
        </button>

        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "Sair da tela cheia" : "Ver em tela cheia"}
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
    </div>
  );
}

export default function PresentationVideo() {
  return (
    <section className={styles.section}>
      <CarouselScrollInfinitPromo
        dataSlideDouble={{ first: "Black", second: "Friday" }}
        variant="tiltLeft"
        placement="top"
        direction="left"
        speed={10}
      />
      <div className={styles.container}>
        <div className={styles.stage} id="tickets2" data-aos="zoom-in">
          <Swiper
            className={styles.swiper}
            modules={[EffectCoverflow, Pagination, Keyboard]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            slideToClickedSlide
            keyboard={{ enabled: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 160,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}">${VIDEOS[index].label}</span>`,
            }}
          >
            {VIDEOS.map((video) => (
              <SwiperSlide key={video.id} className={styles.slide}>
                {({ isActive }) => (
                  <VideoCard
                    src={video.src}
                    badge={video.badge}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.buttons}>
          <ButtonPretty text=" EU QUERO ESTAR LÁ" link="#tickets" />
        </div>
      </div>
    </section>
  );
}
