import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import ImportHierarchies from './ImportHierarchies/ImportHierarchies';
import PrivacyModelWrapper from './PrivacyModelWrapper/PrivacyModelWrapper';
import SuppressionLimit from './SuppressionLimit/SuppressionLimit';
import AnonymizeButton from './AnonymizeButton/AnonymizeButton';
import './__css__/AnonymizationConfigWrapper.css';

const AnonymizationConfigWrapper = (props) => {
  const {
    attributes, setAttributes,
    privacyModels, setPrivacyModels,
    suppressionLimit, setSuppressionLimit,
    setLoadingAnonymize, dataset, setResponse,
    endpoint,
  } = props;

  const content = (
    <div className="anonymization-config-wrapper container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="hierarchy-import-card col">
            <Card>
              <CardHeader title="Import Hierarchies" />
              <ImportHierarchies
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </Card>
          </div>
          <div className="privacy-model-manager-card col">
            <Card>
              <CardHeader title="Set Privacy Model(s)" />
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
