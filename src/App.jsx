import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import ParticlesUI from "./Components/UI/Paticles/ParticlesUI";
import Projects from './Pages/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
  <>
  {/* <ParticlesUI /> */}
  <Navbar />
  <Home/>
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
  </>
  );
}


export default App;
