import "../assets/styles/Home.css";
import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Home() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="home">
      <section className="astronauta-section">
        <a>
          <img className="astronauta" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" src="/astronauta.png" alt="" />
        </a>
      </section>
      <h3 className="greetings" data-aos="fade-left">
        {isEnglish ? "HI! MY NAME IS" : "¡HOLA! MI NOMBRE ES"}
      </h3>
      <div className="name" >
        <h1 className="h1-name text-neon" data-aos="fade-left"> YORDANNI ORTIZ </h1>
        <h1 className="h1-name text-neon" data-aos="fade-left"> YORDANNI ORTIZ </h1>
      </div>
      <h2 className="dev-container">
        <span className="first-span" data-aos="fade-left">
          {isEnglish ? " FULL - STACK " : "DESARROLLADOR"}
        </span>
        <span className="second-span" data-aos="fade-left">
          {isEnglish ? (
            <h2 className="second-span-english">DEVELOPER</h2>
          ) : (
            <h2 className="second-span-spanish">FULL - STACK</h2>
          )}
        </span>
      </h2>
      <div className="container-welcome">
        <span>{isEnglish ? "W" : "B"}</span>
        <span>{isEnglish ? "E" : "I"}</span>
        <span>{isEnglish ? "L" : "E"}</span>
        <span>{isEnglish ? "C" : "N"}</span>
        <span>{isEnglish ? "O" : "V"}</span>
        <span>{isEnglish ? "M" : "E"}</span>
        <span>{isEnglish ? "E" : "N"}</span>
        <span>{isEnglish ? " " : "I"}</span>
        <span>{isEnglish ? "T" : "D"}</span>
        <span>{isEnglish ? "O" : "O "}</span>
        <span>{isEnglish ? " " : "A "}</span>
        <span>{isEnglish ? "M" : "M"}</span>
        <span>{isEnglish ? "Y" : "I "}</span>
        <span>{isEnglish ? " " : "P"}</span>
        <span>{isEnglish ? "P" : "O"}</span>
        <span>{isEnglish ? "O" : "R"}</span>
        <span>{isEnglish ? "R" : "T"}</span>
        <span>{isEnglish ? "T" : "A"}</span>
        <span>{isEnglish ? "F" : "F"}</span>
        <span>{isEnglish ? "O" : "O"}</span>
        <span>{isEnglish ? "L" : "L"}</span>
        <span>{isEnglish ? "I" : "I"}</span>
        <span>{isEnglish ? "O" : "O"}</span>
      </div>
    </div>
  );
}

export default Home;