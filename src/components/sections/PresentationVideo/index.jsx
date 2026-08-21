import { useEffect, useRef, useState } from "react";
import styles from "./PresentationVideo.module.css";
import { FaVolumeMute, FaVolumeUp, FaExpand, FaCompress } from "react-icons/fa";
import Title from "../../shared/Title";
import conect2026 from "../../../assets/videos/conect2026.mp4";
import ButtonPretty from "../../shared/ButtonPretty";

export default function PresentationVideo() {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

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
    if (!video) return;
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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.videoContainer} data-aos="zoom-in">
            <div className={styles.videoWrapper} id="tickets2" ref={wrapperRef}>
              <video
                ref={videoRef}
                src={conect2026}
                playsInline
                muted={muted}
                onClick={toggleSound}
              />

              <div className={styles.controlsRow}>
                <button
                  type="button"
                  className={styles.soundButton}
                  onClick={toggleSound}
                  aria-label={
                    muted ? "Ativar som do vídeo" : "Desativar som do vídeo"
                  }
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
                  aria-label={
                    isFullscreen ? "Sair da tela cheia" : "Ver em tela cheia"
                  }
                >
                  {isFullscreen ? <FaCompress /> : <FaExpand />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <ButtonPretty text=" EU QUERO ESTAR LÁ" link="#tickets" />
        </div>
      </div>
    </section>
  );
}
