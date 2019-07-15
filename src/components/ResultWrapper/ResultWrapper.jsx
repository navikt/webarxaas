import React from 'react';
import AnalysisWrapper from '../AnalysisWrapper/AnalysisWrapper';
import AnonymizeWrapper from '../AnonymizeWrapper/AnonymizeWrapper';

const ResultWrapper = (props) => {
  const {
    response, loadingAnalysis, operation, setAttributes,
    attributes,
  } = props;


  const anonymizeAction = () => (
    <AnonymizeWrapper
      setAttributes={setAttributes}
      attributes={attributes}
    />
  );

  const analyzeAction = () => (
    <AnalysisWrapper response={response} loadingAnalysis={loadingAnalysis} />
  );

  const errorAction = message => (
    <div>
      <b>Something went wrong. Error:</b>
      <br />
      {message}
    </div>
  );

  const renderAction = (action) => {
    if (action === 'Anonymize') {
      return anonymizeAction();
    }
    if (action === 'Analyze' && response.reIdentificationRisk) {
      return analyzeAction();
    }
    if (response.message) {
      return errorAction(response.message);
    }
    return (' ');
  };
  return renderAction(operation);
};
export default ResultWrapper;
