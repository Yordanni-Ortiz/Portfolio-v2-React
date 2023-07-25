import "../assets/styles/Projects.css";
import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";

function Projects() {
  const { isEnglish } = useContext(LanguageContext);

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(() => {
    const target1 = 600;
    const target2 = 12;
    const target3 = 5;
    const duration = 7000;
    const startTime = Date.now();

    const animateNumbers = () => {
      const currentTime = Date.now() - startTime;
      const progress = Math.min(1, currentTime / duration);

      setNumber1(Math.floor(progress * target1));
      setNumber2(Math.floor(progress * target2));
      setNumber3(Math.floor(progress * target3));

      if (currentTime < duration) {
        requestAnimationFrame(animateNumbers);
      }
    };

    requestAnimationFrame(animateNumbers);
  }, []);

  return (
    <div id="Projects" className="projects">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="projects-text"
      >
        {isEnglish ? "Projects" : "Proyectos"}
      </h2>

      <div className="container-descriptions">
        <div className="line-style" data-aos="fade-right">
          <div className="card-description">
            <img src="/Study.gif" alt="Study" className="gif" />
            <p className="number">+ {number1}</p>
            <p className="text-description">
              {isEnglish ? "Study hours" : "Horas de estudio"}
            </p>
          </div>
        </div>
        <div className="line-style" data-aos="flip-right">
          <div className="card-description">
            <img src="/Technology.gif" alt="Technologies" className="gif" />
            <p className="number">+ {number2}</p>
            <p className="text-description">
              {isEnglish ? "Technologies used" : "Tecnologías utilizadas"}
            </p>
          </div>
        </div>
        <div className="line-style" data-aos="fade-left">
          <div className="card-description">
            <img src="/Project.gif" alt="Projects" className="gif" />
            <p className="number">+ {number3}</p>
            <p className="text-description">
              {isEnglish ? "Completed projects" : "Proyectos culminados"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
