import React from 'react';
// import { Icon } from '@iconify/react';
import '../Page.css';
import Footer from './Footer';
// import Browse from './Browse';
import About from './/About';
import Projects from './/Projects';
// import gif from '../giphy.gif';
// import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div class="content">
        <div class="home-container">
          {/* <Browse /> */}
          {/* <div class="gif-container" href="https://giphy.com/embed/JpLVqOg8xTY3EmoYF7">
            <img src={gif} alt="gif" class="gif" />
          </div> */}
          <div class="initial-container">
            <div class="initial-container-color"></div>
              <h1 class="name">Fernanda Cajueiro</h1>
            {/* <div class="position-container"> */}
              {/* <Icon className="iconify" icon="icons8:code-file" width="150" height="150" id="home-icon"/> */}
            {/* </div> */}
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
