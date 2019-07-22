import React from 'react';
import { ToggleKnapp } from 'nav-frontend-toggle';

const AnalyzeButton = (props) => {
  const { setShowAnonymizationConfig } = props;

  const content = (
    <div className="anonymize-button col">
      <ToggleKnapp
        onClick={(e, pressed) => { setShowAnonymizationConfig(pressed); }}
      >
        Anonymize dataset
      </ToggleKnapp>
    </div>
  );
  return content;
};

export default AnalyzeButton;
