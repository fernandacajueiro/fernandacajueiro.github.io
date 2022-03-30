import React from 'react';
import { Icon } from '@iconify/react';
import '../Page.css';

class Contact extends React.Component {
  render() {
    return (
      <div class="social-links">
        <span class="github-link">
          <a target="_blank" rel="noreferrer" href="https://github.com/fernandacajueiro">
            <Icon className="iconify" id="github-logo" icon="ion:logo-github" />
          </a>
        </span>

        <span class="linkedin-link">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fernandacajueiro/">
            <Icon className="iconify" id="linkedin-logo" icon="ion:logo-linkedin" />
          </a>
        </span>
      </div>
    )
  }
};

export default Contact;
