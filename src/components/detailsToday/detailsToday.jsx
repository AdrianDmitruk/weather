import styles from "./detailsToday.module.scss";

import temp from "../../assets/iconMini/temp.svg";
import cloud from "../../assets/iconMini/cloud.svg";
import wind from "../../assets/iconMini/wind.svg";
import water from "../../assets/iconMini/water.svg";
import sun from "../../assets/iconMini/sun.svg";
import { selectWeatherData } from "../../redux/weather/selectors";
import { useSelector } from "react-redux";

export const DetailsToday = () => {
  const { items } = useSelector(selectWeatherData);

  return (
    <div className={styles.details}>
      <h3 className={styles.detailsTitle}>Weather details today</h3>
      <div className={styles.detailsWrap}>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={temp} alt="temp" />
            <p className={styles.detailsCardName}>Thermal sensation</p>
          </div>
          <div className={styles.detailsCardRight}>
            {Math.ceil(items?.main?.feels_like)}ºc
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={cloud} alt="cloud" />
            <p className={styles.detailsCardName}>Probability of rain</p>
          </div>
          <div className={styles.detailsCardRight}>0%</div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={wind} alt="wind" />
            <p className={styles.detailsCardName}>Wind speed</p>
          </div>
          <div className={styles.detailsCardRight}>
            {Math.ceil(items?.wind?.speed)} m/s
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={water} alt="wind" />
            <p className={styles.detailsCardName}>Air humidity</p>
          </div>
          <div className={styles.detailsCardRight}>
            {items?.main?.humidity}%
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={sun} alt="sun" />
            <p className={styles.detailsCardName}>Atmospheric pressure</p>
          </div>
          <div className={styles.detailsCardRight}>
            {items?.main?.grnd_level}
          </div>
        </div>
      </div>
    </div>
  );
};
