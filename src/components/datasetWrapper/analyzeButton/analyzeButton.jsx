import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

const AnalyzeButton = (props) => {
  const { handleRequest } = props;
  const content = (
    <div>
      <Knapp
        onClick={e => handleRequest(e, 'analyze')}
      >
        Analyze Dataset
      </Knapp>
    </div>
  );
  return content;
};

export default AnalyzeButton;
