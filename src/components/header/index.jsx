import styles from "./styles.module.css";
import cooljobIcon from "../../assets/icons/cooljob.svg";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.navSection}>
        <a href="#">
          <img src={cooljobIcon} alt="cooljob_icon" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Поиск работы</a>
            </li>
            <li>
              <a href="#">Поиск стартапов</a>
            </li>
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
