import styles from './styles.module.css';
import SearchBar from "../searchBar";

function Main() {
    return (
        <section>
            <div>
                <h1>Один клик<br />и работа в кармане</h1>
                <SearchBar />
                <div>
                    <span>Помогаем найти работу:</span>
                    <div>
                        <span>Disney</span>
                        <span>facebook</span>
                        <span>Microsoft</span>
                        <span>SONY</span>
                        <span>Coca-Cola</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;