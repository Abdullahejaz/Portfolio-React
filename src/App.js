import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="app">
        <Navbar />
      <div className="sections">
        <Header />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
