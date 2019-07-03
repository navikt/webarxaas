import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Table = (props) => {
  const columns = Object.keys(props.dataset[0]).map((key) => {
    return {
      Header:
  <div>
    <p>sfdf</p>
    {props.dataset[0][key]}
  </div>,
      accessor: key,
    };
  });

  const data = props.dataset.slice(1);

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
