import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    {/* <Experience/> */}
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
    </>
   
  );
}

export default App;
