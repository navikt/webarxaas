/* eslint-disable react/prop-types */
import React from 'react';
import ReactTable from 'react-table';
import { Select } from 'nav-frontend-skjema';
import HandleTypeSelect from '../../../util/handleTypeSelect';
import 'react-table/react-table.css';
import './__css__/DatasetTable.css';

const DatasetTable = React.memo(({ dataset, attributes, setAttributes }) => {
  const columns = Object.keys(dataset[0]).map((key, index) => ({
    Header:
      // eslint-disable-next-line react/jsx-indent
      <div className="dataset-table-column">
        <Select
          label=""
          onChange={(e) => {
            HandleTypeSelect(e.target, attributes[key].field, index, attributes, setAttributes);
          }}
        >
          <option value="QUASIIDENTIFYING">Quasi-identifying</option>
          <option value="INSENSITIVE">Insensitive</option>
          <option value="SENSITIVE">Sensitive</option>
          <option value="IDENTIFYING">Identifying</option>
        </Select>
        {dataset[0][key]}
      </div>,
    accessor: key,
    width: 164,
  }));

  const data = dataset.slice(1);

  const content = (
    <div className="dataset-table">
      <ReactTable
        data={data}
        columns={columns}
        sortable={false}
        defaultPageSize={5}
      />
    </div>
  );

  return content;
});

export default DatasetTable;
