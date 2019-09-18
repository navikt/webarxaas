import React from '../../../node_modules/react';
import { Navbar } from '../../../node_modules/react-bootstrap';
import UserManualButton from './UserManualButton/UserManualButton';
import './__css__/NavbarMain.css';

const NavbarMain = () => {
  const content = (
    <div className="navbar-main">
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img
            alt="Service Logo"
            src="/img/logo-arxaas.png"
            width="50"
            className="d-inline-block align-top"
          />
          &nbsp;
          {' Anonymization as a Service'}
        </Navbar.Brand>
        <UserManualButton />
      </Navbar>
    </div>
  );
  return content;
};

export default NavbarMain;
