import React from 'react';
import PropTypes from 'prop-types';
import AnalyzeButton from './AnalyzeButton/AnalyzeButton';
import AnalyzeResultWrapper from './AnalyzeResultWrapper/AnalyzeResultWrapper';
import AnalyzeReportWrapper from './AnalyzeResultWrapper/AnalyzeReportWrapper';

const AnalyzeWrapper = (props) => {
  const {
    datasetFile,
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
        datasetFile={datasetFile}
        attributes={attributes}
        endpoint={endpoint}
        setResponse={setAnalyzeResponse}
      />
      <AnalyzeResultWrapper
        response={analyzeResponse}
        loadingAnalyze={loadingAnalyze}
      />
      <AnalyzeReportWrapper
        response={analyzeResponse}
        fileName={datasetFile.name}
        attributes={attributes}
      />
      <br />
    </div>
  );
};

AnalyzeWrapper.propTypes = {
  datasetFile: PropTypes.objectOf(PropTypes.object).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  endpoint: PropTypes.string.isRequired,
  loadingAnalyze: PropTypes.bool.isRequired,
  setLoadingAnalyze: PropTypes.func.isRequired,
  setAnalyzeResponse: PropTypes.func.isRequired,
  analyzeResponse: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AnalyzeWrapper;
