import React from 'react';
import { ToggleKnapp } from 'nav-frontend-toggle';

const AnonymizeConfigButton = (props) => {
  const { setShowAnonymizationConfig } = props;

  const content = (
    <div className="anonymize-button col">
      <br />
      <ToggleKnapp
        onClick={(e, pressed) => { setShowAnonymizationConfig(pressed); }}
      >
        Anonymize dataset
      </ToggleKnapp>
    </div>
  );
  return content;
};
export default AnonymizeConfigButton;
