import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const AttributeGeneralizationLevel = (props) => {
  const { attributeGeneralization } = props;
  const columns = [{
    Header: 'Name',
    accessor: 'name',
  }, {
    Header: 'Type',
    accessor: 'type',
  }, {
    Header: 'Generalization level',
    accessor: 'generalizationLevel',
  },
  ];
  const content = (
    <div className="attribute-generalization-level">
      <ReactTable
        data={attributeGeneralization}
        columns={columns}
        defaultPageSize={5}
      />
    </div>
  );
  return content;
};
export default AttributeGeneralizationLevel;
