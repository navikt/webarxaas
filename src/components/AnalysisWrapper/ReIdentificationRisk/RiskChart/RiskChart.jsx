import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './__css__/RiskChart.css';

const RiskChart = (props) => {
  const { risk } = props;
  const riskData = [{
    name: '', risk,
  }];

  const content = (
    <div className="risk-chart">
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
        <Bar dataKey="risk" fill="#f54542" barSize={40} name="Average Prosecutor Risk" />
      </BarChart>
    </div>
  );
  return content;
};

export default RiskChart;
RiskChart.defaultProps = { risk: 100 };
