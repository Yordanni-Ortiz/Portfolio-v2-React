import "./App.css";
import { LanguageProvider } from "./components/LanguageContext";
import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import FormEmails from "./components/FormEmails/FormEmails";
import Rocket from "./components/Rocket/Rocket";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

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
