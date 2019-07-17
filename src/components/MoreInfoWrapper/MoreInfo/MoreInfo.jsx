/* eslint-disable max-len */
import React from 'react';
import './__css__/MoreInfo.css';

const MoreInfo = (props) => {
  const { showMoreInfo } = props;

  let content = '';

  if (showMoreInfo) {
    content = (
      <div className="more-info">
        <h1>Information</h1>

        <div className="more-info-attribute">
          <p><b>CSV import file:</b></p>
          <ul>
            <li>
              <p>
                To display Æ, Ø, and Å, make sure the imported dataset is saved as a CSV file with UTF-8
              </p>
            </li>
          </ul>
          <p><b>Attribute types:</b></p>
          <ul>
            <li>
              <b>Identifying </b>
              attributes are associated with a high risk of re-identification. They will be removed from the dataset.
              <br />
              Typical examples are names or Social Security Numbers.
            </li>
            <li>
              <b>Quasi-identifying </b>
              attributes can in combination be used for re-identification attacks. They will be transformed. 
              Typical examples are gender, date of birth and ZIP codes.
            </li>
            <li>
              <b>Sensitive </b>
              attributes encode properties with which individuals are not willing to be linked with. 
              As such, they might be of interest to an attacker and, if disclosed, could cause harm to data subjects.
              They will be kept unmodified but may be subject to further constraints, such as t-closeness or l-diversity. Typical examples are diagnoses.
            </li>
            <li>
              <b>Insensitive </b>
              attributes are not associated with privacy risks. They will be kept unmodified.
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return content;
};

export default MoreInfo;
