import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div class="app">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
