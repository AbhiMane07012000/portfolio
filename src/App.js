import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
  <>
  <Navbar />
  <Home/>
  <About />
  <Skills />
  <Contact />
  </>
  );
}

export default App;
