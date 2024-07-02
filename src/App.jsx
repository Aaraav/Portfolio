import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Page0 from './Components/Page0';


function App() {

  
  

 

  return (
    <div id='bodyy'>
       
        <Page0 />
        <Header />
        <Home />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;