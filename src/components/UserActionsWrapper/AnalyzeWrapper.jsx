import React from 'react';
import AnalyzeButton from '../AnalyzeButton/AnalyzeButton';
import AnalysisWrapper from '../AnalyzeResultWrapper/AnalyzeResultWrapper';

const AnalyzeWrapper = (props) => {
  const {
    dataset,
    attributes,
    endpoint,
    loadingAnalyze,
    setLoadingAnalyze,
    setAnalyzeResponse,
    analyzeResponse,
  } = props;
  return (
    <div>
      <br />
      <AnalyzeButton
        setLoadingAnalyze={setLoadingAnalyze}
        dataset={dataset}
        attributes={attributes}
        endpoint={endpoint}
        setResponse={setAnalyzeResponse}
      />
      <AnalysisWrapper
        response={analyzeResponse}
        loadingAnalyze={loadingAnalyze}
      />
      <br />
    </div>
  );
};

export default AnalyzeWrapper;
