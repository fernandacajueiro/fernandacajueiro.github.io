import React from 'react';
// import { Icon } from '@iconify/react';
import '../Page.css';
import Footer from './Footer';
// import Browse from './Browse';
import About from './/About';
import Projects from './/Projects';
// import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div class="content">
        <div class="home-container">
          {/* <Browse /> */}
          <div class="initial-container">
            <div class="initial-container-color"></div>
            <div class="position-container">
              <h1 class="name">Fernanda Cajueiro</h1>
              {/* <Icon className="iconify" icon="icons8:code-file" width="150" height="150" id="home-icon"/> */}
            </div>
            <div class="typing-container">
              <h2 class="typing">Software developer</h2>
            </div>
          </div>
        </div>

        <About />
        <Projects />
        <Footer />
      </div>
    )
  }
};

export default Home;
