import styles from "./styles.module.css";
import SearchBar from "../searchBar";
import CategoryCardList from "../categoryCardList";
import VacancyCardList from "../vacancyCardList";
import disneyIcon from "../../assets/icons/disney_main.svg";
import facebookIcon from "../../assets/icons/facebook_main.svg";
import microsoftIcon from "../../assets/icons/microsoft_main.svg";
import sonyIcon from "../../assets/icons/sony_main.svg";
import cocaColaIcon from "../../assets/icons/cocacola_main.svg";

function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Один клик
            <br />
            и работа в кармане
          </h1>

          <SearchBar />
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      <section className={styles.partners}>
        <span>Помогаем найти работу:</span>

        <div className={styles.companyList}>
          <img src={disneyIcon} alt="Disney" />
          <img src={facebookIcon} alt="Facebook" />
          <img src={microsoftIcon} alt="Microsoft" />
          <img src={sonyIcon} alt="Sony" />
          <img src={cocaColaIcon} alt="Coca-Cola" />
        </div>
      </section>

      <CategoryCardList />

      <VacancyCardList />
    </main>
  );
}

export default Main;