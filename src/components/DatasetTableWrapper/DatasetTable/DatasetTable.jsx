/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import { Select } from 'nav-frontend-skjema';
import HandleTypeSelect from '../../../util/handleTypeSelect';
import 'react-table/react-table.css';

const DatasetTable = React.memo(({ dataset, attributes, setAttributes }) => {
  const [defaultTypes, setDefaultTypes] = useState(attributes.map(attr => attr.attributeTypeModel));

  useEffect(() => {
    setDefaultTypes(attributes.map(attr => attr.attributeTypeModel));
  }, [attributes]);

  const types = [
    ['QUASIIDENTIFYING', 'Quasi-identifying'],
    ['INSENSITIVE', 'Insensitive'],
    ['SENSITIVE', 'Sensitive'],
    ['IDENTIFYING', 'Identifying'],
  ];
  const columns = Object.keys(dataset[0]).map(index => ({
    Header:
      // eslint-disable-next-line react/jsx-indent
      <div className="dataset-table-column">
        <Select
          label=""
          value={defaultTypes[index]}
          onChange={(e) => {
            const currentTypes = [...defaultTypes];
            currentTypes[index] = e.target.value;
            setDefaultTypes(currentTypes);
            HandleTypeSelect(e.target, attributes[index].field, index, attributes, setAttributes);
          }}
        >
          {types.map(([value, label]) => (
            <option
              value={value}
              key={value}
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

  const data = dataset.slice(1, 101);

  const content = (
    <div className="dataset-table">
      <h3 className="text-left ml-2">
        Previewing first 100 rows of
        {' '}
        { dataset.length }
        {' '}
        rows in total:
      </h3>
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
