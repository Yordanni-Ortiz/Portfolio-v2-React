import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../LanguageContext";
import "../NavBar/NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", isLightMode ? "light" : "dark");
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  const handleScroll = () => {
    const navBar = document.querySelector(".background");
    const scrolled = window.scrollY > 0;
    navBar.classList.toggle("scrolled", scrolled);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
    setShowOverlay(!showOverlay);
  };

  const handleLanguageClick = (language) => {
    if ((language === "en" && !isEnglish) || (language === "es" && isEnglish)) {
      toggleLanguage();
    }
  };

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="nav-bar">
      <div className={`overlay ${showOverlay ? "show" : ""}`} />
      <article className="background" />
      <img className="logo" src="/yordLogo.png" alt="" />
      <div className={`nav-list ${isOpen ? "Open" : "Close"}`}>
        <div className="theme-change">
          <div className="toggle">
            <div className={`${!isLightMode ? "left-toggle" : "right-toggle"}`}>
              <i
                className={`bx icon-toggle ${isLightMode ? "bxs-sun" : "bxs-moon"}`}
                onClick={toggleLightMode}
              >
              </i>
            </div>
          </div>
        </div>
        <label className="switch">
          <input type="checkbox" />
          <span
            className="left-switch"
            onClick={() => handleLanguageClick("es")}
            disabled={!isEnglish}
          >
            ES
          </span>
          <span
            className="right-switch"
            onClick={() => handleLanguageClick("en")}
            disabled={isEnglish}
          >
            EN
          </span>
        </label>
        <article
          className={
            isEnglish ? "background-scroll-en" : "background-scroll-es"
          }
        />
        <li>
          <a href="#Home" className="options" onClick={handleClick}>
            <span>{isEnglish ? "Home" : "Inicio"}</span>
            <span>
              <i className="fa-solid fa-house-chimney" aria-hidden="true"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#AboutMe" className="options" onClick={handleClick}>
            <span>{isEnglish ? "About Me" : "Sobre Mí"}</span>
            <span>
              <i className="fas fa-address-card" aria-hidden="true"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#ComputerSkills" className="options" onClick={handleClick}>
            <span>{isEnglish ? "Skills" : "Habilidades"}</span>
            <span>
              <i className="fa-solid fa-computer"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#Projects" className="options" onClick={handleClick}>
            <span>{isEnglish ? "Projects" : "Proyectos"}</span>
            <span>
              <i className="fa-solid fa-briefcase"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="#Contact" className="options" onClick={handleClick}>
            <span>{isEnglish ? "Contact" : "Contacto"}</span>
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
          </a>
        </li>
      </div>
      <div className="mobile-nav-bar">
        <button
          className={`burger-btn ${isClicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  );
}

export default NavBar;