import React from 'react';
import Table from './table/table';

const datasetWrapper = (props) => {
  let table;

  const {
    setAttributes, dataset, attributes,
  } = props;

  if (props.dataset) {
    table = (
      <Table
        setAttributes={setAttributes}
        dataset={dataset}
        attributes={attributes}
      />
    );
  } else {
    table = '';
  }

  const content = (
    <div className="dataset-container">
      {table}
    </div>
  );
  return content;
};

export default datasetWrapper;
