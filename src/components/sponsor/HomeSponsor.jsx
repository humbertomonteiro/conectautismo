import styles from "./sponsor.module.css";
import { useState } from "react";

const HomeSponsor = () => {
  const [about, setAbout] = useState(false);
  const [contacts, setContacts] = useState(false);

  return (
    <div className={styles.content}>
      <h1 className={styles.sectionTitle}>Manual do Patrocinador</h1>
      <article className={styles.foreground}>
        Apresentamos aqui todas as informações necessárias para o andamento do
        evento. Leia com calma e atenção!
      </article>

      <ul className={styles.list}>
        <li className={styles.item}>
          <h2
            onClick={() => setAbout(!about)}
            aria-expanded={about}
            aria-controls="about-section"
            className={styles.expandableTitle}
          >
            Sobre o Evento
          </h2>
          <ul
            id="about-section"
            className={`${styles.subList} ${
              about ? styles.subListOpen : styles.subListClosed
            }`}
          >
            <li>22 de Agosto de 2025 - Pré-festa</li>
            <li>23 e 24 de Agosto de 2025 - Congresso</li>
            <li>Gran Mareiro Hotel - Expo Eventos</li>
            <li>Rua Osvaldo Araujo, 100 - Praia do Futuro - Fortaleza/CE</li>
          </ul>
        </li>

        <li className={styles.item}>
          <h2
            onClick={() => setContacts(!contacts)}
            aria-expanded={contacts}
            aria-controls="contacts-section"
            className={styles.expandableTitle}
          >
            Contatos
          </h2>
          <ul
            id="contacts-section"
            className={`${styles.subList} ${
              contacts ? styles.subListOpen : styles.subListClosed
            }`}
          >
            <li>
              <h3>Comercial</h3>
              <p>(85) 99274-2323</p>
              <a href="mailto:comercial@congressoconect.com.br">
                comercial@congressoconect.com.br
              </a>
            </li>
            <li>
              <h3>Produtor</h3>
              <i>Rosemberg Pereira</i>
              <p>(85) 999918712</p>
              <a href="mailto:produtormeianoite2@gmail.com">
                produtormeianoite2@gmail.com
              </a>
            </li>
            <li>
              <h3>Agência Oficial - Cenomagia</h3>
              <p>(85) 98870-0990</p>
              <i>Tony Gabriel</i>
              <p>(85) 99604-5859</p>
              <a href="mailto:comercialcenomagia@gmail.com">
                comercialcenomagia@gmail.com
              </a>
            </li>
            <li>
              <h3>Montadora Oficial - Cenomagia</h3>
              <p>(85) 98870-0990</p>
              <a href="mailto:comercialcenomagia@gmail.com">
                comercialcenomagia@gmail.com
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HomeSponsor;
