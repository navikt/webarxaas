import React from '../../../node_modules/react';
import { ToggleKnapp } from '../../../node_modules/nav-frontend-toggle';

const MoreInfoButton = (props) => {
  const { setShowMoreInfo } = props;

  const content = (
    <div className="info-button">
      <ToggleKnapp
        onClick={(e, pressed) => setShowMoreInfo(pressed)}
      >
        Toggle Help
      </ToggleKnapp>
    </div>
  );


  return content;
};

export default MoreInfoButton;
