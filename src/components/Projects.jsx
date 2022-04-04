import React from 'react';
import '../Page.css';
// import Footer from './Footer';
// import Browse from './Browse';
// import { Link } from 'react-router-dom';

class Projects extends React.Component {
  render() {
    return (
      <div class="projects">
        <div class="projects-color"></div>
          <h1>Projects</h1>
          <div class="projects-cards">
            <div class="project">
              PROJETO 1
            </div>
            <div class="project">
              PROJETO 2
            </div>
            <div class="project">
              PROJETO 3
            </div>
            <div class="project">
              PROJETO 4
            </div>
          </div>
      </div>
    )
  }
};

export default Projects;
