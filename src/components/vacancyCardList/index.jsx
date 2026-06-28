import styles from "./styles.module.css";
import VacancyCard from "../vacancyCard";

import sonyLogo from "../../assets/icons/sony.svg";
import facebookLogo from "../../assets/icons/facebook.svg";
import cocaColaLogo from "../../assets/icons/coca-cola.svg";

const vacancies = [
  {
    id: 1,
    category: "Финансы",
    color: "#4F7CFF",
    title: "Менеджер по управлению финансами в крупной компании",
    city: "Осака, Япония",
    company: "Sony",
    logo: sonyLogo,
    date: "3 дня назад",
  },
  {
    id: 2,
    category: "Продажи",
    color: "#F044E6",
    title: "Специалист по продажам",
    city: "Коясан, Япония",
    company: "Facebook",
    logo: facebookLogo,
    date: "7 дней назад",
  },
  {
    id: 3,
    category: "Служба поддержки",
    color: "#44D04A",
    title: "Оператор колл центра",
    city: "Томаму, Япония",
    company: "CocaCola",
    logo: cocaColaLogo,
    date: "1 день назад",
  },
  {
    id: 4,
    category: "Мультимедиа",
    color: "#FF8A4C",
    title: "Системный администратор",
    city: "Токио, Япония",
    company: "Sony",
    logo: sonyLogo,
    date: "3 дня назад",
  },
  {
    id: 5,
    category: "Дизайн",
    color: "#FF3F3F",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    city: "Йокогама, Япония",
    company: "Facebook",
    logo: facebookLogo,
    date: "7 дней назад",
  },
  {
    id: 6,
    category: "Грузоперевозки",
    color: "#3A3A3A",
    title: "Водитель на дальние дистанции",
    city: "Кобе, Япония",
    company: "CocaCola",
    logo: cocaColaLogo,
    date: "1 день назад",
  },
];

function VacancyCardList() {
  return (
    <section className={styles.vacancies}>
      <h2>Новые вакансии</h2>

      <p>Найди работу своей мечты прямо сейчас</p>

      <div className={styles.list}>
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} {...vacancy} />
        ))}
      </div>

      <button className={styles.button}>
        Все вакансии
      </button>
    </section>
  );
}

export default VacancyCardList;