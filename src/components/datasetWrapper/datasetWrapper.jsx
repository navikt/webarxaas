import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Table from './table/table';
import AnalyzeButton from './analyzeButton';
import ArxRequest from '../../util/arxRequest';
import BuildPayload from '../../util/buildPayload';

const datasetWrapper = (props) => {
  const {
    loadingDataset, setLoadingAnalysis, setAttributes, dataset, attributes, endpoint, setResponse,
  } = props;

  const handleRequest = (e, service) => {
    if (dataset && attributes) {
      const payload = BuildPayload(dataset, attributes);
      ArxRequest(setLoadingAnalysis, endpoint, payload, service, setResponse);
    }
  };

  let content;

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
          setLoadingAnalysis={setLoadingAnalysis}
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
