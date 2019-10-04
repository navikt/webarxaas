import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './__css__/RiskDistributionGraph.css';
import RiskDistributionGraphHelpText from './RiskDistributionGraphHelpText/RiskDistributionGraphHelpText';

const RiskDistributionGraph = (props) => {
  const { RiskDistribution } = props;
  const riskData = [];

  RiskDistribution.forEach((obj) => {
    riskData.push({
      name: obj.interval,
      risk: (parseFloat(obj.recordsWithRiskWithinInterval) * 100).toFixed(2),
    });
  });

  const content = (
    <div className="risk-distribution-graph">
      <RiskDistributionGraphHelpText />
      <BarChart
        width={1000}
        height={500}
        data={riskData}
        margin={{
          top: 20, right: 40, left: 50, bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis label={{ value: 'Risk Interval', angle: 0, position: 'bottom' }} type="category" dataKey="name" angle={45} textAnchor="start" interval={0} height={80} reversed />
        <YAxis label={{ value: '[%]', angle: 0, position: 'left' }} type="number" ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} datakey="risk" />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="risk" name="Percentage of Records" fill="#ff0000" />
      </BarChart>
    </div>
  );
  return content;
};
export default RiskDistributionGraph;
