import React from 'react';
import HierarchyImport from './HierachyImport/HeirarchyImport';
import PrivacyModelManager from './PrivacyModel/PrivacyModelManager';
import PrivacyModelTable from './PrivacyModel/PrivacyModelTable';
import SuppressionLimit from './SuppressionLimit/SuppressionLimit';
import AnonymizeButton from './AnonymizeButton/AnonymizeButton';

const AnonymizationConfigWrapper = (props) => {
  const {
    attributes, setAttributes,
    privacyModels, setPrivacyModels,
    suppressionLimit, setSuppressionLimit,
    showAnonymizationConfig, setLoadingAnonymize,
    setOperation, dataset, setResponse,
    endpoint,
  } = props;

  let content = '';

  if (showAnonymizationConfig) {
    content = (
      <div className="anonymization-config-wrapper container-fluid">
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col" align="center">
              <br />
              <HierarchyImport
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </div>
            <div className="col" align="center">
              <br />
              <PrivacyModelManager
                privacyModels={privacyModels}
                setPrivacyModels={setPrivacyModels}
              />
              <PrivacyModelTable
                privacyModels={privacyModels}
                setPrivacyModels={setPrivacyModels}
              />
            </div>
            <div className="col" align="center">
              <br />
              <SuppressionLimit
                suppressionLimit={suppressionLimit}
                setSuppressionLimit={setSuppressionLimit}
              />
            </div>
          </div>
        </div>
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
    );
  }
  return content;
};
export default AnonymizationConfigWrapper;
