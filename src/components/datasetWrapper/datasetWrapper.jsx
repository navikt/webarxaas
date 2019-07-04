import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';
import AnalyzeButton from './analyzeButton/analyzeButton';


const datasetWrapper = (props) => {
  let table;

  const { endpoint, dataset, attributes, setAttributes, setResponse } = props;

  const request = (payload, service) => {
    fetch(endpoint + '/api/' + service, {
      crossDomain: true,
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      console.log(endpoint + '/api/' + service)
      return response.json();
    }).then(function (data) {
      setResponse(data)
      console.log(data)
    });
  };

  const handleRequest = (e, service) => {
    const payload = buildPayload();
    request(payload, service);
  };

  const buildPayload = () => {
    let jsonModel = {};
    jsonModel['data'] = dataset;
    jsonModel['attributes'] = attributes;
    jsonModel['privacyModels'] = [];
    jsonModel["suppressionLimit"] = null;
    return jsonModel
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
        handleRequest = {handleRequest}
      />
    </div>
  );
  return content;
};

export default datasetWrapper;
