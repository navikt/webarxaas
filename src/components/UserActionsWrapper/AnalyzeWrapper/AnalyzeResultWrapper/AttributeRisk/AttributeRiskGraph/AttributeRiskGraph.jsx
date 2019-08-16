import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import './__css__/AttributeRiskGraph.css';
import HelpText from '../../../../../HelpTextWrapper/HelpText';

const dialogTitleDistinctionAndSeparation = 'Distinction and Separation:';

const dialogContentDistinctionAndSeparation = (
  <div>
    <p>
      <b>Distinction</b>
      {' '}
        represents the ratio between the unique values
        for the quasi-identifiers and the total number of records.
      <br />
      <br />
      <b>Separation</b>
      {' '}
      represents the ratio between pairs of records with at least one
       different value for their quasi-identifiers, and the total number
        of ways that two different records can be paired. In general, a
         higher distinction and separation are indicators that the
          quasi-identifiers are more likely to re-identify a record.
    </p>
  </div>
);

const AttributeRiskGraph = (props) => {
  const { attributeRisk } = props;
  const riskData = attributeRisk.quasiIdentifierRiskList
    .map(obj => ({
      identifier: obj.identifier,
      distinction: (parseFloat(obj.distinction) * 100).toFixed(2),
      separation: (parseFloat(obj.separation) * 100).toFixed(2),
    }));

  const content = (
    <div className="attribute-risk-graph">
      <HelpText
        dialogTitle={dialogTitleDistinctionAndSeparation}
        dialogContent={dialogContentDistinctionAndSeparation}
      />
      <BarChart
        width={1000}
        height={500}
        data={riskData}
        margin={{
          top: 20, right: 40, left: 50, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="identifier" angle={45} textAnchor="start" interval={0} height={150} />
        <YAxis type="number" ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} datakey="distinction" />
        <Tooltip />
        <Legend />
        <Bar dataKey="distinction" name="Distinction" fill="#f54542" />
        <Bar dataKey="separation" name="Separation" fill="#0f54f5" />
      </BarChart>
    </div>
  );
  return content;
};
export default AttributeRiskGraph;
