import room from "../../assets/photo-room.png";
import roomSecond from "../../assets/photo-room-second.png";
import styles from "./SectionAboutUs.module.scss";

export default function SectionAboutUs() {
  return (
    <section className={styles["section-about-us"]}>
      <div className="section-about-us__container">
        <div className={styles["section-content"]}>
          <div className={styles["about-us-content"]}>
            <div className={styles["about-us-img"]}>
              <img src={room} alt="room-img" />
            </div>
            <span className={styles.line} />
            <div className={styles["about-us-text"]}>
              <div>
                <h2>ABOUT</h2>
                <h2>US</h2>
              </div>
              <div>
                <h3>High quality</h3>
                <span>
                  The five-star Bank Hotel was reopened to visitors in 2016. The
                  building was renovated and modernized to meet the expectations
                  of the most demanding guests. We offer luxurious rooms,
                  numerous facilities, and exceptional service.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className={styles["rooms-check"]}>
            <img src={roomSecond} alt="room-second-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
