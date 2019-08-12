import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './__css__/RiskBarometer2Bars.css';

const RiskBarometer2Bars = (props) => {
  const { highestRisk, affectedRecords } = props;
  const riskData = [{
    name: '', highestRisk, affectedRecords,
  }];

  const content = (
    <div className="risk-barometer-2-bars">
      <BarChart
        width={1000}
        height={150}
        layout="vertical"
        data={riskData}
        margin={{
          top: 20, right: 40, left: 50, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontalPoints={[20]} />
        <XAxis type="number" ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="highestRisk" fill="#ff0000" barSize={40} name="Highest Prosecutor Risk" />
        <Bar dataKey="affectedRecords" fill="#1258ba" barSize={40} name="Records Affected by Highest Prosecutor Risk" />
      </BarChart>
    </div>
  );
  return content;
};

export default RiskBarometer2Bars;
RiskBarometer2Bars.defaultProps = { risk: 100 };
