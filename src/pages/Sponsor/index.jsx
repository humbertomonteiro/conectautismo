import { useState, useEffect } from "react";
import styles from "./sponsor.module.css";
import Schedule from "../../components/sponsor/Schedule";
import Documentation from "../../components/sponsor/Documentation";
import Identification from "../../components/sponsor/Identification";
import SpaceRules from "../../components/sponsor/SpaceRules";
import logo from "../../assets/imgs/logo/logo-png.png";
import HomeSponsor from "../../components/sponsor/HomeSponsor";
import Garments from "../../components/sponsor/Garments";
import ProhibitedEquipment from "../../components/sponsor/ProhibitedEquipment";
import ConstructionEmbargo from "../../components/sponsor/ConstructionEmbargo";
import Shipping from "../../components/sponsor/Shipping";
import Promotions from "../../components/sponsor/Promotions";
import Accreditation from "../../components/sponsor/Accreditation";
import Infractions from "../../components/sponsor/Infractions";
import ElectricalEnergy from "../../components/sponsor/ElectricalEnergy";
import Cleaning from "../../components/sponsor/Cleaning";
import Security from "../../components/sponsor/Security";
import FoodAndDrinks from "../../components/sponsor/FoodAndDrinks";
import Sound from "../../components/sponsor/Sound";
import imgEvent from "../../assets/imgs/school-conect/img-event-logo.jpg";

// Centralized data for search
const sectionsData = [
  {
    id: "homeSponsor",
    name: "Início",
    component: HomeSponsor,
    content: ["Sobre o evento", "Local", "Contatos"],
  },
  {
    id: "generalRules",
    name: "Regras Gerais",
    subItems: [
      {
        id: "shipping",
        name: "Envio de Mercadorias",
        component: <Shipping />,
        content: [
          "Envio de Mercadorias",
          "Sobre o Envio",
          "Regras para Emissão de Nota Fiscal",
          "Material para Stand e Pasta",
        ],
      },
      {
        id: "promotions",
        name: "Promoções",
        component: <Promotions />,
        content: [
          "Promoções",
          "Ações Promocionais",
          "Demonstração de Equipamentos",
          "Panfletagem",
          "Brindes",
          "Resoluções RDC nº 96/2008 e nº 23/2009 – ANVISA",
        ],
      },
      {
        id: "accreditation",
        name: "Credenciamento",
        component: <Accreditation />,
        content: ["Credenciamento", "Retirada de Credenciais"],
      },
      {
        id: "infractions",
        name: "Infrações",
        component: <Infractions />,
        content: ["Infrações, Atraso"],
      },
    ],
  },
  {
    id: "usefulInformation",
    name: "Informações Úteis",
    subItems: [
      {
        id: "electricalEnergy",
        name: "Energia Elétrica",
        component: <ElectricalEnergy />,
        content: ["Energia Elétrica"],
      },
      {
        id: "cleaning",
        name: "Limpeza",
        component: <Cleaning />,
        content: ["Limpeza"],
      },
      {
        id: "security",
        name: "Segurança",
        component: <Security />,
        content: ["Segurança"],
      },
      {
        id: "foodAndDrinks",
        name: "Alimentos e Bebidas",
        component: <FoodAndDrinks />,
        content: ["Alimentos e Bebidas"],
      },
      {
        id: "sound",
        name: "Som",
        component: <Sound />,
        content: ["Som", "Música ambiente"],
      },
    ],
  },
  {
    id: "schedule",
    name: "Cronograma",
    component: <Schedule />,
    content: [
      "Cronograma",
      "Descarga de Materiais e Montagem",
      "Desmontagem",
      "Avisos e Infrações",
    ],
  },
  {
    id: "identification",
    name: "Identificação",
    component: <Identification />,
    content: ["Identificação"],
  },
  {
    id: "documentation",
    name: "Documentação Obrigatória",
    component: ({ setActiveSection }) => (
      <Documentation setActiveSection={setActiveSection} />
    ),
    content: ["Documentação Obrigatória"],
  },
  {
    id: "spaceRules",
    name: "Regras do Espaço",
    component: <SpaceRules />,
    content: ["Regras do Espaço", "Regras Gerais", "Sanitários"],
  },
  {
    id: "garments",
    name: "EPIs e Vestimentas",
    component: <Garments />,
    content: ["EPIs e Vestimentas"],
  },
  {
    id: "prohibitedEquipment",
    name: "Equipamentos Proibidos",
    component: <ProhibitedEquipment />,
    content: ["Equipamentos Proibidos"],
  },
  {
    id: "constructionEmbargo",
    name: "Embargo da Construção",
    component: <ConstructionEmbargo />,
    content: ["Embargo da Construção"],
  },
];

const Sponsor = () => {
  const [activeSection, setActiveSection] = useState("homeSponsor");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSubMenu = (sectionId) => {
    setOpenSubMenus((prev) => {
      const newState = {};
      // Fechar todos os submenus
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      // Abrir apenas o submenu clicado
      newState[sectionId] = !prev[sectionId];
      return newState;
    });
  };

  // Handle search when button is clicked
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = sectionsData
      .map((section) => {
        if (section.subItems) {
          const subResults = section.subItems
            .map((subItem) => {
              const nameMatch = subItem.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
              const contentMatches = subItem.content.filter((item) =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
              );
              if (nameMatch || contentMatches.length > 0) {
                return {
                  id: subItem.id,
                  name: subItem.name,
                  matches: nameMatch
                    ? [subItem.name, ...contentMatches]
                    : contentMatches,
                };
              }
              return null;
            })
            .filter((result) => result !== null);
          return subResults.length > 0
            ? { id: section.id, name: section.name, subResults }
            : null;
        }
        const nameMatch = section.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const contentMatches = section.content.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (nameMatch || contentMatches.length > 0) {
          return {
            id: section.id,
            name: section.name,
            matches: nameMatch
              ? [section.name, ...contentMatches]
              : contentMatches,
          };
        }
        return null;
      })
      .filter((result) => result !== null);

    setSearchResults(results);
  };

  // Handle Enter key press for accessibility
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Highlight search term in text
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, `<span class="${styles.highlight}">$1</span>`);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className={styles.container}>
      {/* Mobile Hamburger Menu */}
      <div className={styles.mobileHeader}>
        <img
          onClick={() => setActiveSection("HomeSponsor")}
          src={logo}
          alt="Logo Conect"
        />
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${
          isMenuOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div className={styles.sidebarContent}>
          <img onClick={toggleMenu} src={logo} alt="Logo Conect" />
          <h1 onClick={toggleMenu} className={styles.sidebarTitle}>
            Manual do patrocinador
          </h1>
          <ul>
            {sectionsData.map((section) =>
              section.subItems ? (
                <li
                  key={section.id}
                  className={`${styles.sidebarItem} ${
                    section.subItems.some(
                      (subItem) => subItem.id === activeSection
                    )
                      ? styles.sidebarItemWithSubItems
                      : ""
                  }`}
                >
                  <h3
                    onClick={() => toggleSubMenu(section.id)}
                    className={styles.expandableTitle}
                    aria-expanded={openSubMenus[section.id] || false}
                    aria-controls={`${section.id}-submenu`}
                  >
                    {section.name}
                  </h3>
                  <ul
                    id={`${section.id}-submenu`}
                    className={`${styles.subMenu} ${
                      openSubMenus[section.id] ? styles.subMenuOpen : ""
                    }`}
                  >
                    {section.subItems.map((subItem) => (
                      <li
                        key={subItem.id}
                        className={`${styles.subMenuItem} ${
                          activeSection === subItem.id ? styles.active : ""
                        }`}
                        onClick={() => {
                          setActiveSection(subItem.id);
                          setIsMenuOpen(false);
                          setSearchTerm("");
                          setSearchResults([]);
                        }}
                      >
                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={section.id}
                  className={`${styles.sidebarItem} ${
                    activeSection === section.id ? styles.active : ""
                  }`}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false);
                    setSearchTerm("");
                    setSearchResults([]);
                  }}
                >
                  {section.name}
                </li>
              )
            )}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Search Bar */}
        <div className={styles.headerMainSponsor}>
          {/* <div className={styles.headerImg}>
            <img src={imgEvent} alt="Imagem do evento" />
          </div> */}

          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar informações (ex: contatos, horários)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className={styles.searchButton}
              onClick={handleSearch}
              aria-label="Buscar"
            >
              <svg
                className={styles.searchIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
        {/* Search Results or Section Content */}
        <div className={styles.contentSection}>
          {searchResults.length > 0 ? (
            <div className={styles.searchResults}>
              <h2 className={styles.sectionTitle}>Resultados da Busca</h2>
              {searchResults.map((result) => (
                <div key={result.id} className={styles.resultItem}>
                  <h3
                    className={styles.resultTitle}
                    onClick={() => {
                      setActiveSection(result.id);
                      setSearchTerm("");
                      setSearchResults([]);
                    }}
                  >
                    {result.name}
                  </h3>
                  {result.subResults
                    ? result.subResults.map((subResult) => (
                        <div key={subResult.id}>
                          <h4
                            className={styles.resultTitle}
                            onClick={() => {
                              setActiveSection(subResult.id);
                              setSearchTerm("");
                              setSearchResults([]);
                            }}
                          >
                            {subResult.name}
                          </h4>
                          {subResult.matches[0] && (
                            <p
                              className={styles.resultText}
                              dangerouslySetInnerHTML={{
                                __html: highlightText(
                                  subResult.matches[0].slice(0, 100) +
                                    (subResult.matches[0].length > 100
                                      ? "..."
                                      : "")
                                ),
                              }}
                            />
                          )}
                        </div>
                      ))
                    : result.matches[0] && (
                        <p
                          className={styles.resultText}
                          dangerouslySetInnerHTML={{
                            __html: highlightText(
                              result.matches[0].slice(0, 100) +
                                (result.matches[0].length > 100 ? "..." : "")
                            ),
                          }}
                        />
                      )}
                </div>
              ))}
            </div>
          ) : searchTerm && searchResults.length === 0 ? (
            <div className={styles.noResults}>
              <p>Nenhum resultado encontrado para "{searchTerm}".</p>
            </div>
          ) : (
            (() => {
              const section =
                sectionsData.find((s) => s.id === activeSection) ||
                sectionsData.find((s) =>
                  s.subItems?.find((sub) => sub.id === activeSection)
                );
              if (section?.subItems) {
                const subItem = section.subItems.find(
                  (sub) => sub.id === activeSection
                );
                return subItem ? (
                  subItem.component
                ) : (
                  <HomeSponsor
                    sections={sectionsData.filter(
                      (s) => s.id !== "homeSponsor"
                    )}
                    setActiveSection={setActiveSection}
                    activeSection={activeSection}
                  />
                );
              }
              if (section?.id === "homeSponsor") {
                return (
                  <HomeSponsor
                    sections={sectionsData.filter(
                      (s) => s.id !== "homeSponsor"
                    )}
                    setActiveSection={setActiveSection}
                    activeSection={activeSection}
                  />
                );
              }
              return section ? (
                typeof section.component === "function" ? (
                  <section.component setActiveSection={setActiveSection} />
                ) : (
                  section.component
                )
              ) : (
                <HomeSponsor
                  sections={sectionsData.filter((s) => s.id !== "homeSponsor")}
                  setActiveSection={setActiveSection}
                  activeSection={activeSection}
                />
              );
            })()
          )}
        </div>
      </main>
    </div>
  );
};

export default Sponsor;
