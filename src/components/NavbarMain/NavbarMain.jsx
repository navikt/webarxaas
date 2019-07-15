import React from '../../../node_modules/react';
import { Navbar } from '../../../node_modules/react-bootstrap';
import MoreInfoButton from './MoreInfoButton/MoreInfoButton';

const NavbarMain = (props) => {
  const { setShowMoreInfo } = props;

  const content = (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Anonymization as a Service</Navbar.Brand>
      <MoreInfoButton
        setShowMoreInfo={setShowMoreInfo}
      />
    </Navbar>
  );
  return content;
};

export default NavbarMain;
