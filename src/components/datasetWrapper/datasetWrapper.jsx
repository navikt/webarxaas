import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';
import AnalyzeButton from './analyzeButton/analyzeButton';
import FetchRequest from '../../util/fetchRequest';


const datasetWrapper = (props) => {
  let table;

  const {
    endpoint, dataset, attributes, setAttributes, setResponse,
  } = props;

  const buildPayload = () => {
    const jsonModel = {};
    jsonModel.data = dataset;
    jsonModel.attributes = attributes;
    jsonModel.privacyModels = [];
    jsonModel.suppressionLimit = null;
    return jsonModel;
  };

  const handleRequest = (e, service) => {
    const payload = buildPayload();
    // request(payload, service);
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
    table = <p>no table</p>;
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
