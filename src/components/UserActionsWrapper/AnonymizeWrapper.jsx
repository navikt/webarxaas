import React from 'react';
import AnonymizationConfigWrapper from '../AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import AnonymizedDatasetWrapper from '../AnonymizedDatasetWrapper/AnonymizedDatasetWrapper';

const AnonymizeWrapper = (props) => {
  const {
    dataset,
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
        dataset={dataset}
        setResponse={setAnonymizeResponse}
        endpoint={endpoint}
      />
      <AnonymizedDatasetWrapper
        response={anonymizeResponse}
        loadingAnonymize={loadingAnonymize}
        fileName={fileName}
      />
    </div>
  );
};

export default AnonymizeWrapper;
