import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';

const datasetWrapper = (props) => {
  let table;

  const {
    dataset, attributes, setAttributes,
  } = props;

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
    </div>
  );
  return content;
};

export default datasetWrapper;
