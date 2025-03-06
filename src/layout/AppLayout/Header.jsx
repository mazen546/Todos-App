// import {
//   AddRounded,
//   Dashboard,
//   Folder,
//   NotificationsOutlined,
//   Person,
//   SearchRounded,
//   MoreVert,
//   Menu,
// } from "@mui/icons-material";
import { Link, NavLink, useLocation } from "react-router-dom";
import style from "./header.module.css";
import { useCallback, useContext, useEffect, useRef } from "react";
import { AppContext } from "./AppLayout";
import { useClickOutside } from "../../hooks/useClickOutside";
import { IoFolderOpenSharp, IoMenu, IoSearch } from "react-icons/io5";
import { MdDashboard, MdPerson } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  const userMenuRef = useRef(null);
  const sidebarMenuRef = useRef(null);
  const context = useContext(AppContext);
  const { show, setShow } = useClickOutside(userMenuRef);
  const location = useLocation();
  const handelClickOutside = useCallback((e) => {
    if (!sidebarMenuRef.current.contains(e.target)) {
      context.hideSidebar();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handelClickOutside, true);
    return () =>
      document.removeEventListener("click", handelClickOutside, true);
  }, [handelClickOutside]);
  return (
    <div className={style.header}>
      <nav>
        <IoMenu
          className={style["sidebar-icon"]}
          onClick={() => {
            context.handelShowSidebar();
          }}
          ref={sidebarMenuRef}
          style={{
            display: location.pathname === "/collections" ? "none" : null,
          }}
        />
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style["active-link"]}` : style.link
          }
        >
          <MdDashboard className={style.icon} />
          <p className="small-medium">DashBoard</p>
        </NavLink>
        <NavLink
          to="collections"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style["active-link"]}` : style.link
          }
        >
          <IoFolderOpenSharp className={style.icon} />
          <p className="small-medium">Collections</p>
        </NavLink>
      </nav>
      <button
        className={`${style["menu-btn"]} btn`}
        ref={userMenuRef}
        onClick={() => {
          setShow(!show);
        }}
      >
        <HiDotsHorizontal className={style["menu-icon"]} />
      </button>
      <div className={`${style.user} ${show ? style.open : null}`}>
        <div className={style["add-task"]}>
          <FaPlus className="colorized-backGround" />
          <p>Add Task</p>
        </div>
        <div className={style.search}>
          <IoSearch />
          <p>Search</p>
        </div>
        <div className={style.notification}>
          <IoMdNotificationsOutline />
          <p>Notification</p>
        </div>
        <Link to="account" className={style.avatar}>
          <MdPerson className={`${style.person} colorized-backGround`} />
          <p>Account</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
