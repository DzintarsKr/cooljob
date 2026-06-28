import styles from "./styles.module.css";

import cooljobLogo from "../../assets/icons/cooljob_footer.svg";

import linkedinIcon from "../../assets/icons/linkedin.svg";
import googleIcon from "../../assets/icons/google.svg";
import twitterIcon from "../../assets/icons/twitter_footer.svg";
import facebookIcon from "../../assets/icons/facebook_footer.svg";

const cities = [
  "Осака",
  "Коясан",
  "Токио",
  "Хаконэ",
  "Наэба",
  "Томаму",
  "Йокогама",
  "Нагоя",
  "Саппоро",
  "Кобе",
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3>Популярные города</h3>

        <ul className={styles.cityList}>
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>

        <div className={styles.line}></div>

        <div className={styles.bottom}>
          <img
            className={styles.logo}
            src={cooljobLogo}
            alt="Cooljob"
          />

          <div className={styles.socials}>
            <a href="#">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>

            <a href="#">
              <img src={googleIcon} alt="Google" />
            </a>

            <a href="#">
              <img src={twitterIcon} alt="Twitter" />
            </a>

            <a href="#">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;