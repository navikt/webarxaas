import React from 'react';
import HelpText from '../../../HelpTextWrapper/HelpText';

const QuestionMarkHelpText = () => {
  const dialogTitleHelpText = 'HelpText:';

  const dialogContentHelpText = (
    <div>
      <p>
        Clicking the question mark will display the corresponding help text.
      </p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitleHelpText}
      dialogContent={dialogContentHelpText}
      buttonType
    />
  );

  return content;
};

export default QuestionMarkHelpText;
