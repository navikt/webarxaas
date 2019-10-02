import React from 'react';
import HelpText from '../../../../HelpTextWrapper/HelpText';

const SuppressionLimitHelpText = () => {
  const dialogTitleSuppressionLimit = 'Suppression Limit:';

  const dialogContentSuppressionLimit = (
    <p>
      Suppression limit defines the percentage of rows allowed to delete from the dataset.
      <br />
      This is done to lower the amount of outliers in the dataset.
    </p>
  );
  const content = (
    <HelpText
      dialogTitle={dialogTitleSuppressionLimit}
      dialogContent={dialogContentSuppressionLimit}
      buttonType
    />
  );
  return content;
};

export default SuppressionLimitHelpText;
