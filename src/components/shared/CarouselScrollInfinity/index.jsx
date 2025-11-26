import styles from "./caroselScrollInfinit.module.css";

const CarouselScrollInfinit = ({ listSlides }) => {
  return (
    <section>
      <div className={styles.carousel}>
        <div className={styles.group}>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
        </div>
        <div arial-hidden="true" className={styles.group}>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
          <div className={styles.black}>
            <strong>BLACK</strong>
            <span>CONECT</span>
          </div>
        </div>
      </div>
      {/* <div className={styles.button}>
        <ButtonPrimary
          link="https://www.sympla.com.br/evento/conexao-ragazzi/2999636"
          target={true}
        >
          Comprar agora
        </ButtonPrimary>
      </div> */}
    </section>
  );
};

export default CarouselScrollInfinit;
