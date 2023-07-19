import React, { useState } from "react";
import { Link } from "react-scroll";
import "../assets/styles/rocket.css";

const Rocket = () => {
  const [rocketActive, setRocketActive] = useState(false);

  const handleClick = () => {
    if (window.pageYOffset > 0) {
      setRocketActive(true);
      setTimeout(() => {
        setRocketActive(false);
      }, 3500);
    }
  };

  return (
    <div className="rocket-box">
      <Link to="Home" smooth={true} duration={500} spy={true} exact="true">
        <div
          className={`rocket-link ${rocketActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="rocket">
            <img src="/public/cohete.png" alt="rocket" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Rocket;