import React from 'react';
import PropTypes from 'prop-types';
import AnonymizationConfigWrapper from './AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import AnonymizedDatasetWrapper from './AnonymizedDatasetWrapper/AnonymizedDatasetWrapper';

const AnonymizeWrapper = (props) => {
  const {
    datasetFile,
    fileName,
    attributes,
    endpoint,
    setAttributes,
    privacyModels,
    setPrivacyModels,
    suppressionLimit,
    setSuppressionLimit,
    setAnonymizeResponse,
    anonymizeResponse,
    setLoadingAnonymize,
    loadingAnonymize,
  } = props;
  return (
    <div>
      <AnonymizationConfigWrapper
        setAttributes={setAttributes}
        attributes={attributes}
        privacyModels={privacyModels}
        setPrivacyModels={setPrivacyModels}
        suppressionLimit={suppressionLimit}
        setSuppressionLimit={setSuppressionLimit}
        setLoadingAnonymize={setLoadingAnonymize}
        datasetFile={datasetFile}
        setResponse={setAnonymizeResponse}
        endpoint={endpoint}
      />
      <AnonymizedDatasetWrapper
        response={anonymizeResponse}
        loadingAnonymize={loadingAnonymize}
        fileName={fileName}
        attributes={attributes}
        privacyModels={privacyModels}
        suppressionLimit={suppressionLimit}
      />
    </div>
  );
};

AnonymizeWrapper.propTypes = {
  datasetFile: PropTypes.objectOf(PropTypes.object).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  endpoint: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  setAttributes: PropTypes.func.isRequired,
  privacyModels: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPrivacyModels: PropTypes.func.isRequired,
  suppressionLimit: PropTypes.number.isRequired,
  setSuppressionLimit: PropTypes.func.isRequired,
  setAnonymizeResponse: PropTypes.func.isRequired,
  anonymizeResponse: PropTypes.objectOf(PropTypes.object).isRequired,
  setLoadingAnonymize: PropTypes.func.isRequired,
  loadingAnonymize: PropTypes.bool.isRequired,
};

export default AnonymizeWrapper;
