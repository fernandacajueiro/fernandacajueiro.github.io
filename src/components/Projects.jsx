import React from 'react';
import '../Page.css';
import Footer from './Footer';
import Browse from './Browse';
// import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <div class="projects">
        <Browse />
        <h1>Projects</h1>
        PROJETOS
        {/* links color guess, webchat, planet search */}
        <Footer />
      </div>
    )
  }
};

export default Projects;
