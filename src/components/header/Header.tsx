import { Link } from "react-router-dom";
import routeNames from "../../routing/routs";
import { EnumText } from "../../types";
import styles from "./Header.module.scss";
import Menu from "../../ui/menu/Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="header__container">
        <div className={styles["header-content"]}>
          <Link to={routeNames.PATH}>{EnumText.TEXT_LOGO}</Link>
          <Menu />
        </div>
      </div>
    </header>
  );
}
