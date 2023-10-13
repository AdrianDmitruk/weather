import styles from "./detailsToday.module.scss";

import temp from "../../assets/iconMini/temp.svg";
import cloud from "../../assets/iconMini/cloud.svg";
import wind from "../../assets/iconMini/wind.svg";
import water from "../../assets/iconMini/water.svg";
import sun from "../../assets/iconMini/sun.svg";

export const DetailsToday = () => {
  return (
    <div className={styles.details}>
      <h3 className={styles.detailsTitle}>Detalhes do clima hoje</h3>
      <div className={styles.detailsWrap}>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={temp} alt="temp" />
            <p className={styles.detailsCardName}>Sensação térmica</p>
          </div>
          <div className={styles.detailsCardRight}>26ºc</div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={cloud} alt="cloud" />
            <p className={styles.detailsCardName}>Probabilidade de chuva</p>
          </div>
          <div className={styles.detailsCardRight}>0%</div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={wind} alt="wind" />
            <p className={styles.detailsCardName}>Velocidade do vento</p>
          </div>
          <div className={styles.detailsCardRight}>8 km/h</div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={water} alt="wind" />
            <p className={styles.detailsCardName}>Umidade do ar</p>
          </div>
          <div className={styles.detailsCardRight}>40%</div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardLeft}>
            <img className={styles.detailsCardImg} src={sun} alt="sun" />
            <p className={styles.detailsCardName}>Índice UV</p>
          </div>
          <div className={styles.detailsCardRight}>5</div>
        </div>
      </div>
    </div>
  );
};
