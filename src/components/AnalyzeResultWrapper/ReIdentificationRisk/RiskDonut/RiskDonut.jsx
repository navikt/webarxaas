import React from 'react';
import Chart from 'react-apexcharts';

const RiskDonut = (props) => {
  const { highestRisk, affectedRecords } = props;

  const optionsRadial = {
    labels: ['Percent'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
  };

  const content = (
    <div className="risk-donut">
      <Chart options={optionsRadial} series={[affectedRecords, highestRisk]} type="radialBar" width="280" />
    </div>
  );
  return content;
};
export default RiskDonut;
