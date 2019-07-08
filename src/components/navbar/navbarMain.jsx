import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarMain = () => {
  const content = (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Anonymization as a Service</Navbar.Brand>
    </Navbar>
  );
  return content;
};

export default NavbarMain;
