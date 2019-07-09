import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

const AnalyzeButton = (props) => {
  const { setLoadingAnalysis, handleRequest } = props;
  const content = (
    <div>
      <Knapp
        onClick={
          (e) => {
            setLoadingAnalysis(true);
            handleRequest(e, 'analyze');
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
