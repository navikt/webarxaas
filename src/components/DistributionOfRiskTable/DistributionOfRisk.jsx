import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const DistributionOfRisk = (props) => {
  const { riskIntervalList } = props;

  const columns = [{
    Header: 'Interval',
    accessor: 'interval',
  },
  {
    Header: 'RecordsWithRisk',
    accessor: 'recordsWithRiskWithinInteval',
  },
  {
    Header: 'RecordsWithMaxmalRisk',
    accessor: 'recordsWithMaxmalRiskWithinInterval',
  }];

  const content = (
    <div>
      <h3>Risk Interval</h3>
      <ReactTable
        data={riskIntervalList}
        columns={columns}
        defaultPageSize={24}
      />
    </div>
  );
  return content;
};

export default DistributionOfRisk;
