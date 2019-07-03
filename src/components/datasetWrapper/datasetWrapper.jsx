import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';

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
        attributeTypeModel={'QUASIIDENTIFYING'}
      />
      {table}
    </div>
  );
  return content;
};

export default datasetWrapper;
