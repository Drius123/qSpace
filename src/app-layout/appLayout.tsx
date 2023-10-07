import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styles from "./appLayout.module.scss";

export default function AppLayout() {
  return (
    <div className={styles["app-layout"]}>
      <Header />
      <Outlet />
    </div>
  );
}
