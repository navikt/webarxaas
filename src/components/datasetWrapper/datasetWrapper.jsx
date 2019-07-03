import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';

const datasetWrapper = (props) => {
  let table;

  if (props.dataset) {
    table = <Table dataset={props.dataset} />;
  } else {
    table = <p>no table</p>;
  }

  const content = (
    <div>
      <FileUpload
        setAttributes={props.setAttributes}
        setDataset={props.setDataset}
      />
      { table }
    </div>
  );
  return content;
};

export default datasetWrapper;
