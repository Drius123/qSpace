import { EnumText } from "../../types";
import styles from "./SectionPreview.module.scss";

export default function SectionPreview() {
  return (
    <section className={styles["section-preview"]}>
      <div className="section-preview__container">
        <div className={styles["section-content"]}>
          <div className={styles["content-img"]}>
            <div className={styles.btns}>
              <button type="button" className={styles.btn}>
                {EnumText.TEXT_CHECK_IN}
              </button>
              <button type="button" className={styles.btn}>
                {EnumText.TEXT_CHECK_OUT}
              </button>
              <button type="button" className={styles.btn}>
                {EnumText.TEXT_BOOK_ROOM}
              </button>
            </div>
          </div>
          <div className={styles["content-hotel-inf"]}>
            <div className={styles.contact}>
              <p className={styles.telephone}>{EnumText.MENU_TEXT_TELEPHONE}</p>
              <p>{EnumText.TEXT_ADRESS}</p>
            </div>
            <p className={styles.adress}>{EnumText.TEXT_SECOND_ADRESS}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
