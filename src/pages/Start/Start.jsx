import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/background-image.png";
import style from "./start.module.css";
import Ball from "../../components/Ball";
function Start() {
  const currentUser = true;
  return (
    <div className={style.start}>
      <div className={style.content}>
        <Ball size="200px" left="72%" bottom="10%" />
        <Ball size="120px" left="7%" top="30%" />
        <Ball size="100px" right="10%" top="25%" color="dark-circle" />
        <Ball size="60px" left="15%" bottom="15%" color="dark-circle" />
        <div className={`container ${style.container}`}>
          <h1 className={`${style.heading} large`}>Tsks,just tasks</h1>
          <p className={style.title}>
            Keep track of the daily tasks in life and get the satisfaction upon
            completion.
          </p>
          <div className={style.buttons}>
            <Link
              to={currentUser ? "/collections" : "/login"}
              className={`colorized-btn btn ${style.btn}`}
            >
              Get Started
            </Link>
            <button className={`dark-btn btn ${style.btn}`}>Learn More</button>
          </div>
          <img src={backgroundImage} alt="background" />
        </div>
      </div>
    </div>
  );
}

export default Start;
