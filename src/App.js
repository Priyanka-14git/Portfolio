import Navbar from "./components/Navbar/navbar.js";
import Hero from "./components/Hero/hero.js";
import Skills from "./components/Skills/skills.js";
import Projects from "./components/Work_projects/projects.js";
import About from "./components/About/about.js";
import Contact from "./components/Contact/contact.js";
import CertificationsSlider from "./components/Certifications/certifications.js";
import "./App.css";


function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Skills />
       <Projects />
       <About />
       <CertificationsSlider />
       <Contact />
       
    </div>
  );
}

export default App;
