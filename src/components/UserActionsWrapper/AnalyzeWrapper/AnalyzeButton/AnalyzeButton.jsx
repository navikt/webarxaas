import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../../../util/handleRequest';

const AnalyzeButton = (props) => {
  const {
    setLoadingAnalyze, dataset, attributes, endpoint, setResponse,
  } = props;

  const content = (
    <div className="analyze-button col" style={{ margin: '5em 0 5em 0' }}>
      <Knapp
        onClick={
          () => {
            setLoadingAnalyze(true);
            handleRequest(setLoadingAnalyze, 'analyze', endpoint, setResponse, dataset, attributes);
          }
        }
      >
        Analyze Dataset
      </Knapp>
    </div>
  );
  return content;
};

export default AnalyzeButton;
