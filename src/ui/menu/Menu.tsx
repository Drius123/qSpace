import { Link } from "react-router-dom";
import { EnumText } from "../../types";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link to="*">{EnumText.MENU_TEXT_FIRST}</Link>
        </li>
        <Link to="*">
          <li className={styles.nav__item}>{EnumText.MENU_TEXT_SECOND}</li>
        </Link>
        <Link to="*">
          <li className={styles.nav__item}>{EnumText.MENU_TEXT_THIRD}</li>{" "}
        </Link>
        <Link to="*">
          <li className={styles.nav__item}>{EnumText.MENU_TEXT_FOURTH}</li>{" "}
        </Link>
        <Link to="*">
          <li className={styles.nav__item}>{EnumText.MENU_TEXT_FIFTH}</li>{" "}
        </Link>
      </ul>
    </nav>
  );
}
