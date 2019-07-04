import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';
import AnalyzeButton from './analyzeButton/analyzeButton';


const datasetWrapper = (props) => {
  let table;

  if (props.dataset) {
    table = (
      <Table
        dataset={props.dataset}
        setAttributes={props.setAttributes}
        attributes={props.attributes}
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
      <AnalyzeButton />
    </div>
  );
  return content;
};

export default datasetWrapper;
