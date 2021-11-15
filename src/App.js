import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ProjectParent from './components/ProjectParent';


function App() {
  return (
    <div className="App">
  <Header/>
  <About/>
  <Projects/>
  <ProjectParent/>
  <Contact/>
  <Footer/>
  </div>
  );
}

export default App;