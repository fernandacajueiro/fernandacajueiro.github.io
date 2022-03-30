import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div class="app">
        {/* <Home />
        <About />
        <Projects />
        <Footer /> */}
      </div>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        {/* <Route path="/contact" element={ <Contact /> } /> */}
        <Route path="/footer" element={ <Footer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
