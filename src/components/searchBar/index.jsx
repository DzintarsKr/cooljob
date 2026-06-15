import styles from "./styles.module.css";

function SearchBar() {
    return (
        <div>
            <div>
                <span></span>
                <input type="text" placeholder="Должность или компания" />
            </div>
            <div>
                <span></span>
                <input type="text" placeholder="Город, Страна"/>
            </div>
            <button>Поиск</button>
        </div>
    )
    
}

export default SearchBar;