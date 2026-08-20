import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./SocialProof.module.css";

// Cada item pode ser um vídeo curto ("reels") ou uma frase grande de destaque.
// video: { type: "video", src, poster, name, role }
// quote: { type: "quote", text, name, role }
const DEFAULT_ITEMS = [
  {
    type: "quote",
    text: "Já quero o próximo.",
    name: "Congressista 2026",
  },
  {
    type: "video",
    src: "",
    poster: "",
    name: "Depoimento em vídeo",
    role: "Congressista 2026",
  },
  {
    type: "quote",
    text: "Melhor congresso.",
    name: "Congressista 2026",
  },
  {
    type: "video",
    src: "",
    poster: "",
    name: "Depoimento em vídeo",
    role: "Congressista 2026",
  },
  {
    type: "quote",
    text: "Foi muito além do que eu esperava.",
    name: "Congressista 2026",
  },
  {
    type: "quote",
    text: "Melhor investimento que fiz na minha formação.",
    name: "Congressista 2026",
  },
];

function VideoCard({ item, isActive }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  // pausa automaticamente quando o slide sai de foco
  if (!isActive && playing) {
    videoRef.current?.pause();
    setPlaying(false);
  }

  return (
    <div className={styles.videoFrame}>
      {item.src ? (
        <video
          ref={videoRef}
          className={styles.video}
          src={item.src}
          poster={item.poster || undefined}
          playsInline
          muted={false}
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <div className={styles.videoFallback} aria-hidden="true">
          <FaPlay />
        </div>
      )}

      <button
        type="button"
        className={styles.playButton}
        onClick={toggle}
        aria-label={playing ? "Pausar depoimento" : "Reproduzir depoimento"}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>

      <div className={styles.videoCaption}>
        <span className={styles.captionName}>{item.name}</span>
        {item.role && <span className={styles.captionRole}>{item.role}</span>}
      </div>
    </div>
  );
}

function QuoteCard({ item }) {
  return (
    <div className={styles.quoteFrame}>
      <BiSolidQuoteLeft className={styles.quoteMark} />
      <p className={styles.quoteText}>{item.text}</p>
      {item.name && <span className={styles.quoteName}>{item.name}</span>}
    </div>
  );
}

export default function SocialProof({ items = DEFAULT_ITEMS }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <ul className={styles.particles} aria-hidden="true">
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Quem vive o Conect, entende.</h2>
          <p className={styles.subtitle}>Depoimentos reais de 2026.</p>
        </div>

        <div className={styles.galleryWrapper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1.1}
            spaceBetween={20}
            autoplay={{ delay: 4500, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 24 },
              1024: { slidesPerView: 3.2, spaceBetween: 28 },
            }}
            className={styles.swiper}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                {item.type === "video" ? (
                  <VideoCard item={item} isActive={index === activeIndex} />
                ) : (
                  <QuoteCard item={item} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Depoimento anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo depoimento"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <p className={styles.closing}>
          Eles já viveram.
          <br />
          <span className={styles.closingAccent}>Em 2027, pode ser você.</span>
        </p>
      </div>
    </section>
  );
}
