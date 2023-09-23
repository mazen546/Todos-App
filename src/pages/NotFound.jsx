import Ball from "../components/Ball";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <Ball left="-90px" bottom="250px" size="150px" />
      <Ball right="-140px" top="-40px" size="250px" />
      <Ball right="-15px" top="160px" size="150px" color="dark-circle" />
      <Ball left="-150px" bottom="-250px" size="500px" color="dark-circle" />
      <div className="container">
        <div className="content">
          <h1>404 - Looks like you&#39;re lost.</h1>
          <div className="description">
            <p>
              Maybe this page used to exist or you just spelled something wrong.
            </p>
            <p>
              Chances are you spelled something wrong, so can you double check
              the Url?
            </p>
          </div>
          <Link to="/" className="colorized-btn back-home">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
