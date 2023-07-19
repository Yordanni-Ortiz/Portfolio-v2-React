import "../assets/styles/Projects.css";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Projects() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div id="Projects" className="projects">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="projects-text"
      >
        {isEnglish ? "Projects" : "Proyectos"}
      </h2>
      <article className="descriptions" data-aos="fade-up">
        <div
          className="line-effect"
          data-aos="fade-right"
          style={{ "--clr": "#0060ff", "--i": 0 }}
        >
          <div className="container">
            <p className="titulo">POKÉDEX</p>
            <p className="subtitulo">
              {isEnglish
                ? "I developed a Pokédex with React and Redux that allows users to search and filter Pokémon by type, as well as see details about each one, with an optimal interface to improve the user experience. The app is connected to an API that provides information about the Pokémon"
                : "Desarrollé una Pokédex con React y Redux que permite a los usuarios buscar y filtrar Pokémon por tipo, así como ver detalles sobre cada uno, con una interfas optima para mejorar la experiencia del usuario. La app está conectada a una API que proporciona información sobre los Pokémon."}
            </p>
          </div>
        </div>
        <div
          className="line-effect"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <div className="container">
            <p className="titulo">ECOMMERCE</p>
            <p className="subtitulo">
              {isEnglish
                ? "This Ecommerce is a web application that allows registered users to search for products and add them to a shopping cart. The front-end is developed with React and Redux, and the back-end is built with Node.js and Express, and uses Sequelize as an ORM to interact with the database."
                : "Este Ecommerce es una aplicación web que permite a los usuarios registrados buscar productos y agregarlos a un carrito de compras. El front-end stá desarrollado con React y Redux, y el back-end está construido con Node.js y Express, y utiliza Sequelize como ORM para interactuar con la base de datos."}
            </p>
          </div>
        </div>
        <div className="line-effect" data-aos="fade-left">
          <div className="container">
            <p className="titulo">CRUD</p>
            <p className="subtitulo">
              {isEnglish
                ? "In this React application, I developed a CRUD function that allows creating, reading, updating, and deleting products for an online store. The application can connect to a robust database or a scalable API that enables performing these operations on the stored data."
                : "En esta aplicación de React desarrollé una función CRUD que permite crear, leer, actualizar y eliminar productos para una tienda en línea. La aplicación puede conectarse a una robusta base de datos o a una API escalable que permita realizar estas operaciones en los datos almacenados."}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Projects;
