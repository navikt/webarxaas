import React from 'react';
import './__css__/Footer.css';

const Footer = () => {
  const content = (
    <div className="footer container-fluid">
      <div className="row">
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <a className="github" href="https://github.com/navikt/webarx-poc"><b>Github</b></a>
          </li>
          <li className="footer-menu-item">
            <a className="slack" href="https://github.com/navikt/webarx-poc/issues"><b>Issue tracker</b></a>
          </li>
          <li className="footer-menu-item">
            <a className="slack" href="https://app.slack.com/client/T5LNAMWNA/CKER48611"><b>Slack channel: anon-team-internal</b></a>
          </li>
          <li className="footer-menu-item">
            <a className="email" href="mailto:Anonymisering@nav.no"><b>Email: Anonymisering@nav.no</b></a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p className="mbr-text mb-0 mbr-fonts-style mbr-white display-7">
          © Copyright 2019
          {' '}
          <a href="https://www.nav.no/Forsiden">NAV</a>
          {' '}
          - All Rights Reserved
        </p>
      </div>
    </div>
  );
  return content;
};

export default Footer;
