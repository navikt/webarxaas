import React from 'react';
import { Navbar } from 'react-bootstrap';
import FileUpload from './fileUpload';
import ArxRequest from '../../util/arxRequest';
import BuildPayload from '../../util/buildPayload';
import AnalyzeButton from './analyzeButton';

const NavbarMain = (props) => {
  const {
    setAttributes, setDataset, endpoint, dataset, attributes, setResponse,
  } = props;

  const handleRequest = (e, service) => {
    if (dataset && attributes) {
      const payload = BuildPayload(dataset, attributes);
      ArxRequest(endpoint, payload, service, setResponse);
    }
  };

  const content = (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Anonymization as a Service</Navbar.Brand>
      <FileUpload
        setAttributes={setAttributes}
        setDataset={setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
      />
      <AnalyzeButton
        handleRequest={handleRequest}
      />
    </Navbar>
  );
  return content;
};

export default NavbarMain;
