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
              <br />
              Typical examples are names or Social Security Numbers.
            </li>
            <br />
            <li>
              <b>Quasi-identifying </b>
              attributes can in combination be used for re-identification attacks.
              <br />
              They will be transformed. Typical examples are gender, date of birth and ZIP codes.
            </li>
            <br />
            <li>
              <b>Sensitive </b>
              attributes encode properties with which individuals are not willing to be linked with.
              <br />
              As such, they might be of interest to an attacker and, if disclosed, could cause harm to data subjects.
              <br />
              They will be kept unmodified but may be subject to further constraints, such as t-closeness or l-diversity.
              <br />
              Typical examples are diagnoses.
            </li>
            <br />
            <li>
              <b>Insensitive </b>
              attributes are not associated with privacy risks. They will be kept unmodified.
            </li>
          </ul>
          <p><b>Prosecutor model</b></p>
          <ul>
            <li>
              <p>
              In the prosecutor model the attacker targets a specific individual
                <br />
              and it is assumed that she already knows that data about the individual is contained in the dataset.
              </p>
            </li>
          </ul>
          <p><b>k-Anonymity</b></p>
          <ul>
            <li>
              <p>
              This well-known privacy model aims at protecting datasets from re-identification in the prosecutor model.
                <br />
              A dataset is k-anonymous if each record cannot be distinguished from at least k-1 other records regarding the quasi-identifiers.
                <br />
              Each group of indistinguishable records forms a so-called equivalence class. More information can be found 
                {' '}
                <a href="https://www.worldscientific.com/doi/abs/10.1142/S0218488502001648">here.</a>
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
