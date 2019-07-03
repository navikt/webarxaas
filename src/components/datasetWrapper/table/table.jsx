import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Select } from 'nav-frontend-skjema';

const Table = (props) => {
  const columns = Object.keys(props.dataset[0]).map((key) => {
    return {
      Header:
        <div>
          <Select>
            <option value='QUASIIDENTIFYING'>Quasi-identifying</option>
            <option value='INSENSITIVE'>Insensitive</option>
            <option value='SENSITIVE'>Sensitive</option>
            <option value='IDENTIFYING'>Identifying</option>
          </Select>
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
        sortable={false}
      />
    </div>
  );

  return content;
};

export default Table;
