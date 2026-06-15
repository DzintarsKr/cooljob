import styles from "./styles.module.css";
import searchIcon from "../../assets/icons/search.svg";

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <div className={styles.inputGroup}>
                <span className={styles.icon}>{searchIcon}</span>
                <input type="text" placeholder="Должность или компания" />
            </div>
            <div>
                <span></span>
                <input type="text" placeholder="Город, Страна"/>
            </div>
            <button>Поиск</button>
        </div>
    );
    
}

export default SearchBar;