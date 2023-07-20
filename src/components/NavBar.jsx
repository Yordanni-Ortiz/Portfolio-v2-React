import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../components/LanguageContext";
import "../assets/styles/NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div className="nav-bar">
      <div className={`overlay ${showOverlay ? "show" : ""}`} />
      <article className="background" />
      <img className="logo" src="/yordLogo.png" alt="" />
      <div className={`nav-list ${isOpen ? "Open" : "Close"}`}>
        <label className="rocker rocker-small">
          <input
            type="checkbox"
            onChange={() => {
              "en" ? "es" : "en";
            }}
          />
          <span
            className="switch-left"
            onClick={() => handleLanguageClick("es")}
            disabled={!isEnglish}
          >
            ES
          </span>
          <span
            className="switch-right"
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
            <span>
              {isEnglish ? "Skills" : "Habilidades"}
            </span>
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
      <div className={`nav-toggle ${isOpen ? "Open" : ""}`}>
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