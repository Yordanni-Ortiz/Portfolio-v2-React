import { useState, useEffect } from 'react';
import '../assets/styles/NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector('.NavBar');
    const scrolled = window.scrollY > 0;
    navbar.classList.toggle('scrolled', scrolled);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="NavBar">
      <ul className="NavBarMenu">
        <img className="logo" src="/hlj.png" alt="" />
        <div className="NavBarList">
          <div className={`NavList ${isOpen ? 'Open' : 'Close'}`}>
            <div className="NavToggleClose" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <li>
              <a href="#Home" className="Options navHome" onClick={handleClick}>
                <span>Home</span> 
                <span>
                  <i className="fa-solid fa-house-chimney" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#AboutMe" className="Options navAboutMe" onClick={handleClick}>
                <span>About Me</span>
                <span>
                  <i className="fas fa-address-card" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#ComputerSkills" className="Options navComputerSkills" onClick={handleClick}>
                <span>Computer Skills</span> 
                <span><i className="fa-solid fa-computer"></i></span>
              </a>
            </li>
            <li>
              <a href="#Projects" className="Options navProjects" onClick={handleClick}>
                <span>Projects</span>
                <span><i className="fa-solid fa-briefcase"></i></span>
              </a>
            </li>
            <li>
              <a href="#Contact" className="Options navContact" onClick={handleClick}>
                <span>Contact</span> 
                <span><i className="fa-solid fa-envelope"></i></span>
              </a>
            </li>
          </div>
        </div>
      </ul>
      <div className={`NavToggle ${isOpen ? 'Open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default NavBar;