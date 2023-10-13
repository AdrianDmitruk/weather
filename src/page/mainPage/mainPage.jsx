import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

import styles from "./mainPage.module.scss";
import { Search } from "../../components/search/search";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={"/"} className={styles.headerLogo}>
          <img src={logo} alt="Logo" />
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles.mainTextWrap}>
          <h1 className={styles.mainTitle}>
            Welcome to the{" "}
            <span className={styles.mainTitleSpan}>TypeWeather</span>
          </h1>
          <p className={styles.mainSubtitle}>
            Choose a location to see the weather forecast
          </p>
        </div>
        <div className={styles.mainInput}>
          <Search />
        </div>
      </main>
    </div>
  );
};
