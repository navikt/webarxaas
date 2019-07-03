import React from 'react';
import FileUpload from './fileUpload/fileUpload';
import Table from './table/table';



const datasetWrapper = (props) => {

  let table;

  if (props.currentData){
   table = <Table currentData={props.currentData} />
  }else {
    table = <p>no table</p>
  }

  const content = (
    <div>
      <FileUpload
        setAttributes={props.setAttributes}
        setData={props.setData}
      />

        {table}
      
    </div>
  );
  return content;
};

export default datasetWrapper;
