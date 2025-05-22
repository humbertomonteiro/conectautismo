import { useState } from "react";
import styles from "./sponsor.module.css";
import {
  FaCalendarAlt,
  FaIdBadge,
  FaFileAlt,
  FaMap,
  FaHardHat,
  FaBan,
  FaStopCircle,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";

const iconMap = {
  schedule: <FaCalendarAlt className={styles.cardIcon} />,
  identification: <FaIdBadge className={styles.cardIcon} />,
  documentation: <FaFileAlt className={styles.cardIcon} />,
  spaceRules: <FaMap className={styles.cardIcon} />,
  garments: <FaHardHat className={styles.cardIcon} />,
  prohibitedEquipment: <FaBan className={styles.cardIcon} />,
  constructionEmbargo: <FaStopCircle className={styles.cardIcon} />,
  generalRules: <FaBook className={styles.cardIcon} />,
  usefulInformation: <FaInfoCircle className={styles.cardIcon} />,
};

const NavigationCards = ({ sections, setActiveSection, activeSection }) => {
  const [openSubItems, setOpenSubItems] = useState({});

  const toggleSubItems = (sectionId) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className={styles.cardsContainer}>
      {sections.map((section) => (
        <div key={section.id}>
          <div
            className={`${styles.card} ${
              activeSection === section.id ||
              (section.subItems &&
                section.subItems.some((sub) => sub.id === activeSection))
                ? styles.active
                : ""
            }`}
            onClick={() => {
              if (section.subItems) {
                toggleSubItems(section.id);
              } else {
                setActiveSection(section.id);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={
              section.subItems
                ? `Expandir ${section.name}`
                : `Navegar para ${section.name}`
            }
            aria-expanded={
              section.subItems ? openSubItems[section.id] || false : undefined
            }
            aria-controls={
              section.subItems ? `${section.id}-subitems` : undefined
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                if (section.subItems) {
                  toggleSubItems(section.id);
                } else {
                  setActiveSection(section.id);
                }
              }
            }}
          >
            {iconMap[section.id] || <FaFileAlt className={styles.cardIcon} />}
            <h3 className={styles.cardTitle}>{section.name}</h3>
            {section.subItems && (
              <span>{openSubItems[section.id] ? "−" : "+"}</span>
            )}
          </div>
          {section.subItems && (
            <ul
              id={`${section.id}-subitems`}
              className={`${styles.cardSubItems} ${
                openSubItems[section.id] ? styles.cardSubItemsOpen : ""
              }`}
            >
              {section.subItems.map((subItem) => (
                <li
                  key={subItem.id}
                  className={`${styles.cardSubItem} ${
                    activeSection === subItem.id ? styles.active : ""
                  }`}
                  onClick={() => setActiveSection(subItem.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Navegar para ${subItem.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveSection(subItem.id);
                    }
                  }}
                >
                  {subItem.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavigationCards;
