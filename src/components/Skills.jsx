import "../assets/styles/Skills.css";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Skills() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div id="ComputerSkills" className="computer-skills-container">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="computer-skills-text"
      >
        {isEnglish ? "Skills" : "Habilidades"}
      </h2>

      <section className="skills-section">
        <div
          data-aos="fade-down-right"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#FF7816", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-html" src="./html.png" alt="html icon" />
          <span>HTML</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#0060ff", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-css" src="./css.png" alt="css icon" />
          <span>CSS</span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#ffed00", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-javascript"
            src="./javascript.png"
            alt="javascript icon"
          />
          <span>JAVASCRIPT</span>
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#00D8FF", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-react" src="./react.png" alt="react icon" />
          <span>REACT</span>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#4CAF50", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-node" src="./node.png" alt="node icon" />
          <span>NODE</span>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#FF6C37", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-postman"
            src="./postman.png"
            alt="postman icon"
          />
          <span>POSTMAN</span>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#03AFEF", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-sequelize"
            src="./sequelize.png"
            alt="sequelize icon"
          />
          <span>SEQUELIZE</span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#306091", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-postgreslq"
            src="./postgresql.png"
            alt="postgresql icon"
          />
          <span>POSTGRESQL</span>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#016089", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-mysql" src="./mysql.png" alt="mysql icon" />
          <span>MYSQL</span>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#FFFFFF", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-github"
            src="./github.png"
            alt="github icon"
          />
          <span>GITHUB</span>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#F4511E", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-git" src="./git.png" alt="git icon" />
          <span>GIT</span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#44D093", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-supabase"
            src="./supabase.png"
            alt="supabase icon"
          />
          <span>SUPABASE</span>
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#25C7B7", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-netlify" src="./netlify.png" alt="netlify icon" />
          <span>NETLIFY</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#5A29E4", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-axios"
            src="./axios.png"
            alt="axios icon"
          />
          <span>AXIOS</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#54274C", "--i": 0, alignItems: "center" }}
        >
          <img className="icon icon-bootstrap" src="./bootstrap.png" alt="bootstrap icon" />
          <span>BOOTSTRAP</span>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-easing="ease-out-cubic"
          className="skills-box"
          style={{ "--clr": "#1FA2ED", "--i": 0, alignItems: "center" }}
        >
          <img
            className="icon icon-aos"
            src="./aos.png"
            alt="aos icon"
          />
          <span>AOS</span>
        </div>
      </section>
    </div>
  );
}
export default Skills;
