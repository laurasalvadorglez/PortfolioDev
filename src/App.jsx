import React, { useState } from "react";
import styles from "./App.module.css";

import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Navbar } from "./components/Navbar/Navbar";
import { Education } from "./components/Education/Education";

import { AboutSP } from "./components/About/AboutSP";
import { ContactSP } from "./components/Contact/ContactSP";
import { ExperienceSP } from "./components/Experience/ExperienceSP";
import { HeroSP } from "./components/Hero/HeroSP";
import { ProjectsSP } from "./components/Projects/ProjectsSP";
import { NavbarSP } from "./components/Navbar/NavbarSP";
import { EducationSP } from "./components/Education/EducationSP";

import sp from "./../assets/idiomas/sp.png";
import eng from "./../assets/idiomas/eng.png";

function App() {
  const [isEnglish, setIsEnglish] = useState(true); // Estado para controlar el idioma

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish); // Cambia el estado del idioma
  };

  return (
    <div className={styles.App}>
      <button className={styles.LanguageButton} onClick={toggleLanguage}>
        {/* Renderizado condicional de la imagen de la bandera */}
        {isEnglish ? (
          <img src={sp} alt="Spanish Flag" />
        ) : (
          <img src={eng} alt="English Flag" />
        )}
      </button>
      {/* Renderizado condicional de la barra de navegación */}
      {isEnglish ? <Navbar /> : <NavbarSP />}
      {isEnglish ? <Hero /> : <HeroSP />}
      {isEnglish ? <About /> : <AboutSP />}
      {isEnglish ? <Experience /> : <ExperienceSP />}
      {isEnglish ? <Education /> : <EducationSP />}
      {isEnglish ? <Projects /> : <ProjectsSP />}
      {isEnglish ? <Contact /> : <ContactSP />}
    </div>
  );
}

export default App;
