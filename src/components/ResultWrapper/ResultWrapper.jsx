import React from 'react';
import AnalysisWrapper from './AnalysisWrapper/AnalysisWrapper';
import AnonymizedDatasetWrapper from './AnonymizedDatasetWrapper/AnonymizedDatasetWrapper';

const ResultWrapper = (props) => {
  const {
    response, setResponse, loadingAnalyze, loadingAnonymize, operation, fileName,
  } = props;
  const {
    message, reIdentificationRisk, anonymizeResult,
  } = response;

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
        <AnonymizedDatasetWrapper
          response={response}
          loadingAnonymize={loadingAnonymize}
          fileName={fileName}
        />
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
