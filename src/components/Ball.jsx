import { memo } from "react";
import styles from "./ball.module.css";
function Ball({
  size = "50px",
  left,
  right,
  top,
  bottom,
  color = "colorized-circle",
}) {
  const ballStyle = {
    width: `${size}`,
    height: `${size}`,
    left: `${left || "unset"}`,
    right: `${right || "unset"}`,
    top: `${top || "unset"}`,
    bottom: `${bottom || "unset"}`,
  };
  return (
    <div className={`${styles.ball} ${styles[color]}`} style={ballStyle}></div>
  );
}

export default memo(Ball);
