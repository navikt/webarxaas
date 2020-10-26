/* eslint-disable max-len */
import React from 'react';
import './__css__/GeneralInformation.css';
import QuestionMarkHelpText from './GeneralInformationHelpText/QuestionMarkHelpText';
import AttributeTypesDescription from '../AttributeTypesDescription/AttributeTypesDescription';
import PrivacyModels from '../PrivacyModels/PrivacyModels';

const GeneralInformation = () => {
  const content = (
    <div className="general-information">
      <h1>General Information</h1>
      <br />
      <div className="general-information-attribute">
        <table>
          <tbody>
            <tr>
              <td><p><b>Question mark help text:</b></p></td>
            </tr>
            <tr>
              <td><QuestionMarkHelpText /></td>
            </tr>
            <tr>
              <td><p>Click the question mark to display help text.</p></td>
            </tr>
          </tbody>
        </table>
        <p><b>CSV import file:</b></p>
        <ul>
          <li>
            <p>
              To display Æ, Ø, and Å, make sure the imported tabular dataset is saved as a CSV file with UTF-8.
            </p>
          </li>
        </ul>
        <AttributeTypesDescription />
        <p><b>Prosecutor model:</b></p>
        <ul>
          <li>
            <p>
              In the prosecutor model the attacker targets a specific individual,
              <br />
              and it is assumed that the attacker already knows that data about the
              individual, is contained in the dataset.
            </p>
          </li>
        </ul>
        <PrivacyModels />
      </div>
    </div>
  );

  return content;
};

export default GeneralInformation;
