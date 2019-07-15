import React from 'react';

import AnalysisWrapper from './AnalysisWrapper/AnalysisWrapper';
import AnonymizeWrapper from '../AnonymizeWrapper/AnonymizeWrapper';


const ResultWrapper = (props) => {
  const {
    response, loadingAnalysis, operation, setAttributes,
    attributes,
  } = props;

  const renderAction = (action) => {
    if (action === 'Anonymize') {
      return (
        <AnonymizeWrapper
          setAttributes={setAttributes}
          attributes={attributes}
        />
      );
    }
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
