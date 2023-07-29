import "../assets/styles/Projects.css";
import CarouselProjects from "./CarouselProjects";
import React, { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext } from "./LanguageContext";
import electronicShop from "/EletronicsShop.mp4";
import pokeApp from "/PokeApp.mp4";
import productsCrud from "/ProductsCrud.mp4";
import randomUsers from "/RandomUsers.mp4";
import cocktailApp from "/CocktailApp.mp4";

function Projects() {
  const { isEnglish } = useContext(LanguageContext);

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(() => {
    const target1 = 600;
    const target2 = 30;
    const target3 = 10;
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

  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section>
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

      <div className="box-body">
        <div className="project-container">
          <div
            className="card"
            style={{ "--clr": "#66ef" }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="videoBx">
              <video
                ref={videoRef}
                className="project-img"
                width="400"
                height="220"
                autoPlay
                loop
                muted
                onEnded={handleVideoEnded}
              >
                <source src={electronicShop} type="video/mp4" />
                <source src="video.webm" type="video/webm" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
            <div className="content">
              <h2>ECOMMERCE</h2>
              <p>
                {isEnglish
                  ? "Ecommerce developed with technologies such as Javascript, React, Redux, Bootstrap, Bootswatch, CSS, Axios, Node.js, Express, Sequelize, using Cloudinary, Render, and Netlify for deployments and image storage."
                  : "Tienda en línea desarrollada con tecnologías como Javascript, React, Redux, Bootstrap, Bootswatch, CSS, Axios, Node.js, Express, Sequelize utilizando Cloudinary, Render y Netlify para los despliegues y el almacenamiento de imágenes."}
              </p>
              <div className="icons-container">
                <a
                  href="https://ecommerce-yordanni-ortiz.netlify.app/"
                  target="blank"
                >
                  <i className="fa-solid fa-display" id="icon-web">
                    <p>Deployment</p>
                  </i>
                </a>
                <a
                  href="https://github.com/Yordanni-Ortiz/Ecommerce-React"
                  target="blank"
                >
                  <i className="fa-brands fa-github" id="icon-github">
                    <p>GitHub</p>
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ "--clr": "#66ef", "--clr2": "#000" }}
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            <div className="videoBx">
              <video
                ref={videoRef}
                className="project-img"
                width="400"
                height="220"
                autoPlay
                loop
                muted
                onEnded={handleVideoEnded}
              >
                <source src={pokeApp} type="video/mp4" />
                <source src="video.webm" type="video/webm" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
            <div className="content">
              <h2>POKEAPP</h2>
              <p>
                {isEnglish
                  ? "Pokédex built with HTML, CSS, Javascript, React, Redux, Reactstrap, Chroma, Axios, and Netlify. Connected to an API for querying any Pokémon, featuring pagination, and enhancing the user experience."
                  : "Pokédex construida con HTML, CSS, Javascript, React, Redux, Reactstrap, Chroma, Axios y Netlify. Conectada a una API para hacer consultas de cualquier Pokémon contando con una paginación, mejorando la experiencia del usuario."}
              </p>
              <div className="icons-container">
                <a
                  href="https://pokedex-yordanni-ortiz.netlify.app/"
                  target="blank"
                >
                  <i className="fa-solid fa-display" id="icon-web">
                    <p>Deployment</p>
                  </i>
                </a>
                <a
                  href="https://github.com/Yordanni-Ortiz/PokeApp"
                  target="blank"
                >
                  <i className="fa-brands fa-github" id="icon-github">
                    <p>GitHub</p>
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ "--clr": "#66ef" }}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="videoBx">
              <video
                ref={videoRef}
                className="project-img"
                width="400"
                height="220"
                autoPlay
                loop
                muted
                onEnded={handleVideoEnded}
              >
                <source src={productsCrud} type="video/mp4" />
                <source src="video.webm" type="video/webm" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
            <div className="content">
              <h2>PRODUCTS CRUD</h2>
              <p>
                {isEnglish
                  ? "This CRUD application developed with Javascript, HTML, CSS, React, Axios, SweetAlert2, and Netlify, connected to an API to perform HTTP requests, allows users to Create, Read, Update, and Delete products in a vegetable store."
                  : "Esta aplicación CRUD desarrollada con Javascript, HTML, CSS, React, Axios, SweetAlert2 y Netlify conectada a una API para realizar las peticiones HTTP, permite Crear, Leer, Actualizar y Eliminar productos en una tienda de verduras."}
              </p>
              <div className="icons-container">
                <a
                  href="https://crud-fruits-yordanni-ortiz.netlify.app/"
                  target="blank"
                >
                  <i className="fa-solid fa-display" id="icon-web">
                    <p>Deployment</p>
                  </i>
                </a>
                <a
                  href="https://github.com/Yordanni-Ortiz/Crud-Fruit-Store"
                  target="blank"
                >
                  <i className="fa-brands fa-github" id="icon-github">
                    <p>GitHub</p>
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ "--clr": "#66ef" }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="videoBx">
              <video
                ref={videoRef}
                className="project-img"
                width="400"
                height="220"
                autoPlay
                loop
                muted
                onEnded={handleVideoEnded}
              >
                <source src={randomUsers} type="video/mp4" />
                <source src="video.webm" type="video/webm" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
            <div className="content">
              <h2>RANDOM USERS</h2>
              <p>
                {isEnglish
                  ? "Using technologies like Javascript, HTML, CSS, React, React-icons, Axios, and Netlify, I developed an application to generate random users that queries specific information for each user extracted from an API."
                  : "Utilizando tecnologías como Javascript, HTML, CSS, React, React-icons, Axios y Netlify desarrollé una aplicación para generar usuarios aleatorios que consulta información específica de cada usuario que se extrae de una API."}
              </p>
              <div className="icons-container">
                <a
                  href="https://random-users-yordanni-ortiz.netlify.app/"
                  target="blank"
                >
                  <i className="fa-solid fa-display" id="icon-web">
                    <p>Deployment</p>
                  </i>
                </a>
                <a
                  href="https://github.com/Yordanni-Ortiz/Random-Users-React"
                  target="blank"
                >
                  <i className="fa-brands fa-github" id="icon-github">
                    <p>GitHub</p>
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{ "--clr": "#66ef" }}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="videoBx">
              <video
                ref={videoRef}
                className="project-img"
                width="400"
                height="220"
                autoPlay
                loop
                muted
                onEnded={handleVideoEnded}
              >
                <source src={cocktailApp} type="video/mp4" />
                <source src="video.webm" type="video/webm" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
            <div className="content">
              <h2>COCKTAIL APP</h2>
              <p>
                {isEnglish
                  ? "Cocktail App was built using Javascript, HTML, CSS, React, React-icons, Axios, and Netlify, making requests to a cocktails API for searching and filtering different types of cocktails, their ingredients, and descriptions."
                  : "Cocktail App fue construida utilizando Javascript, HTML, CSS, React, React-icons, Axios y Netlify haciendo peticiones a una API de cocteles para búsqueda y filtrado de los diferentes tipos de cocteles, sus ingredientes y descripción."}
              </p>
              <div className="icons-container">
                <a
                  href="https://cocktail-app-yordanni-ortiz.netlify.app/"
                  target="blank"
                >
                  <i className="fa-solid fa-display" id="icon-web">
                    <p>Deployment</p>
                  </i>
                </a>
                <a
                  href="https://github.com/Yordanni-Ortiz/Cocktail-App-React"
                  target="blank"
                >
                  <i className="fa-brands fa-github" id="icon-github">
                    <p>GitHub</p>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
