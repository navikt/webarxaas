import React from 'react';
import ReactTable from 'react-table';
import toPercent from '../../../../../../util/ratioToPercent';
import 'react-table/react-table.css';
import './__css__/DistributionOfRiskTable.css';

const DistributionOfRiskTable = (props) => {
  const { riskIntervalList } = props;
  const riskData = [];
  riskIntervalList.forEach((obj) => {
    riskData.push({
      interval: obj.interval,
      recordsWithRiskWithinInterval: toPercent(obj.recordsWithRiskWithinInterval),
      recordsWithMaximalRiskWithinInterval: toPercent(obj.recordsWithMaximalRiskWithinInterval),
    });
  });

  const columns = [{
    Header: 'Interval',
    accessor: 'interval',
  },
  {
    Header: 'Records With Risk',
    accessor: 'recordsWithRiskWithinInterval',
  },
  {
    Header: 'Records With Maximal Risk',
    accessor: 'recordsWithMaximalRiskWithinInterval',
  }];

  const content = (
    <div className="distribution-of-risk-table">
      <h3>Risk Interval</h3>
      <ReactTable
        data={riskData}
        columns={columns}
        defaultPageSize={24}
      />
    </div>
  );
  return content;
};

export default DistributionOfRiskTable;
