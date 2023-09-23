import SideBar from "/src/components/Side Bar/SideBar";
import { Outlet } from "react-router-dom";
import styles from "./content-layout.module.css";
function ContentLayout() {
  return (
    <div className={styles["content-layout"]}>
      <SideBar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default ContentLayout;
