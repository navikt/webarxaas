import React from 'react';
import { ToggleKnapp } from 'nav-frontend-toggle';

const MoreInfoButton = (props) => {
  const { setShowMoreInfo } = props;

  const content = (
    <ToggleKnapp
      onClick={(e, pressed) => setShowMoreInfo(pressed)}
    >
      Toggle Help
    </ToggleKnapp>
  );


  return content;
};

export default MoreInfoButton;
