import "./assets/styles/App.css";
import { LanguageProvider } from "./components/LanguageContext";
import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FormEmails from "./components/FormEmails";
import Rocket from "./components/Rocket";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <div id="Home" className="App">{isLoading ? (
        <LoadingScreen />
      ) : (
        <LanguageProvider>
          <NavBar />
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <FormEmails />
          <Rocket />
          <Footer />
        </LanguageProvider>
      )}
    </div>
  );
}

export default App;
