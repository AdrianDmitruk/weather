import styles from "./forecast.module.scss";
import сlouds from "../../assets/iconFor/сlouds.png";

export const Forecast = () => {
  return (
    <div className={styles.details}>
      <h3 className={styles.detailsTitle}>Forecast for 5 days</h3>
      <div className={styles.detailsWrap}>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardTitle}>Tomorrow</div>
          <img className={styles.detailsCardImg} src={сlouds} alt="сlouds" />
          <div className={styles.detailsCardSubtitle}>Temporal</div>
          <div className={styles.detailsCardWrap}>
            <div className={styles.detailsCardTempLeft}>32ºc</div>
            <div className={styles.detailsCardTempRight}>26ºc</div>
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardTitle}>Tomorrow</div>
          <img className={styles.detailsCardImg} src={сlouds} alt="сlouds" />
          <div className={styles.detailsCardSubtitle}>Temporal</div>
          <div className={styles.detailsCardWrap}>
            <div className={styles.detailsCardTempLeft}>32ºc</div>
            <div className={styles.detailsCardTempRight}>26ºc</div>
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardTitle}>Tomorrow</div>
          <img className={styles.detailsCardImg} src={сlouds} alt="сlouds" />
          <div className={styles.detailsCardSubtitle}>Temporal</div>
          <div className={styles.detailsCardWrap}>
            <div className={styles.detailsCardTempLeft}>32ºc</div>
            <div className={styles.detailsCardTempRight}>26ºc</div>
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardTitle}>Tomorrow</div>
          <img className={styles.detailsCardImg} src={сlouds} alt="сlouds" />
          <div className={styles.detailsCardSubtitle}>Temporal</div>
          <div className={styles.detailsCardWrap}>
            <div className={styles.detailsCardTempLeft}>32ºc</div>
            <div className={styles.detailsCardTempRight}>26ºc</div>
          </div>
        </div>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardTitle}>Tomorrow</div>
          <img className={styles.detailsCardImg} src={сlouds} alt="сlouds" />
          <div className={styles.detailsCardSubtitle}>Temporal</div>
          <div className={styles.detailsCardWrap}>
            <div className={styles.detailsCardTempLeft}>32ºc</div>
            <div className={styles.detailsCardTempRight}>26ºc</div>
          </div>
        </div>
      </div>
    </div>
  );
};
