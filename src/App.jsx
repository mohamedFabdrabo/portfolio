import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Education from './components/qualification/Education';
import Experience from './components/qualification/Experience';
import Skills from './components/skills/Skills';
import Certificates from './components/certificates/Certificates';
import Work from './components/Portfolio/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      {/* Storytelling flow: who I am -> my path -> what I can do -> what I built -> let's talk */}
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Work />
      <Certificates />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App
