import { Link } from "react-router-dom";
import Logo from "/src/assets/images/Logo.png";
import style from "./header.module.css";
function Header() {
  console.log(style.color);
  return (
    <div className={style.header}>
      <div className={`container ${style.container}`}>
        <Link className={style.link} to="/">
          <img src={Logo} alt="logo" className={style.logo} />
        </Link>
        <div className={style["nav-bar"]}>
          <Link className={`${style.link} ${style.features}`}>Features</Link>
          <Link to="/login" className={`${style.link} ${style["log-in-btn"]}`}>
            Log in
          </Link>
          <Link
            to="/singUp"
            className={`${style.link} ${style["sign-up-btn"]} border`}
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
