import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const MarketerModelHelpText = () => {
  const dialogTitleMarketerModel = 'Marketer model:';

  const dialogContentMarketerModel = (
    <div>
      <p>
        In the marketer model the attacker does not target a specific individual but aims at
        re-identifying a high number of individuals. An attack can therefore only be considered
        successful if a larger fraction of the records could be re-identified.
      </p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitleMarketerModel}
      dialogContent={dialogContentMarketerModel}
      buttonType
    />
  );
  return content;
};

export default MarketerModelHelpText;
