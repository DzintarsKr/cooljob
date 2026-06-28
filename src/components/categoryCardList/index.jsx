import styles from "./styles.module.css";
import CategoryCard from "../categoryCard";

import financeIcon from "../../assets/icons/finance.svg";
import truckIcon from "../../assets/icons/truck.svg";
import designIcon from "../../assets/icons/design.svg";
import restaurantIcon from "../../assets/icons/restaurant.svg";
import medicineIcon from "../../assets/icons/medicine.svg";
import multimediaIcon from "../../assets/icons/multimedia.svg";
import supportIcon from "../../assets/icons/support.svg";
import managementIcon from "../../assets/icons/management.svg";
import salesIcon from "../../assets/icons/sales.svg";

const categories = [
  { id: 1, title: "Финансы", icon: financeIcon },
  { id: 2, title: "Грузоперевозки", icon: truckIcon },
  { id: 3, title: "Дизайн", icon: designIcon },
  { id: 4, title: "Ресторанный бизнес", icon: restaurantIcon },
  { id: 5, title: "Медицина", icon: medicineIcon },
  { id: 6, title: "Мультимедиа", icon: multimediaIcon },
  { id: 7, title: "Служба поддержки", icon: supportIcon },
  { id: 8, title: "Менеджмент", icon: managementIcon },
  { id: 9, title: "Продажи", icon: salesIcon },
];

function CategoryCardList() {
  return (
    <section className={styles.categories}>
      <h2>
        Работа
        <br />
        по категориям
      </h2>

      <div className={styles.list}>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}

        <div className={styles.moreCard}>
          <span className={styles.arrow}>→</span>
          <p>
            Больше
            <br />
            категорий
          </p>
        </div>
      </div>
    </section>
  );
}

export default CategoryCardList;