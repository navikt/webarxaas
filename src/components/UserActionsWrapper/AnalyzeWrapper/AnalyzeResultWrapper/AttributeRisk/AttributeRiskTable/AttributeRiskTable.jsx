import React from 'react';
import ReactTable from 'react-table';
import toPercent from '../../../../../../util/ratioToPercent';
import 'react-table/react-table.css';

const AttributeRiskTable = (props) => {
  const { attributeRisk } = props;
  const riskData = attributeRisk.quasiIdentifierRiskList
    .map((obj) => ({
      identifier: obj.identifier.reduce((acc, item) => `${acc}, ${item}`),
      distinction: toPercent(obj.distinction),
      separation: toPercent(obj.separation),
    }));

  const columns = [{
    Header: 'Identifiers',
    accessor: 'identifier',
    style: {
      textAlign: 'left',
      whiteSpace: 'unset',
    },
  },
  {
    Header: 'Distinction',
    accessor: 'distinction',
    width: 100,
  },
  {
    Header: 'Separation',
    accessor: 'separation',
    width: 100,
  }];

  const content = (
    <div className="attribute-risk-table">
      <h3>Attribute Risk </h3>
      <ReactTable
        data={riskData}
        columns={columns}
        defaultPageSize={5}
      />
    </div>
  );
  return content;
};
export default AttributeRiskTable;
