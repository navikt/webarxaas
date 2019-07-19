/* eslint-disable react/prop-types */
import React from 'react';
import ReactTable from 'react-table';
import { Select } from 'nav-frontend-skjema';
import HandleTypeSelect from '../../../util/handleTypeSelect';
import 'react-table/react-table.css';

const DatasetTable = React.memo(({ dataset, attributes, setAttributes }) => {
  const isSelected = (attribute, value) => attribute.attributeTypeModel === value;
  const types = [
    ['QUASIIDENTIFYING', 'Quasi-identifying'],
    ['INSENSITIVE', 'Insensitive'],
    ['SENSITIVE', 'Sensitive'],
    ['IDENTIFYING', 'Identifying'],
  ];

  const columns = Object.keys(dataset[0]).map(index => ({
    Header:
      // eslint-disable-next-line react/jsx-indent
      <div>
        <Select
          label=""
          onChange={(e) => {
            HandleTypeSelect(e.target, attributes[index].field, index, attributes, setAttributes);
          }}
        >
          {types.map(([value, label]) => (
            <option
              value={value}
              key={value}
              selected={isSelected(attributes[index], value)}
            >
              {label}
            </option>
          ))}
        </Select>
        {dataset[0][index]}
      </div>,
    accessor: index,
    width: 164,
  }));

  const data = dataset.slice(1);

  const content = (
    <ReactTable
      data={data}
      columns={columns}
      sortable={false}
      defaultPageSize={5}
    />
  );

  return content;
});

export default DatasetTable;
