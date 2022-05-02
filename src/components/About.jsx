import React from 'react';
import { Icon } from '@iconify/react';
import profilepicture from '../profilepic.jpg';

class About extends React.Component {
  render() {
    return (
      <div class="profile">
        <div class="about-me">
          <div class="about-color"></div>
            <h1>About me</h1>

          <div class="positioning-about">
            <div class="img-container">
              <img src={profilepicture} alt="profile-pic" />
            </div>

            <div class="card">
              <div class="card-header">
                <div class="buttons">
                  <Icon className="iconify" id="red-circle" icon="emojione:red-circle" />
                  <Icon className="iconify" id="yellow-circle" icon="twemoji:yellow-circle" />
                  <Icon className="iconify" id="green-circle" icon="twemoji:green-circle" />
                </div>
              </div>

              <div class="card-body">
                <h2>Hi! 👋</h2>
                <p>
                  I'm Fernanda, Brazilian living in Amsterdam 🇧🇷 🇳🇱 . Discovered the world of software development a few years ago and decided to dive in completely. 
                  I attended an intensive coding bootcamp at <a href="https://www.betrybe.com/" class="trybe-link" target="_blank" rel="noreferrer">Trybe</a> through over an year and became a junior full-stack software developer. 
                  A back-end development enthusiast and eager to learn something new everyday.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div class="skills">
          <div class="skills-container-color"></div>
          <h1>Skills</h1>

          <div class="skills-cards">
            <div class="skill">
              <Icon className="iconify" icon="fontisto:nodejs" id="node-icon" />
              <div class="skill-name">Node.js</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="fontisto:mysql" id="mysql-icon" />
              <div class="skill-name">MySQL</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="simple-icons:mongodb" id="mongodb-icon" />
              <div class="skill-name">MongoDB</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="fontisto:python" id="python-icon" />
              <div class="skill-name">Python</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="ion:logo-javascript" id="javascript-icon" />
              <div class="skill-name">JavaScript</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="fontisto:react" id="react-icon" />
              <div class="skill-name">React</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="cib:jest" id="react-icon" />
              <div class="skill-name">Jest</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="file-icons:chai" id="react-icon" />
              <div class="skill-name">Chai</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default About;
