import React from 'react';
import HierarchyImport from './HierachyImport/HeirarchyImport';
import PrivacyModelManager from './PrivacyModel/PrivacyModelManager';
import PrivacyModelTable from './PrivacyModel/PrivacyModelTable';
import SuppressionLimit from './SuppressionLimit/SuppressionLimit';
import AnonymizeButton from './AnonymizeButton/AnonymizeButton';

const AnonymizeConfigWrapper = (props) => {
  const {
    attributes, setAttributes,
    privacyModels, setPrivacyModels,
    suppressionLimit, setSuppressionLimit,
    showAnonymizeConfig, setLoadingAnonymize,
    setOperation, dataset, setResponse,
    endpoint,
  } = props;

  let content = '';

  if (showAnonymizeConfig) {
    content = (
      <div className="anonymize-config-wrapper">
        <div className="row">
          <div className="col-4">
            <HierarchyImport
              attributes={attributes}
              setAttributes={setAttributes}
            />
          </div>
          <div className="col-4">
            <PrivacyModelManager
              privacyModels={privacyModels}
              setPrivacyModels={setPrivacyModels}
            />
            <PrivacyModelTable
              privacyModels={privacyModels}
              setPrivacyModels={setPrivacyModels}
            />
          </div>
          <div className="col-4">
            <SuppressionLimit
              suppressionLimit={suppressionLimit}
              setSuppressionLimit={setSuppressionLimit}
            />
          </div>
        </div>
        <div className="anonymize-button">
          <AnonymizeButton
            setLoadingAnonymize={setLoadingAnonymize}
            setOperation={setOperation}
            dataset={dataset}
            attributes={attributes}
            privacyModels={privacyModels}
            suppressionLimit={suppressionLimit}
            setResponse={setResponse}
            endpoint={endpoint}
          />
        </div>
      </div>

    );
  }
  return content;
};
export default AnonymizeConfigWrapper;
