import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Header/Home';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ValentinePage from './Components/Valentine/ValentinePage';

function App() {
  return (
    <div className="app">
        {/* <Navbar />
      <div className="sections">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />


      </div> */}
      <ValentinePage />
    </div>
  );
}

export default App;
