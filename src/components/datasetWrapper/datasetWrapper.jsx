import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Table from './table/table';
import AnalyzeButton from './analyzeButton';
import ArxRequest from '../../util/arxRequest';
import BuildPayload from '../../util/buildPayload';

const datasetWrapper = (props) => {
  let content;

  const {
    loadingDataset, setAttributes, dataset, attributes, endpoint, setResponse,
  } = props;

  const handleRequest = (e, service) => {
    if (dataset && attributes) {
      const payload = BuildPayload(dataset, attributes);
      ArxRequest(endpoint, payload, service, setResponse);
    }
  };

  if (loadingDataset) {
    content = (
      <div className="dataset-container">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (dataset) {
    content = (
      <div className="dataset-container">
        <Table
          setAttributes={setAttributes}
          dataset={dataset}
          attributes={attributes}
        />
        <AnalyzeButton
          handleRequest={handleRequest}
        />
      </div>
    );
  } else {
    content = '';
  }

  return content;
};

export default datasetWrapper;
