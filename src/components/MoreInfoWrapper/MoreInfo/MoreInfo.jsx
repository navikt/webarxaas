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
                To display Æ, Ø, and Å, make sure the imported tabular dataset is saved as a CSV file with UTF-8
              </p>
            </li>
          </ul>
          <p><b>Attribute types:</b></p>
          <ul>
            <li>
              <b>Identifying </b>
              attributes are associated with a high risk of re-identification. They will be removed from the dataset.
              Typical examples are names or Social Security Numbers.
            </li>
            <li>
              <b>Quasi-identifying </b>
              attributes can in combination be used for re-identification attacks.
              They will be transformed. Typical examples are gender, date of birth and ZIP codes.
            </li>
            <li>
              <b>Sensitive </b>
              attributes encode properties with which individuals are not willing to be linked with.
              As such, they might be of interest to an attacker and, if disclosed, could cause harm to data subjects.
              They will be kept unmodified but may be subject to further constraints, such as t-closeness or l-diversity.
              Typical examples are diagnoses.
            </li>
            <li>
              <b>Insensitive </b>
              attributes are not associated with privacy risks. They will be kept unmodified.
            </li>
          </ul>
          <p><b>Prosecutor model</b></p>
          <ul>
            <li>
              <p>
              In the prosecutor model the attacker targets a specific individual,
              and it is assumed that the attacker already knows that data about the individual, is contained in the dataset.
              </p>
            </li>
          </ul>
          <p><b>k-Anonymity</b></p>
          <ul>
            <li>
              <p>
              This well-known privacy model aims at protecting datasets from re-identification in the prosecutor model.
              A dataset is k-anonymous if each record cannot be distinguished from at least k-1 other records regarding the quasi-identifiers.
              Each group of indistinguishable records forms a so-called equivalence class.
              </p>
            </li>
          </ul>
          <p><b>ℓ-Diversity</b></p>
          <ul>
            <li>
              <p>
              This privacy model can be used to protect data against attribute disclosure by ensuring that each sensitive attribute has at least 
              ℓ well represented values in each equivalence class.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return content;
};

export default MoreInfo;
