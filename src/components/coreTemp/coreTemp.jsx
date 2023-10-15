import styles from "./coreTemp.module.scss";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../../redux/weather/selectors";
import { useEffect, useState } from "react";

import rain from "../../assets/icon/rain.png";
import cloudy from "../../assets/icon/cloudy.png";
import clear from "../../assets/icon/clear.png";

export const CoreTemp = () => {
  const { items } = useSelector(selectWeatherData);

  const timestamp = items?.dt;

  const date = new Date(timestamp * 1000);

  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    const intervalId = setInterval(updateDate, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className={styles.temp}>
      {items?.weather?.[0]?.main === "Rain" && (
        <img className={styles.tempBg} src={rain} alt="rain" />
      )}
      {items?.weather?.[0]?.main === "Clouds" && (
        <img className={styles.tempBg} src={cloudy} alt="cloudy" />
      )}
      {items?.weather?.[0]?.main === "Clear" && (
        <img className={styles.tempBg} src={clear} alt="clear" />
      )}
      <div className={styles.tempHeader}>
        <div className={styles.tempLeft}>
          <h2 className={styles.tempLeftTitle}>
            {items?.name}, {items?.sys?.country}
          </h2>
          <p className={styles.tempLeftSubtitle}>
            {dayOfWeek}, {day} {month} {year}
          </p>
        </div>
        <div className={styles.tempRight}>
          {formattedHours}:{formattedMinutes}
        </div>
      </div>

      <div className={styles.tempFooter}>
        <h3 className={styles.tempFooterCel}>
          {Math.ceil(items?.main?.temp)}ºc
        </h3>
        <div className={styles.tempFooterWrap}>
          <h5 className={styles.tempWrapCel}>
            {Math.ceil(items?.main?.temp_max)}ºc /{" "}
            {Math.ceil(items?.main?.temp_min)}ºc
          </h5>
          <div className={styles.tempWrapDot}></div>
          <p className={styles.tempWrapType}>
            {items?.weather?.map((item) => item.description)}
          </p>
        </div>
      </div>
    </div>
  );
};
