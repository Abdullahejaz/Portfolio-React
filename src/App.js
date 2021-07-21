import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
        <Navbar />
      <div className="sections">
        <Header />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default App;
