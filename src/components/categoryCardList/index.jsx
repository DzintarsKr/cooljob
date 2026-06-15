import styles from "./styles.module.css";

const categoryCardList = [
  {
    id: Math.random(),
    title: "Финансы",
    //icon: // icon,
  },
  {
    id: Math.random(),
    title: "Грузоперевозки",
    // icon: // icon
  },
  {
    id: Math.random(),
    title: "Дизайн",
    // icon: // icon
  },
  {
    id: Math.random(),
    title: "Ресторанный бизнес",
    // icon: // icon
  },
  {
    id: Math.random(),
    title: "Медицина",
    // icon: // icon
  },
  {
    id: Math.random(),
    title: "Мультимедиа",
    // icon: // icon
  },
  {
    id: Math.random(),
    title: "Служба поддержки",
    // icon: // icon
  },
  {
    id: Math.random(),
    title: "Менеджмент",
    // icon: // icon
  },
  {
    id: Math.random(),
    title: "Продажи",
    // icon: // icon
  },
];

function CategoryCardList() {
  return (
    <div>
      <h2>Работа по категориям</h2>
      <ul>
        {categoryCardList.map((card) => {
          return (
            <li key={card.id}>
              <img src="" alt="icon" />
              <h4>{card.title}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryCardList;
