import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../util/handleRequest';

const AnalyzeButton = (props) => {
  const {
    setLoadingAnalysis, dataset, attributes, endpoint, setResponse,
  } = props;

  const content = (
    <div>
      <Knapp
        onClick={
          () => {
            setLoadingAnalysis(true);
            handleRequest(setLoadingAnalysis, 'analyze', dataset, attributes, endpoint, setResponse);
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
