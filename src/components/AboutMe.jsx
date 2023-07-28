import "../assets/styles/AboutMe.css";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { saveAs } from "file-saver";

function AboutMe() {
  const { isEnglish } = useContext(LanguageContext);

  function downloadCV() {
    let url, fileName;

    if (isEnglish) {
      url = "/pdf/CV-Yordanni-Ortiz-Full-Stack-Developer-Eng.pdf";
      fileName = "CV-Yordanni-Ortiz-Full-Stack-Developer-Eng.pdf";
    } else {
      url = "/pdf/CV-Yordanni-Ortiz-Desarrollador-Full-Stack-Esp.pdf";
      fileName = "CV-Yordanni-Ortiz-Desarrollador-Full-Stack-Esp.pdf";
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.blob();
      })
      .then((blob) => {
        saveAs(blob, fileName);
        const fileUrl = URL.createObjectURL(blob);
        window.open(fileUrl, "_blank");
      })
      .catch((error) => {
        console.error("Error al descargar el archivo:", error);
      });
  }

  return (
    <div id="AboutMe" className="about-me-container">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="about-me-text"
      >
        {isEnglish ? "About Me" : "Sobre Mí"}
      </h2>

      <div
        className="download-cv"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="70"
        data-aos-offset="0"
      >
        <div
          data-aos="flip-left"
          className="border-neon"
          href=""
          style={{ "--clr": "rgb(14, 70, 255)", "--i": 0 }}
        >
          <div style={{ textDecoration: "none" }} onClick={downloadCV}>
            {isEnglish ? "Download CV" : "Descargar CV"}
          </div>
        </div>
      </div>

      <div className="cards-container">
        <div className="box" data-aos="fade-right">
          <span></span>
          <div className="content">
            <h2>{isEnglish ? "WHO AM I?" : "¿QUIÉN SOY YO?"}</h2>
            <p>
              {isEnglish
                ? "I am an enthusiastic and passionate full-stack developer with a love for technology. I enjoy exploring new tools and creating innovative, high-quality products. I am excited to stay up-to-date with the latest trends and advancements in the world of technology and apply them to my daily work. I am constantly seeking new challenges to grow and enhance my skills as a developer."
                : "Soy un desarrollador full-stack entusiasta y apasionado con la tecnología. Me encanta explorar nuevas herramientas y crear productos innovadores y de alta calidad. Me emociona estar al tanto de las últimas tendencias y avances en el mundo de la tecnología y aplicarlos en mi trabajo diario. Estoy constantemente buscando nuevos desafíos para crecer y mejorar mis habilidades como desarrollador."}
            </p>
          </div>
        </div>

        <div className="box" data-aos="flip-right">
          <span></span>
          <div className="content">
            <h2>
              {isEnglish ? "WHAT ARE MY GOALS?" : "¿CUÁLES SON MIS METAS?"}
            </h2>
            <p>
              {isEnglish
                ? "My goal is to master the latest technologies in software development and implement high-level technological solutions to enhance user experiences. I aspire to participate in challenging projects, improving code structure in order to become a more efficient and proactive developer. I am excited about the idea of developing mobile applications to complement my knowledge and skills."
                : "Mi objetivo es dominar las últimas tecnologías en desarrollo de software e implementar soluciones tecnológicas de alto nivel mejorando la experiencia de los usuarios, participar en proyectos desafiantes mejorando la extructura de código con el fin de convertirme en un desarrollador cada vez más eficaz y proactivo. Me emociona la idea de desarrollar aplicaciones móviles para complementar mis skills."}
            </p>
          </div>
        </div>

        <div className="box" data-aos="fade-left">
          <span></span>
          <div className="content">
            <h2 className="gettoknowme">
              {isEnglish
                ? "GET TO KNOW ME A LITTLE BIT MORE!"
                : "¡CONOCEME UN POCO MÁS!"}
            </h2>
            <p>
              {isEnglish
                ? "I have solid knowledge in Full-Stack web development, but I specialize in Front-End development, with React being the technology I use the most. In addition to that, I have also gained a lot of experience in other areas such as business, something I really love and frequently engage in. However, software development and technology are what have truly captivated me."
                : "Tengo conocimientos sólidos en el desarrollo web Full-Stack pero me especializo en el desarrollo Front-End siendo React la tecnología que más uso. Adicional a eso también he tenido mucha experiencia en otras áreas como en negocios, algo que me encanta mucho y que desempeño frecuentemente, sin embargo, el desarrollo de software y la tecnología es lo que me ha apasionado."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
