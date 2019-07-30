import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import AnalysisWrapper from '../ResultWrapper/AnalysisWrapper/AnalysisWrapper';
import AnonymizationConfigWrapper from '../DatasetTableWrapper/AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import AnalyzeButton from '../DatasetTableWrapper/AnalyzeButton/AnalyzeButton';
import AnonymizedDatasetWrapper from '../ResultWrapper/AnonymizedDatasetWrapper/AnonymizedDatasetWrapper';

const userActionsWrapper = (props) => {
  const {
    setLoadingAnalyze,
    dataset,
    attributes,
    arxaasEndpoint,
    setAnalyzeResponse,
    analyzeResponse,
    loadingAnalyze,
    setAttributes,
    privacyModels,
    setPrivacyModels,
    suppressionLimit,
    setSuppressionLimit,
    setLoadingAnonymize,
    setAnonymizeResponse,
    anonymizeResponse,
    loadingAnonymize,
    fileName
  } = props;

  return (
    <div>
      <Ekspanderbartpanel tittel="Analyze" border style={dataset ? {} : { pointerEvents: 'none', opacity: '0.4' }}>
        <AnalyzeButton
          setLoadingAnalyze={setLoadingAnalyze}
          dataset={dataset}
          attributes={attributes}
          endpoint={arxaasEndpoint}
          setResponse={setAnalyzeResponse}
        />
        <AnalysisWrapper
          response={analyzeResponse}
          loadingAnalyze={loadingAnalyze}
        />
      </Ekspanderbartpanel>

      <Ekspanderbartpanel tittel="Anonymize" border style={dataset ? {} : { pointerEvents: 'none', opacity: '0.4' }}>
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
          endpoint={arxaasEndpoint}
        />
        <AnonymizedDatasetWrapper
          response={anonymizeResponse}
          loadingAnonymize={loadingAnonymize}
          fileName={fileName}
        />
      </Ekspanderbartpanel>
    </div>
  );
};

export default userActionsWrapper;
