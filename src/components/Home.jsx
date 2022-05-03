import React from 'react';
import '../Page.css';
import Footer from './Footer';
import About from './/About';
import Projects from './/Projects';

class Home extends React.Component {
  // componentDidMount() {
  //   document.title = "Fernanda C. Machado";
  // }
  render() {
    return (
      <div class="content">
        <div class="home-container">
          <div class="initial-container">
            <div class="initial-container-color"></div>
              <h1 class="name">Fernanda Cajueiro</h1>
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
