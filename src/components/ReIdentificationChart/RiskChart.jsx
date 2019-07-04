import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';


export default class RiskChart extends PureComponent {
  constructor(props) {
    super(props);
    let riskValue = 0;
    riskValue = props.risk;
    this.state = {
      riskData: [{
        name: 'Prosecutor Risk', risk: riskValue,
      }],
    };
  }

  render() {
    const { riskData } = this.state;
    return (
      <BarChart
        width={500}
        height={100}
        layout="vertical"
        data={riskData}
        margin={{
          top: 20, right: 40, left: 50, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontalPoints={[20]} />
        <XAxis type="number" ticks={[0, 25, 50, 75, 100]} />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="risk" fill="#f54542" />
      </BarChart>
    );
  }
}
RiskChart.propTypes = { risk: PropTypes.number };
RiskChart.defaultProps = { risk: 100 };
