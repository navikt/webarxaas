import React from 'react';
import AnalysisWrapper from './AnalysisWrapper/AnalysisWrapper';

const ResultWrapper = (props) => {
  const { response, loadingAnalysis, operation } = props;
  const { message, reIdentificationRisk } = response;

  let content = (
    <div className="result-wrapper">
      <AnalysisWrapper loadingAnalysis={loadingAnalysis} />
    </div>
  );

  if (message) {
    content = (
      <div>
        <b>Something went wrong. Error:</b>
        <br />
        {message}
      </div>
    );
  } if (operation === 'Analyze' && reIdentificationRisk) {
    content = (
      <div className="result-wrapper">
        <AnalysisWrapper response={response} loadingAnalysis={loadingAnalysis} />
      </div>
    );
  }

  return content;
};
export default ResultWrapper;
