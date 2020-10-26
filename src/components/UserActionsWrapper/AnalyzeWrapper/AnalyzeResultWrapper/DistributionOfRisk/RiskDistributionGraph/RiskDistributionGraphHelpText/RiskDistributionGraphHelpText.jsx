import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const RiskDistributionGraphHelpText = () => {
  const dialogTitleDistributionOfRiskTable = 'Distribution Of Risk:';

  const dialogContentDistributionOfRiskTable = (
    <div>
      <p>
        In this graph, the distribution of re-identification risk
        amongst the records of the dataset is displayed.
        <br />
        <br />
        The X-axis displays the risk [from,to).
        <br />
        The Y-axis displays the percentage of record affected by the risk.
      </p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitleDistributionOfRiskTable}
      dialogContent={dialogContentDistributionOfRiskTable}
      buttonType
    />
  );
  return content;
};

export default RiskDistributionGraphHelpText;
