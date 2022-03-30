import React from 'react';
import { Icon } from '@iconify/react';
import '../Page.css';
import Footer from './Footer';
import Browse from './Browse';
// import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div class="home-container">
        <Browse />
        <div class="main-container">
          <Icon className="iconify" icon="icons8:code-file" width="150" height="150" id="home-icon"/>
          <h1>Fernanda Cajueiro Machado</h1>
          <div class="typing-container">
            <h2 class="typing">Software developer</h2>
          </div>
        </div>
        {/* toggle between english and portuguese */}
        <Footer />
      </div>
    )
  }
};

export default Home;
