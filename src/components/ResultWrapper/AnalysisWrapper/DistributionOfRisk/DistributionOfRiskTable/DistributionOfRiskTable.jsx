import React from 'react';
import ReactTable from 'react-table';
import toPercent from '../../../../../util/ratioToPercent';
import 'react-table/react-table.css';

const DistributionOfRiskTable = (props) => {
  const { riskIntervalList } = props;
  const riskData = [];
  riskIntervalList.forEach((obj) => {
    riskData.push({
      interval: obj.interval,
      recordsWithRiskWithinInteval: toPercent(obj.recordsWithRiskWithinInteval),
      recordsWithMaxmalRiskWithinInterval: toPercent(obj.recordsWithMaxmalRiskWithinInterval),
    });
  });

  const columns = [{
    Header: 'Interval',
    accessor: 'interval',
  },
  {
    Header: 'Records With Risk',
    accessor: 'recordsWithRiskWithinInteval',
  },
  {
    Header: 'Records With Maximal Risk',
    accessor: 'recordsWithMaxmalRiskWithinInterval',
  }];

  const content = (
    <div>
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
