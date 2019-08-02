import React from 'react';
import './__css__/Footer.css';

const Footer = () => {
  const content = (
    <div className="footer container-fluid">
      <div className="row">
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <i className="fab fa-github" />
            &nbsp;
            <a className="github" href="https://github.com/navikt/webarx-poc">
              <b>Source Code</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <i className="fab fa-github" />
            &nbsp;
            <a className="github" href="https://github.com/navikt/webarx-poc/issues">
              <b>Issue tracker</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <i className="fab fa-slack" />
            &nbsp;
            <a className="slack" href="https://app.slack.com/client/T5LNAMWNA/CKER48611">
              <b>Slack</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <i className="fas fa-envelope" />
            &nbsp;
            <a className="email" href="mailto:anonymisering@nav.no">
              <b>anonymisering@nav.no</b>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <span className="copyright-text">
          © Copyright 2019
        </span>
        <a href="https://www.nav.no/Forsiden">
          <img
            alt="NAV Logo"
            src="/img/logo-nav.png"
            width="75"
            className="logo-nav d-inline-block align-top"
          />
        </a>
        <span className="copyright-text">
          All Rights Reserved
        </span>
      </div>
    </div>
  );
  return content;
};

export default Footer;
