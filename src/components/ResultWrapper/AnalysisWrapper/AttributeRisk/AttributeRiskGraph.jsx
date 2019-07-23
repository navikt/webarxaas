import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './__css__/AttributeRiskGraph.css';

const AttributeRiskGraph = (props) => {
  const { attributeRisk } = props;
  const riskData = [];

  attributeRisk.quasiIdentifierRiskList.forEach((obj) => {
    riskData.push({
      name: obj.identifier,
      distinction: (parseFloat(obj.distinction) * 100).toFixed(2),
      separation: (parseFloat(obj.separation) * 100).toFixed(2),
    });
  });

  const content = (
    <div className="attribute-risk-graph">
      <BarChart
        width={1000}
        height={500}
        data={riskData}
        margin={{
          top: 20, right: 40, left: 50, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="name" angle={45} textAnchor="start" interval={0} height={80} />
        <YAxis type="number" ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} datakey="distinction" />
        <Tooltip />
        <Legend />
        <Bar dataKey="distinction" name="Percentage" fill="#f54542" />
      </BarChart>
    </div>
  );
  return content;
};
export default AttributeRiskGraph;
