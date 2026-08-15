import { useState } from "react";
import styles from "./sponsor.module.css";
import NavigationCards from "./NavigationCards";

import { FaArrowRight } from "react-icons/fa";

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
      <h1 className={styles.sectionTitle}>Manual do Epoxitor</h1>

      <h2 className={styles.foreground}>
        Prezado expositor e patrocinador, Bem vindo ao maior congresso Norte e
        Nordeste do Neurodesenvolvimento. A vossa empresa é peça fundamental
        nesta causa. Este espaço está reservado para si, pedimos que leia
        atentamente todas as informações.
      </h2>

      <div className={styles.term}>
        <h2>TERMO DE RESPONSABILIDADE (OBRIGATÓRIO)</h2>
        <p>
          O termo de responsabilidade deverá ser preenchido e assinado pelo
          expositor e patrocinadores (não expositor).
        </p>
        <p>
          Deverá ser enviado, via e-mail, até o dia 14/08/2026. Email :{" "}
          <a
            className={styles.linkButton}
            href="mailto:comercial@congressoconect.com.br"
            target="_blank"
          >
            comercial@congressoconect.com.br
          </a>
        </p>
        <div className={styles.downloadButtonContainer}>
          <a
            className={styles.downloadButton}
            href="https://docs.google.com/document/d/1Rpz9pxMUrV-hMDT-hg9_W-Q_SobPhsGW/mobilebasic"
            target="_blank"
          >
            Termo de responsabilidade <FaArrowRight />
          </a>
        </div>
      </div>

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
        </h2>
        <div
          id="about-section"
          className={`${styles.expandableContent} ${
            openSections.about ? styles.open : ""
          }`}
        >
          <ul className={styles.list}>
            <li className={styles.listItem}>
              21, 22 e 23 de Agosto de 2026 — Congresso
            </li>
            <li className={styles.listItem}>
              21 de Agosto de 2026 — Pré-festa
            </li>
            <li className={styles.listItem}>Centro de Eventos do Ceará</li>
            <li className={styles.listItem}>
              Avenida Washington Soares, 999 — Édson Queiroz, Fortaleza/ Ce
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
              Agência Oficial - Cenomagia: (85) 98870-0990
            </li>
            <li className={styles.listItem}>Tony Gabriel: (85) 99604-5859</li>
            <li className={styles.listItem}>comercialcenomagia@gmail.com</li>
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
