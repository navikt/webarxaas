/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import Alert from 'react-bootstrap/Alert';
import 'react-table/react-table.css';
import AttributeTypeSelector from './AttributeTypeSelector/AttributeTypeSelector';
import './__css__/DatasetTable.css';

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
        <AttributeTypeSelector
          defaultTypes={defaultTypes}
          setDefaultTypes={setDefaultTypes}
          types={types}
          attributes={attributes}
          index={index}
          setAttributes={setAttributes}
        />
        {dataset[0][index]}
      </div>,
    accessor: index,
    width: 164,
  }));

  const data = dataset.slice(1, 101);

  const content = (
    <div className="dataset-table">
      <Alert variant="info">
        Previewing first 100 of
        {' '}
        {dataset.length}
        {' '}
        rows in dataset:
      </Alert>
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
