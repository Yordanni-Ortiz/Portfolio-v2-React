import "../assets/styles/Footer.css";
import linkedin from "../../public/linkedin.png";
import whatsapp from "../../public/whatsapp.png";
import gmail from "../../public/gmail.png";
import github from "../../public/Git-Hub.png";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Footer() {
  const wts =
    "https://api.whatsapp.com/send/?phone=584126351466&text=Hola%2C+%C2%A1Mucho+gusto%21%0AGracias+por+escribir.%0A%C2%BFEn+qu%C3%A9+puedo+ayudarte%3F&type=phone_number&app_absent=0";
  const mail =
    "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=yordannimod@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/yordanni-ortiz/";
  const GitHub = "https://github.com/Yordanni-Ortiz";
  const JavaScript =
    "https://certificates.academlo.com/en/verify/62771454024266";
  const React = "https://certificates.academlo.com/en/verify/92594742451940";
  const Node = "https://certificates.academlo.com/en/verify/79750527406367";
  const FullStack =
    "https://certificates.academlo.com/en/verify/35820114254797";
  const Academlo = "https://www.academlo.com/";
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="footer">
      <article className="block one">
        <div className="thanks">
          <p className="thanks certifications">
            {isEnglish ? "Certifications" : "Certificaciones"}
          </p>
          <a href={JavaScript} target="blank">
            {isEnglish
              ? "Foundations in HTML, CSS, and Javascript"
              : "Fundamentos de JavaScript, CSS y HTML"}
          </a>
          <br />
          <a href={React} target="blank">
            {isEnglish
              ? "Front-End Development with React"
              : "Desarrollo Front-End con React"}
          </a>
          <br />
          <a href={Node} target="blank">
            {isEnglish
              ? "Back-End Development with Node.js"
              : "Desarrollo Back-End con Node.js"}
          </a>
          <br />
          <a href={FullStack} target="blank">
            {isEnglish
              ? "Full-Stack Web Development"
              : "Desarrollo Web Full-Stack"}
          </a>
          <br />
          <a href={Academlo} className="academlo" target="blank">
            {isEnglish ? "By Academlo" : "Por Academlo"}
          </a>
        </div>
      </article>
      <article className="block two">
        <p className="thanks">
          {isEnglish
            ? "Thank you for visiting my web portfolio, I hope we can work together soon!"
            : "¡Gracias por visitar mi portafolio web, espero que podamos trabajar juntos próximamente!"}
        </p>
        <div className="thanks second">
          {isEnglish ? (
            <span>
              If you wish to contact me, you can do so through the form or my
              email{" "}
              <a href={mail} target="_blank">
                yordannimod@gmail.com
              </a>{" "}
              and you can also follow me on{" "}
              <a href={linkedIn} target="blank">
                LinkedIn
              </a>{" "}
              to keep you informed about my latest updates and projects.
            </span>
          ) : (
            <span>
              Si deseas contactarme, puedes hacerlo a través del formulario o de
              mi correo electrónico{" "}
              <a href={mail} target="_blank">
                yordannimod@gmail.com
              </a>{" "}
              y también puedes seguirme en{" "}
              <a href={linkedIn} target="blank">
                LinkedIn
              </a>{" "}
              para mantenerte informado sobre mis últimas actualizaciones y
              proyectos.
            </span>
          )}
        </div>
        <div className="year">
          {isEnglish
            ? "© 2023 - all rights reserved"
            : "© 2023 - todos los derechos reservados"}
        </div>
      </article>
      <article className="block three">
        <p className="thanks">
          {isEnglish ? "Social Networks" : "Redes Sociales"}
        </p>
        <div>
          <a href={linkedIn} target="blank">
            <img src={linkedin} alt="" />
          </a>
          <a href={wts} target="blank">
            <img src={whatsapp} alt="" />
          </a>
        </div>
        <div>
          <a href={mail} target="blank">
            <img src={gmail} alt="" />
          </a>
          <a href={GitHub} target="blank">
            <img className="github" src={github} alt="" />
          </a>
        </div>
      </article>
    </div>
  );
}

export default Footer;
