import React from 'react';
import HelpText from '../HelpTextWrapper/HelpText';
import './__css__/DisclaimerHelpText.css';

const DisclaimerHelpText = () => {
  const dialogTitleHelpText = 'Disclaimer';

  const dialogContentHelpText = (
    <div>
      <p>
        The results of the analysis and anonymization is
        calculated by using the “ARX - Data Anonymization Tool” and is not a guarantee
        that the dataset is anonymous, legally or otherwise. The results show the different
        re-identification risks connected to the dataset and is anonymised based on the
        specifications that the user applied.
      </p>
      <ul>
        <li>
          The default parameters for the privacy models provided by the applications do not
          guarantee that the dataset is sufficiently anonymised.
        </li>
        <li>
          The user is advised that all privacy models have limitations and may not cover
          all possible present or future risk scenarios.
        </li>
        <li>
          No data or informasjon is stored after anonymization and analyzation is
          completed, except for logs for operational purposes. The logs contain ip requests
          origin, size of the request and privacy models used.
        </li>
        <li>
          The user is responsible for determining the acceptable risk level.
        </li>
      </ul>
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
