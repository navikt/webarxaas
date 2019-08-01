import React from 'react';
import Card from 'react-bootstrap/Card';
import ImportHierarchies from './ImportHierarchies/ImportHierarchies';
import PrivacyModelManager from './PrivacyModel/PrivacyModelManager';
import PrivacyModelTable from './PrivacyModel/PrivacyModelTable';
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
              <Card.Body>
                <Card.Title>Import Hierarchies</Card.Title>
                <ImportHierarchies
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              </Card.Body>
            </Card>
          </div>
          <div className="privacy-model-card col">
            <Card>
              <Card.Body>
                <Card.Title>Set Privacy Model(s)</Card.Title>
                <PrivacyModelManager
                  privacyModels={privacyModels}
                  setPrivacyModels={setPrivacyModels}
                />
                <PrivacyModelTable
                  privacyModels={privacyModels}
                  setPrivacyModels={setPrivacyModels}
                />
              </Card.Body>
            </Card>
          </div>
          <div className="suppression-limit-card col">
            <Card>
              <Card.Body>
                <Card.Title>Set Suppression Limit</Card.Title>
                <SuppressionLimit
                  suppressionLimit={suppressionLimit}
                  setSuppressionLimit={setSuppressionLimit}
                />
              </Card.Body>
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
