import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./side-bar.module.css";
import icons from "../../assets/icons/icons";
import { useContext } from "react";
import { AppContext } from "../../layout/AppLayout/AppLayout";
function SideBar() {
  const { collections } = useSelector((store) => store.collections);
  const context = useContext(AppContext);

  return (
    <div
      className={`${styles["side-bar"]} ${
        context.showSidebar ? styles["show-sidebar"] : null
      }`}
    >
      <h5 className={styles.heading}>Collections</h5>
      <ul>
        {collections.map((collection) => {
          const Icon = icons.find(
            (icon) => icon.name === collection.iconName
          ).component;
          return (
            <NavLink
              key={collection.id}
              to={`/collections/${collection.id}`}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles["active-link"]}`
                  : styles.link
              }
            >
              <Icon style={{ backgroundColor: collection.color }} />
              <p className="small-medium">{collection.name}</p>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
