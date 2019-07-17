import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

const AnonymizeConfigButton = (props) => {
  const { setOperation } = props;

  const content = (
    <div className="anonymize-button  analyze-anonymize-button">
      <Knapp onClick={() => { setOperation('Anonymize'); }}>
              Anonymize Dataset
      </Knapp>
    </div>
  );
  return content;
};
export default AnonymizeConfigButton;
