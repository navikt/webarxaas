import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const ProsecutorModelHelpText = () => {
  const dialogTitleProsecutorModel = 'Prosecutor Model:';

  const dialogContentProsecutorModel = (
    <div>
      <p>
        In the prosecutor model the attacker targets a specific individual,
        <br />
        and it is assumed that the attacker already knows that data about the individual,
        is contained in the dataset.
      </p>
    </div>
  );
  const content = (
    <HelpText
      dialogTitle={dialogTitleProsecutorModel}
      dialogContent={dialogContentProsecutorModel}
      buttonType
    />
  );
  return content;
};

export default ProsecutorModelHelpText;
