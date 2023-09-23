import { Link } from "react-router-dom";
import Ball from "../../components/Ball";
import styles from "./signUp.module.css";
function SignUp() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  /*   const loggedIn = true;
  loggedIn ? (
    <Navigate to="/collections" replace={true} />
  ) :  */
  return (
    <div className={styles["log-in"]}>
      <Ball size="220px" right="65%" top="-70px" />
      <Ball size="100px" left="65%" top="20px" color="dark-circle" />
      <form className={styles.form}>
        <h3 className={styles.header}>Sign Up.</h3>
        <input
          type="text"
          className="border"
          name="userName"
          placeholder="User Name"
        />
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
        <input
          type="password"
          className="border"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button
          type="submit"
          onClick={handelSubmit}
          className="colorized-btn btn"
        >
          Sign Up
        </button>
        <div className={styles["create-account"]}>
          <p style={{ whiteSpace: "nowrap" }} className="small">
            Already have an account!
          </p>
          <Link to="/login" className="p-small">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
