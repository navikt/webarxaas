import React from 'react';
import Table from './table/table';
import AnalyzeButton from './analyzeButton/analyzeButton';
import ArxRequest from '../../util/arxRequest';
import BuildPayload from '../../util/buildPayload';

const datasetWrapper = (props) => {
  let table;

  const {
    endpoint, dataset, attributes, setAttributes, setResponse,
  } = props;

  const handleRequest = (e, service) => {
    if (dataset && attributes) {
      const payload = BuildPayload(dataset, attributes);
      ArxRequest(endpoint, payload, service, setResponse);
    }
  };

  if (props.dataset) {
    table = (
      <Table
        dataset={dataset}
        setAttributes={setAttributes}
        attributes={attributes}
      />
    );
  } else {
    table = '';
  }

  const content = (
    <div className="dataset-container">
      {table}
      <AnalyzeButton
        handleRequest={handleRequest}
      />
    </div>
  );
  return content;
};

export default datasetWrapper;
