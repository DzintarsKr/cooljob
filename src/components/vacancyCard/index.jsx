import styles from "./styles.module.css";
import locationIcon from "../../assets/icons/location.svg";

function VacancyCard({
  category,
  color,
  title,
  city,
  logo,
  company,
  date,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.category}>
        <span
          className={styles.circle}
          style={{ backgroundColor: color }}
        ></span>

        <span>{category}</span>
      </div>

      <h3>{title}</h3>

      <div className={styles.location}>
        <img src={locationIcon} alt="Location" />
        <span>{city}</span>
      </div>

      <div className={styles.footer}>
        <img
          className={styles.logo}
          src={logo}
          alt={company}
        />

        <span className={styles.company}>
          {company}, {date}
        </span>
      </div>
    </div>
  );
}

export default VacancyCard;