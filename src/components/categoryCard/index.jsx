import styles from "./styles.module.css";

function CategoryCard({ title, icon }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;