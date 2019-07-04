import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';
import AnalyzeButton from './analyzeButton/analyzeButton';
import FetchRequest from '../../util/fetchRequest';
import BuildPayload from '../../util/buildPayload';

const datasetWrapper = (props) => {
  let table;

  const {
    endpoint, dataset, attributes, setAttributes, setResponse,
  } = props;

  const handleRequest = (e, service) => {
    const payload = BuildPayload(dataset, attributes);
    FetchRequest(endpoint, payload, service, setResponse);
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
    <div>
      <FileUpload
        setAttributes={props.setAttributes}
        setDataset={props.setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
      />
      {table}
      <AnalyzeButton
        handleRequest={handleRequest}
      />
    </div>
  );
  return content;
};

export default datasetWrapper;
