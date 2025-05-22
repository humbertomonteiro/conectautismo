import { useState } from "react";
import styles from "./sponsor.module.css";
import NavigationCards from "./NavigationCards";

const HomeSponsor = ({ sections, setActiveSection, activeSection }) => {
  const [openSections, setOpenSections] = useState({
    about: false,
    contacts: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.sectionTitle}>Manual do Patrocinador</h1>

      <h2 className={styles.foreground}>
        Apresentamos aqui todas as informações necessárias para o andamento do
        evento, leia com calma e atenção!{" "}
      </h2>

      {/* Seção Sobre o Evento */}
      <div className={styles.expandableSection}>
        <h2
          className={styles.expandableTitle}
          onClick={() => toggleSection("about")}
          role="button"
          tabIndex={0}
          aria-expanded={openSections.about}
          aria-controls="about-section"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleSection("about");
            }
          }}
        >
          Sobre o Evento
          {/* <span>{openSections.about ? "−" : "+"}</span> */}
        </h2>
        <div
          id="about-section"
          className={`${styles.expandableContent} ${
            openSections.about ? styles.open : ""
          }`}
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              22 de Agosto de 2025 - Pré-festa
            </li>
            <li className={styles.listItem}>
              23 e 24 de Agosto de 2025 - Congresso
            </li>
            <li className={styles.listItem}>
              Gran Mareiro Hotel - Expo Eventos
            </li>
            <li className={styles.listItem}>
              Rua Osvaldo Araujo, 100 - Praia do Futuro - Fortaleza/CE
            </li>
          </ul>
        </div>
      </div>

      {/* Seção Contatos */}
      <div className={styles.expandableSection}>
        <h2
          className={styles.expandableTitle}
          onClick={() => toggleSection("contacts")}
          role="button"
          tabIndex={0}
          aria-expanded={openSections.contacts}
          aria-controls="contacts-section"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleSection("contacts");
            }
          }}
        >
          Contatos
          {/* <span>{openSections.contacts ? "−" : "+"}</span> */}
        </h2>
        <div
          id="contacts-section"
          className={`${styles.expandableContent} ${
            openSections.contacts ? styles.open : ""
          }`}
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>Comercial: (85) 99274-2323</li>
            <li className={styles.listItem}>
              comercial@congressoconect.com.br
            </li>
            <li className={styles.listItem}>
              Produtor: Rosemberg Pereira, (85) 999918712
            </li>
            <li className={styles.listItem}>produtormeianoite2@gmail.com</li>
            <li className={styles.listItem}>
              Agência Oficial - Cenomagia: (85) 98870-0990
            </li>
            <li className={styles.listItem}>Tony Gabriel: (85) 99604-5859</li>
            <li className={styles.listItem}>comercialcenomagia@gmail.com</li>
            <li className={styles.listItem}>
              Montadora Oficial - Cenomagia: (85) 98870-0990
            </li>
          </ul>
        </div>
      </div>

      {/* Cards de Navegação */}
      <h2 className={styles.sectionTitle}>Acesse Outras Seções</h2>
      <NavigationCards
        sections={sections}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
    </div>
  );
};

export default HomeSponsor;
