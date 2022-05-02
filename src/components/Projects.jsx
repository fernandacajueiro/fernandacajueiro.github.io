import React from 'react';
import '../Page.css';

class Projects extends React.Component {
  render() {
    return (
      <div class="projects">
        <div class="projects-color"></div>
          <h1>Projects</h1>
          <div class="projects-cards">
            <a href="https://github.com/fernandacajueiro/color-guess-project" target="_blank" rel="noreferrer">
              <div class="project-card">
                <div class="project-details">
                  <p class="project-icon">👩🏻‍🎨 🎨</p>
                  <p class="project-title">COLOR GUESSER</p>
                  <p class="project-description">An RGB color guess game</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/fernandacajueiro/cookmaster-project" target="_blank" rel="noreferrer">
              <div class="project-card">
                <div class="project-details">
                  <p class="project-icon">👩🏻‍🍳 🗂️</p>
                  <p class="project-title">COOKMASTER</p>
                  <p class="project-description">Application of recipes registration and search</p>
                </div>
              </div>
            </a>

            <a target="_blank" rel="noreferrer">
              <div class="project-card">
                <div class="project-details">
                  <p class="project-icon">👩🏻‍💻 ⚙️</p>
                  <p class="project-title">BLOGS API</p>
                  <p class="project-description">Coming soon...</p>
                </div>
              </div>
            </a>

            <a target="_blank" rel="noreferrer">
              <div class="project-card">
                <div class="project-details">
                  <p class="project-icon">📲 📰</p>
                  <p class="project-title">TECH NEWS</p>
                  <p class="project-description">Coming soon...</p>
                </div>
              </div>
            </a>
          </div>
      </div>
    )
  }
};

export default Projects;
