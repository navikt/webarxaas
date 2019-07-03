import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';

const datasetWrapper = (props) => {
  const content = (
    <div>
      <FileUpload
        setAttributes={props.setAttributes}
        setData={props.setData}
      />
      <Table />
    </div>
  );
  return content;
};

export default datasetWrapper;
