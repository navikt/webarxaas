import React, { useState } from 'react';
import { Card, CardHeader } from '@material-ui/core';
import ImportHierarchies from './ImportHierarchies/ImportHierarchies';
import SuppressionLimit from './SuppressionLimit/SuppressionLimit';
import AnonymizeButton from './AnonymizeButton/AnonymizeButton';
import PrivacyModelWrapper from './PrivacyModelWrapper/PrivacyModelWrapper';
import './__css__/AnonymizationConfigWrapper.css';
import HierarchiesHelpText from './AnonymizationConfigWrapperHelpText/HierarchiesHelpText';
import PrivacyModelHelpText from './AnonymizationConfigWrapperHelpText/PrivacyModelHelpText';
import SuppressionLimitHelpText from './AnonymizationConfigWrapperHelpText/SuppressionLimitHelpText';

const AnonymizationConfigWrapper = (props) => {
  const {
    attributes, setAttributes,
    privacyModels, setPrivacyModels,
    suppressionLimit, setSuppressionLimit,
    setLoadingAnonymize, datasetFile, setResponse,
    endpoint,
  } = props;

  const [hierarchies, setHierarchies] = useState([]);

  const content = (
    <div className="anonymization-config-wrapper container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="hierarchy-import-card col">
            <Card>
              <CardHeader title="Import Hierarchies" />
              <HierarchiesHelpText />
              <ImportHierarchies
                hierarchies={hierarchies}
                setHierarchies={setHierarchies}
                attributes={attributes}
                setAttributes={setAttributes}
              />
            </Card>
          </div>
          <div className="privacy-model-manager-card col">
            <Card>
              <CardHeader title="Set Privacy Model(s)" />
              <PrivacyModelHelpText />
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
              <SuppressionLimitHelpText />
              <SuppressionLimit
                suppressionLimit={suppressionLimit}
                setSuppressionLimit={setSuppressionLimit}
              />
            </Card>
          </div>
        </div>
      </div>
      <AnonymizeButton
        hierarchies={hierarchies}
        setLoadingAnonymize={setLoadingAnonymize}
        datasetFile={datasetFile}
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
