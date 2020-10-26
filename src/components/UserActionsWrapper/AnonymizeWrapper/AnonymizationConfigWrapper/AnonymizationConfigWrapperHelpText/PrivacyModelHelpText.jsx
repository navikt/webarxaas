import React from 'react';
import HelpText from '../../../../HelpTextWrapper/HelpText';

const PrivacyModelHelpText = () => {
  const dialogTitlePrivacyModel = 'Privacy Models:';

  const dialogContentPrivacyModel = (
    <div>
      <p><b>k-Anonymity</b></p>
      <ul>
        <li>
          <p>
            This well-known privacy model aims at protecting dataset from
            re-identification in the prosecutor model.
            <br />
            A dataset is k-anonymous if each record cannot be distinguished
            from at least k-1 other records regarding the quasi-identifiers.
            <br />
            Each group of indistinguishable records forms a so-called equivalence class.
          </p>
        </li>
      </ul>
      <p><b>ℓ-Diversity</b></p>
      <ul>
        <li>
          <p>
            This privacy model can be used to protect data against attribute
            disclosure by ensuring that each sensitive attribute has at least
            <br />
            ℓ well represented values in each equivalence class.
          </p>
        </li>
      </ul>
      <p><b>t-Closeness</b></p>
      <ul>
        <li>
          <p>
            This privacy model can also be used to protect data from attribute
            disclosure. It requires that the distributions of values of a
            <br />
            sensitive attribute within each equivalence class must have a distance
            of not more than t to the distribution of the attribute values in the input dataset.
          </p>
        </li>
      </ul>
    </div>
  );
  const content = (
    <HelpText
      dialogTitle={dialogTitlePrivacyModel}
      dialogContent={dialogContentPrivacyModel}
      buttonType
    />
  );
  return content;
};

export default PrivacyModelHelpText;
