import React from 'react';
import HierarchyImport from './HierachyImport/HeirarchyImport';
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
            <div className="heirarchy-import col border border-dark" align="center">
              <HierarchyImport
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </div>
            <div className="privacy-model col border border-dark" align="center">
              <PrivacyModelManager
                privacyModels={privacyModels}
                setPrivacyModels={setPrivacyModels}
              />
              <PrivacyModelTable
                privacyModels={privacyModels}
                setPrivacyModels={setPrivacyModels}
              />
            </div>
            <div className="suppression-limit col border border-dark" align="center">
              <SuppressionLimit
                suppressionLimit={suppressionLimit}
                setSuppressionLimit={setSuppressionLimit}
              />
            </div>
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
