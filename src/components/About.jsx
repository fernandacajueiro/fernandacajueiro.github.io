import React from 'react';
import { Icon } from '@iconify/react';
import '../Page.css';
import Footer from './Footer';
import Browse from './Browse';
// import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <Browse />
        <div class="about-me">
            <h1>About me</h1>

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
                I'm Fernanda.
                <br />
                Brazilian girl living in Amsterdam 🇧🇷 🇳🇱, dog lover 🐶, vegetarian 💚.
                <br />
                Back-end development enthusiast and eager to learn something new everyday.
              </p>
            </div>
          </div>
        </div>

        <div class="skills">
          <h1>Skills</h1>

          <div class="skills-cards">
            <div class="skill">
              <Icon className="iconify" icon="ion:logo-javascript" id="javascript-icon" />
              <div class="skill-name">JavaScript</div>
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
              <Icon className="iconify" icon="fontisto:nodejs" id="node-icon" />
              <div class="skill-name">Node.js</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="fontisto:python" id="python-icon" />
              <div class="skill-name">Python</div>
            </div>

            <div class="skill">
              <Icon className="iconify" icon="fontisto:react" id="react-icon" />
              <div class="skill-name">React</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

export default About;
