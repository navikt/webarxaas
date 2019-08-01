/* eslint-disable no-unused-vars */
import React from 'react';
import Chart from 'react-apexcharts';

const RiskDonut = (props) => {
  const { highestRisk, affectedRecords } = props;

  const optionsRadial = {
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 270,
        hollow: {
          size: '70%',
        },
        dataLabels: {
          total: {
            show: true,
            label: 'Highest prosecutor risk',
            formatter(w) {
              return `${highestRisk}%`;
            },
          },
        },
      },
    },
    fill: {
      colors: ['#f54542', '#f54542'],
    },
    labels: ['Records affected by highest prosecutor risk', 'Highest prosecutor risk'],
  };

  const content = (
    <div className="risk-donut">
      <p>{`Records affected by highest prosecutor risk: ${affectedRecords}%`}</p>
      <Chart options={optionsRadial} series={[affectedRecords, highestRisk]} type="radialBar" width="300" align="center" />
    </div>
  );
  return content;
};
export default RiskDonut;
