import styles from "./styles.module.css";
import cooljobIcon from "../../assets/icons/cooljob.svg";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.navSection}>
        <img src={cooljobIcon} alt="cooljob_icon" />
        <nav>
          <ul>
            <li>Поиск работы</li>
            <li>Поиск стартапов</li>
          </ul>
        </nav>
      </section>
      <section className={styles.authSection}>
        <a href="#">Регистрация</a>
        <a className={styles.login} href="#">
          Вход
        </a>
      </section>
    </header>
  );
}

export default Header;
