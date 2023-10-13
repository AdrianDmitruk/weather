import styles from "./coreTemp.module.scss";
import contentNight from "../../assets/icon/lun.png";

export const CoreTemp = () => {
  return (
    <div className={styles.temp}>
      <img className={styles.tempBg} src={contentNight} alt="contentNight" />
      <div className={styles.tempHeader}>
        <div className={styles.tempLeft}>
          <h2 className={styles.tempLeftTitle}>Porto Alegre, RS</h2>
          <p className={styles.tempLeftSubtitle}>
            Segunda-feira, 15 de maio de 2023
          </p>
        </div>
        <div className={styles.tempRight}>21:39</div>
      </div>

      <div className={styles.tempFooter}>
        <h3 className={styles.tempFooterCel}>28ºc</h3>
        <div className={styles.tempFooterWrap}>
          <h5 className={styles.tempWrapCel}>32ºc / 26ºc</h5>
          <div className={styles.tempWrapDot}></div>
          <p className={styles.tempWrapType}>Poucas nuvens</p>
        </div>
      </div>
    </div>
  );
};
