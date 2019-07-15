import React from 'react';
import { ToggleKnapp } from 'nav-frontend-toggle';

const MoreInfoButton = (props) => {
  const { setShowMoreInfo } = props;

  const content = (
    <div className="info-button">
      <ToggleKnapp
        onClick={(e, pressed) => setShowMoreInfo(pressed)}
      >
        More Info
      </ToggleKnapp>
    </div>
  );


  return content;
};

export default MoreInfoButton;
