import React from 'react';
import AnalysisWrapper from '../AnalysisWrapper/AnalysisWrapper';

const ResultWrapper = (props) => {
  const { response, loadingAnalysis, event } = props;

  const renderAction = (action) => {
    /* if (action === 'anonymize' && response.anonymizeResult) {
      return (
        <div>
          <h1>Anonymize</h1>
          {' '}
          <AnonymizeResult response={response} />
        </div>
      );
    }  */
    if (action === 'Analyze' && response.reIdentificationRisk) {
      return (<AnalysisWrapper response={response} loadingAnalysis={loadingAnalysis} />);
    } if (response.message) {
      return (
        <div>
          <b>Something went wrong. Error:</b>
          {response.message}
        </div>
      );
    } if (response.includes('Failed to fetch')) {
      return (
        <div>
          <b>{response}</b>
        </div>
      );
    }
    return (' ');
  };
  return renderAction(event);
};
export default ResultWrapper;
