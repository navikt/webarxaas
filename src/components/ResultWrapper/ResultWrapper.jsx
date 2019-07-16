import React from 'react';
import AnalysisWrapper from './AnalysisWrapper/AnalysisWrapper';
import AnonymizeWrapper from './AnonymizeWrapper/AnonymizeWrapper';

const ResultWrapper = (props) => {
  const {
    response, loadingAnalysis, operation, setAttributes,
    attributes, privacyModels, setPrivacyModels,
  } = props;
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
  }
  if (operation === 'Anonymize') {
    content = (
      <div className="result-wrapper">
        <AnonymizeWrapper
          setAttributes={setAttributes}
          attributes={attributes}
          privacyModels={privacyModels}
          setPrivacyModels={setPrivacyModels}
        />
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
