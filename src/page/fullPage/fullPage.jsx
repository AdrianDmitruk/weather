import { Link } from "react-router-dom";
import logo from "../../assets/LogoMini.svg";
import styles from "./fullPage.module.scss";
import { Search } from "../../components/search/search";
import { CoreTemp } from "../../components/coreTemp/coreTemp";

export const FullPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.mainLeftHeader}>
            <Link to={"/"} className={styles.mainHeaderLogo}>
              <img src={logo} alt="logo" />
            </Link>
            <Search />
          </div>
          <CoreTemp />
        </div>
        <div className={styles.mainRight}>asdasd</div>
      </main>
    </div>
  );
};
