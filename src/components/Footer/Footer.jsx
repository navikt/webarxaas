import React from 'react';
import './__css__/Footer.css';

const Footer = () => {
  const content = (
    <div className="footer container-fluid">
      <div className="row">
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <a className="image-a github" href="https://github.com/navikt/webarx-poc">
              <i className="fab fa-github" />
            </a>
            &nbsp;
            <a className="text-a github" href="https://github.com/navikt/webarx-poc">
              <b>Source Code</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <a className="image-a issues" href="https://github.com/navikt/webarx-poc/issues">
              <i className="fas fa-exclamation" />
            </a>
            &nbsp;
            <a className="text-a issues" href="https://github.com/navikt/webarx-poc/issues">
              <b>Issues</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <a className="image-a slack" href="https://app.slack.com/client/T5LNAMWNA/CKER48611">
              <i className="fab fa-slack" />
            </a>
            &nbsp;
            <a className="text-a slack" href="https://app.slack.com/client/T5LNAMWNA/CKER48611">
              <b>Slack</b>
            </a>
          </li>
          <li className="footer-menu-item">
            <a className="image-a email" href="mailto:anonymisering@nav.no">
              <i className="fas fa-envelope" />
            </a>
            &nbsp;
            <a className="text-a email" href="mailto:anonymisering@nav.no">
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
