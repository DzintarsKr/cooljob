import styles from "./styles.module.css";
import Header from "../../components/header";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header />
    </div>
  );
}

export default Home;
