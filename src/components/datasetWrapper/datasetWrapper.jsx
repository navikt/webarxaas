import React from 'react';
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
    <div className="dataset-container">
      {table}
    </div>
  );
  return content;
};

export default datasetWrapper;
