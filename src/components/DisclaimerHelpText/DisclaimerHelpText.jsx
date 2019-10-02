import React from 'react';
import HelpText from '../HelpTextWrapper/HelpText';
import './__css__/DisclaimerHelpText.css';

const DisclaimerHelpText = () => {
  const dialogTitleHelpText = 'Disclaimer';

  const dialogContentHelpText = (
    <div>
      <p>
        content coming soon.
      </p>
    </div>
  );

  const content = (
    <div className="disclaimer-wrapper">
      <p className="disclaimer-text">
        By using this service you acknowledge
         that you have read and understand the
      </p>
      <span className="disclaimer-text disclaimer-button">
        <HelpText
          dialogTitle={dialogTitleHelpText}
          dialogContent={dialogContentHelpText}
          buttonType={false}
        />
      </span>
    </div>
  );

  return content;
};

export default DisclaimerHelpText;
