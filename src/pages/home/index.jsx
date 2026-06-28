import styles from "./styles.module.css";
import Header from "../../components/header";
import Main from "../../components/main";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
