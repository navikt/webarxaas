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
        The risk is displayed [from,to) and the percentage of record
         affected by the risk is displayed in the Y-axis.
      </p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitleDistributionOfRiskTable}
      dialogContent={dialogContentDistributionOfRiskTable}
    />
  );
  return content;
};

export default RiskDistributionGraphHelpText;
