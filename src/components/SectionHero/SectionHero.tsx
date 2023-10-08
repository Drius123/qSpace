import star from "../../assets/Star 8.svg";
import btn from "../../assets/button.svg";
import { EnumText } from "../../types";
import styles from "./SectionHero.module.scss";

export default function SectionHero() {
  return (
    <section className={styles["section-hero"]}>
      <div className="section-hero__container">
        <div className={styles.content}>
          <div className={styles["label-wrapper"]}>
            <h1 className={styles.logo}>{EnumText.TEXT_BANK}</h1>
            <p className={styles.items}>{EnumText.TEXT_ITEMS}</p>
          </div>
          <div className={styles["inf-wrapper"]}>
            <div className={styles.label}>
              <img src={star} alt="start-img" />
              <p className={styles["since-inf"]}>{EnumText.TEXT_SINCE}</p>
            </div>
            <p className={styles["hotel-inf"]}>{EnumText.TEXT_HOTEL_INF}</p>
          </div>
          <button type="button" className={styles.btn}>
            <img src={btn} alt="btn-img" />
          </button>
        </div>
      </div>
    </section>
  );
}
