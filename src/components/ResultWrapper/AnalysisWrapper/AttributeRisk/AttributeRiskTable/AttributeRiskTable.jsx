import React from 'react';
import ReactTable from 'react-table';
import toPercent from '../../../../../util/ratioToPercent';
import 'react-table/react-table.css';

const AttributeRiskTable = (props) => {
  const { attributeRisk } = props;
  const riskData = attributeRisk.quasiIdentifierRiskList
    .filter(quasiIdentifierRisk => quasiIdentifierRisk.identifier.length > 1)
    .map(obj => ({
      identifier: obj.identifier.toString(),
      distinction: toPercent(obj.distinction),
      separation: toPercent(obj.separation),
    }));

  const columns = [{
    Header: 'Identifiers',
    accessor: 'identifier',
  },
  {
    Header: 'Distinction',
    accessor: 'distinction',
  },
  {
    Header: 'Separation',
    accessor: 'separation',
  }];

  const content = (
    <div className="attribute-risk-table">
      <h3>Attribute Risk</h3>
      <ReactTable
        data={riskData}
        columns={columns}
        defaultPageSize={24}
      />
    </div>
  );
  return content;
};
export default AttributeRiskTable;
