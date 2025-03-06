import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ball from "../../components/Ball";
import styles from "./log-in.module.css";
const LogIn = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles["log-in"]}>
      <Ball size="220px" right="65%" top="-70px" />
      <Ball size="100px" left="65%" top="20px" color="dark-circle" />
      <form className={styles.form}>
        <h2 className={styles.header}>Sign in.</h2>
        <button type="button" className="border google-sign-up btn">
          <FaGoogle /> Continue with Google
        </button>
        <button type="button" className="border google-sign-up btn">
          <FaFacebook /> Continue with Facebook
        </button>
        <span style={{ fontWeight: "bold" }}>or</span>
        <input
          type="email"
          className="border"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          className="border"
          name="password"
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={handelSubmit}
          className="colorized-btn btn"
        >
          Sign in
        </button>
        <div className={styles["create-account"]}>
          <p style={{ whiteSpace: "nowrap" }} className="small">
            Don&#39;t have an account?
          </p>
          <Link to="/singUp" className="p-small">
            Create Account
          </Link>
        </div>
        <Link className="p-small">Forget Password?</Link>
      </form>
    </div>
  );
};

export default LogIn;
