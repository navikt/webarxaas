import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Table = (props) => {
  const columns = Object.keys(props.currentData[0]).map((key) => {
    return {
      Header: props.currentData[0][key],
      accessor: key,
    };
  });


  const data = props.currentData.slice(1);

  const content = (
    <div align="center">
      <ReactTable
        data={data}
        columns={columns}
      />
    </div>
  );

  return content;
};

export default Table;
