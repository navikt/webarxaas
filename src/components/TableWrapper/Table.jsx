/* eslint-disable react/prop-types */
import React from 'react';
import ReactTable from 'react-table';
import { Select } from 'nav-frontend-skjema';
import HandleTypeSelect from '../../util/handleTypeSelect';

const Table = React.memo( ({ dataset, attributes, setAttributes, forceUpdate }) => {
  console.log("Table rerendered")
  console.log(attributes);
  const columns = Object.keys(dataset[0]).map((key, index) => ({
    Header:
      // eslint-disable-next-line react/jsx-indent
      <div>
        <Select
          value={attributes[key].attributeTypeModel}
          label=""
          onChange={(e) => {
            console.log(e);
            HandleTypeSelect(e.target, attributes[key].field, index, attributes, setAttributes);
            setAttributes(attributes);
            console.log(attributes);
            forceUpdate(Math.random());
          }}
        >
          <option key="QUASIIDENTIFYING" value="QUASIIDENTIFYING">Quasi-identifying</option>
          <option key="INSENSITIVE" value="INSENSITIVE">Insensitive</option>
          <option key="SENSITIVE" value="SENSITIVE">Sensitive</option>
          <option key="IDENTIFYING" value="IDENTIFYING">Identifying</option>
        </Select>
        {dataset[0][key]}
      </div>,
    accessor: key,
    width: 164,
  }));

  const data = dataset.slice(1);

  const content = (
    <div className="table-container">
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

export default Table;
