import styles from "./styles.module.css";
import searchIcon from "../../assets/icons/search.svg";
import locationIcon from "../../assets/icons/location.svg";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputGroup}>
        <img
          className={styles.icon}
          src={searchIcon}
          alt="Search"
        />

        <input
          type="text"
          placeholder="Должность или компания"
        />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.inputGroup}>
        <img
          className={styles.icon}
          src={locationIcon}
          alt="Location"
        />

        <input
          type="text"
          placeholder="Город, Страна"
        />
      </div>

      <button className={styles.button}>
        Поиск
      </button>
    </div>
  );
}

export default SearchBar;