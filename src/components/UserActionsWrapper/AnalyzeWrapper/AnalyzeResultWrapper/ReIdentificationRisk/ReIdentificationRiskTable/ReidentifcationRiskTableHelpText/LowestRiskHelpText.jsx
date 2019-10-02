import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const LowestRiskHelpText = () => {
  const dialogTitleLowestRisk = 'Lowest Risk:';

  const dialogContentLowestRisk = (
    <div>
      <p>
        <b>Lowest risk </b>
        displays the lowest risk in the dataset.
        <br />
        <br />
        <b>
          Records affected by lowest risk
          {' '}
        </b>
        displays the percentage of records with the lowest risk.
      </p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitleLowestRisk}
      dialogContent={dialogContentLowestRisk}
      buttonType
    />
  );
  return content;
};

export default LowestRiskHelpText;
