import React from 'react';
import HierarchyImport from './HierachyImport/HeirarchyImport';
import PrivacyModelManager from './PrivacyModel/PrivacyModelManager';
import PrivacyModelTable from './PrivacyModel/PrivacyModelTable';
import SuppressionLimit from './SuppressionLimit/SuppressionLimit';

const AnonymizeConfigWrapper = (props) => {
  const {
    attributes, setAttributes,
    privacyModels, setPrivacyModels,
    suppressionLimit, setSuppressionLimit,
    showAnonymizeConfig,
  } = props;

  let content = '';

  if (showAnonymizeConfig) {
    content = (
      <div className="anonymize-wrapper">
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
      </div>

    );
  }
  return content;
};
export default AnonymizeConfigWrapper;
