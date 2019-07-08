import React from 'react';
import Table from './table/table';
import AnalyzeButton from './analyzeButton';
import ArxRequest from '../../util/arxRequest';
import BuildPayload from '../../util/buildPayload';

const datasetWrapper = (props) => {
  let content;

  const {
    setAttributes, dataset, attributes, endpoint, setResponse,
  } = props;

  const handleRequest = (e, service) => {
    if (dataset && attributes) {
      const payload = BuildPayload(dataset, attributes);
      ArxRequest(endpoint, payload, service, setResponse);
    }
  };

  if (props.dataset) {
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
