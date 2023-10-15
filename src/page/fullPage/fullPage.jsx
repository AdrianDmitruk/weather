import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/LogoMini.svg";
import styles from "./fullPage.module.scss";
import { Search } from "../../components/search/search";
import { CoreTemp } from "../../components/coreTemp/coreTemp";
import { DetailsToday } from "../../components/detailsToday/detailsToday";
import { Forecast } from "../../components/forecast/forecast";
import { selectWeatherData } from "../../redux/weather/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../../redux/weather/asyncActions";
import { setSearchValue } from "../../redux/weather/slice";

export const FullPage = () => {
  const { searchValue } = useSelector(selectWeatherData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { name } = useParams();

  useEffect(() => {
    if (searchValue === "") {
      dispatch(fetchWeather(name));
    } else {
      dispatch(fetchWeather(searchValue));

      navigate(`/city/${searchValue}`);
    }
  }, [name, searchValue]);

  const handleLogoClick = () => {
    dispatch(fetchWeather(""));
    dispatch(setSearchValue(""));
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.mainLeftHeader}>
            <Link
              to={"/"}
              onClick={handleLogoClick}
              className={styles.mainHeaderLogo}
            >
              <img src={logo} alt="logo" />
            </Link>
            <Search />
          </div>
          <CoreTemp />
        </div>
        <div className={styles.mainRight}>
          <DetailsToday />
          <Forecast />
        </div>
      </main>
    </div>
  );
};
