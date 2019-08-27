import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../../../util/handleRequest';

const AnalyzeButton = (props) => {
  const {
    setLoadingAnalyze, datasetFile, attributes, endpoint, setResponse,
  } = props;

  const content = (
    <div className="analyze-button small" style={{ margin: '5em 0 5em 0' }}>
      <Knapp
        htmlType="button"
        onClick={
          () => {
            setResponse({});
            setLoadingAnalyze(true);
            handleRequest(setLoadingAnalyze, 'analyze/file', endpoint, setResponse, datasetFile, attributes);
          }
        }
      >
        Analyze Re-Identification Risk
      </Knapp>
    </div>
  );
  return content;
};

export default AnalyzeButton;
