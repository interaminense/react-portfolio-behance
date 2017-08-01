import React, { Component } from 'react';
import LogoFooter from './img/footer-react-portfolio-behance.png';
import './style/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div>
          <img src={LogoFooter} alt="footer portfolio + react + behance" />
          <br />
          <br />
          <br />
          Copyright © 2017. <i>Made with ❤ by Adriano Interaminense</i>
        </div>
        <ul>
          <li>
            <a href="https://github.com/interaminense/react-portfolio-behance"
              rel="noopener noreferrer"
              target="_blank" className="btn btn--default">React Portfolio Behance</a>
          </li>
          <li>
            <a href="https://github.com/interaminense"
              rel="noopener noreferrer"
              target="_blank" className="btn btn--default">my github</a>
          </li>
          <li>
            <a href="https://twitter.com/adinteraminense"
              rel="noopener noreferrer"
              target="_blank" className="btn btn--default">my twitter</a>
          </li>
          <li>
            <a href="https://codepen.io/interaminense"
              rel="noopener noreferrer"
              target="_blank" className="btn btn--default">my codepen</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;