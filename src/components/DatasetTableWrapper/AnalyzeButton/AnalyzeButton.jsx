import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../../util/handleRequest';

const AnalyzeButton = (props) => {
  const {
    setLoadingAnalyze, dataset, attributes, endpoint, setResponse,
    setOperation,
  } = props;

  const content = (
    <div className="analyze-button col">
      <Knapp
        onClick={
          () => {
            setOperation('Analyze');
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
