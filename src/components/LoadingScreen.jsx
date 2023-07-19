import React from "react";
import "../assets/styles/loading-screen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen-overlay">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <div className="loader-text">Loading</div>
        <div className="loader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
