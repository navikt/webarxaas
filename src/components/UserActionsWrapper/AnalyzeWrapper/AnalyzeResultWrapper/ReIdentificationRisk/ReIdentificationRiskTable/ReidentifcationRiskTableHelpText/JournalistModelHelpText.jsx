import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const JournalistModelHelpText = () => {
  const dialogTitleJournalistModel = 'Journalist model:';

  const dialogContentJournalistModel = (
    <div>
      <p>
        In the journalist model the attacker is trying to randomly re-identify a individual
        with no background knowledge on anyone in the dataset.
      </p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitleJournalistModel}
      dialogContent={dialogContentJournalistModel}
      buttonType
    />
  );

  return content;
};

export default JournalistModelHelpText;
