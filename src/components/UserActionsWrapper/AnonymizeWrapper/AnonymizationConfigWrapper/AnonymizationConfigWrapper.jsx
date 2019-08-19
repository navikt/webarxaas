import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import ImportHierarchies from './ImportHierarchies/ImportHierarchies';
import SuppressionLimit from './SuppressionLimit/SuppressionLimit';
import AnonymizeButton from './AnonymizeButton/AnonymizeButton';
import PrivacyModelWrapper from './PrivacyModelWrapper/PrivacyModelWrapper';
import './__css__/AnonymizationConfigWrapper.css';
import HelpText from '../../../HelpTextWrapper/HelpText';

const AnonymizationConfigWrapper = (props) => {
  const {
    attributes, setAttributes,
    privacyModels, setPrivacyModels,
    suppressionLimit, setSuppressionLimit,
    setLoadingAnonymize, dataset, setResponse,
    endpoint,
  } = props;

  const dialogTitleHierarchies = 'Hierarchies:';

  const dialogContentHierarchies = (
    <p>
      Hierarchies are strategies that define how the data is generalized.
      <br />
      <br />
      Import hierarchy transformation models from CSV file.
    </p>
  );

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

  const dialogTitleSuppressionLimit = 'Suppression Limit:';

  const dialogContentSuppressionLimit = (
    <p>
     Suppression limit defines the percentage of rows ARX is allowed to delete from the dataset.
     <br />
     This is done to lower the amount of outliers in the dataset.
    </p>
  );

  const content = (
    <div className="anonymization-config-wrapper container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="hierarchy-import-card col">
            <Card>
              <CardHeader title="Import Hierarchies" />
              <HelpText
                dialogTitle={dialogTitleHierarchies}
                dialogContent={dialogContentHierarchies}
              />
              <ImportHierarchies
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </Card>
          </div>
          <div className="privacy-model-manager-card col">
            <Card>
              <CardHeader title="Set Privacy Model(s)" />
              <HelpText
                dialogTitle={dialogTitlePrivacyModel}
                dialogContent={dialogContentPrivacyModel}
              />
              <PrivacyModelWrapper
                attributes={attributes}
                privacyModels={privacyModels}
                setPrivacyModels={setPrivacyModels}
              />
            </Card>
          </div>
          <div className="suppression-limit-card col">
            <Card>
              <CardHeader title="Set Suppression Limit" />
              <HelpText
                dialogTitle={dialogTitleSuppressionLimit}
                dialogContent={dialogContentSuppressionLimit}
              />
              <SuppressionLimit
                suppressionLimit={suppressionLimit}
                setSuppressionLimit={setSuppressionLimit}
              />
            </Card>
          </div>
        </div>
      </div>
      <AnonymizeButton
        setLoadingAnonymize={setLoadingAnonymize}
        dataset={dataset}
        attributes={attributes}
        privacyModels={privacyModels}
        suppressionLimit={suppressionLimit}
        setResponse={setResponse}
        endpoint={endpoint}
      />
    </div>
  );
  return content;
};
export default AnonymizationConfigWrapper;
