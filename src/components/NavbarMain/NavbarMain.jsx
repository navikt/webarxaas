import React from '../../../node_modules/react';
import { Navbar } from '../../../node_modules/react-bootstrap';
import MoreInfoButton from './MoreInfoButton/MoreInfoButton';
import './__css__/NavbarMain.css';

const NavbarMain = (props) => {
  const { setShowMoreInfo } = props;

  const content = (
    <div className="navbar-main">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt="Service Logo"
            src="/cloud_anon.png"
            width="50"
            className="d-inline-block align-top"
          />
          {' Anonymization as a Service'}
        </Navbar.Brand>
        <MoreInfoButton
          setShowMoreInfo={setShowMoreInfo}
        />
      </Navbar>
    </div>
  );
  return content;
};

export default NavbarMain;
