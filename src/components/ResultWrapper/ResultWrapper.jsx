import React from 'react';
import AnalysisWrapper from './AnalysisWrapper/AnalysisWrapper';
import AnonymizationWrapper from './AnonymizationWrapper/AnonymizationWrapper';

const ResultWrapper = (props) => {
  const {
    response, setResponse, loadingAnalyze, loadingAnonymize, operation,
  } = props;
  const { message, reIdentificationRisk, anonymizeResult } = response;

  let content = (
    <div className="result-wrapper">
      <AnalysisWrapper loadingAnalyze={loadingAnalyze} />
    </div>
  );

  if (message) {
    content = (
      <div className="result-wrapper">
        <b>Something went wrong. Error:</b>
        <br />
        {message}
      </div>
    );
  }
  if (operation === 'Anonymize' && anonymizeResult) {
    content = (
      <div className="result-wrapper">
        <AnonymizationWrapper response={response} loadingAnonymize={loadingAnonymize} />
      </div>
    );
  } if (operation === 'Analyze' && reIdentificationRisk) {
    content = (
      <div className="result-wrapper">
        <AnalysisWrapper response={response} loadingAnalyze={loadingAnalyze} />
      </div>
    );
  } if (operation === 'Import') {
    setResponse('');
  }

  return content;
};
export default ResultWrapper;
