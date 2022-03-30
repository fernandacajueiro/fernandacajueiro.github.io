import React from 'react';
import '../Page.css';
import Contact from './Contact';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <Contact />
        <p class="footer-text">
          Created and developed by Fernanda Cajueiro Machado. All rights reserved.
          <br />
          Made with ❤
          <br />
          Amsterdam, 2022.
        </p>
      </footer>
    )
  }
};

export default Footer;
