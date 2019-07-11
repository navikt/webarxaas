import React from 'react';
import AnalysisWrapper from '../AnalysisWrapper/AnalysisWrapper';

const ResultWrapper = (props) => {
  const { response, loadingAnalysis, operation } = props;

  const renderAction = (action) => {
    if (action === 'Analyze' && response.reIdentificationRisk) {
      return (<AnalysisWrapper response={response} loadingAnalysis={loadingAnalysis} />);
    } if (response.message) {
      return (
        <div>
          <b>Something went wrong. Error:</b>
          <br />
          {response.message}
        </div>
      );
    }
    return (' ');
  };
  return renderAction(operation);
};
export default ResultWrapper;
