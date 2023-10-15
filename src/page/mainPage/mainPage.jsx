import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";

import styles from "./mainPage.module.scss";
import { Search } from "../../components/search/search";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/weather/asyncActions";
import { selectWeatherData } from "../../redux/weather/selectors";

export const MainPage = () => {
  const { status, searchValue } = useSelector(selectWeatherData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchWeather(searchValue));
  }, [searchValue]);

  useEffect(() => {
    if (status === "seccess") {
      navigate(`/city/${searchValue}`);
    }
  }, [status]);

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
          {status === "error" && searchValue !== "" && (
            <p className={styles.mainError}>City not found</p>
          )}
        </div>
      </main>
    </div>
  );
};
