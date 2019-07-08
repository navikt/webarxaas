import React from 'react';
import { Navbar } from 'react-bootstrap';
import FileUpload from './fileUpload';

const NavbarMain = (props) => {
  const {
    setAttributes, setDataset,
  } = props;

  const content = (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Anonymization as a Service</Navbar.Brand>
      <FileUpload
        setAttributes={setAttributes}
        setDataset={setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
      />
    </Navbar>
  );
  return content;
};

export default NavbarMain;
