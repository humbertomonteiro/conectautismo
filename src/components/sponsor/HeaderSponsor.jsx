import styles from "./sponsor.module.css";
import imgEvent from "../../assets/imgs/school-conect/img-event-logo.jpg";

const HeaderSponsor = () => {
  // Handle Enter key press for accessibility
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = sectionsData
      .map((section) => {
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
  return (
    <div className={styles.headerMainSponsor}>
      <div className={styles.headerImg}>
        <img src={imgEvent} alt="Imagem do evento" />
      </div>
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
  );
};

export default HeaderSponsor;
