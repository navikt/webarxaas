import React from 'react';
import { Navbar } from 'react-bootstrap';
import FileUpload from './fileUpload';
import ArxRequest from '../../util/arxRequest';
import BuildPayload from '../../util/buildPayload';
import AnalyzeButton from './analyzeButton';
import MoreInfoButton from './MoreInfoButton';

const NavbarMain = (props) => {
  const {
    setAttributes, setDataset, endpoint, dataset, attributes, setResponse, setShowMoreInfo,
  } = props;

  const handleRequest = (e, service) => {
    if (dataset && attributes) {
      const payload = BuildPayload(dataset, attributes);
      ArxRequest(endpoint, payload, service, setResponse);
    }
  };

  const content = (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Anonymization as a Service</Navbar.Brand>
      <FileUpload
        setAttributes={setAttributes}
        setDataset={setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
      />
      <AnalyzeButton
        handleRequest={handleRequest}
      />
      <MoreInfoButton
        setShowMoreInfo={setShowMoreInfo}
      />
    </Navbar>
  );
  return content;
};

export default NavbarMain;
