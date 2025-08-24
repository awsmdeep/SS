import React from "react";
import MainLayout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects"; 


function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Projects />
    </MainLayout>
  );
}

export default App;
