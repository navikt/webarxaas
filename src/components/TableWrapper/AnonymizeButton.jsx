import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

const AnonymizeButton = (props) => {
  const { setOperation } = props;

  const content = (
    <div>
      <Knapp onClick={() => { setOperation('Anonymize'); }}>
              Anonymize Dataset
      </Knapp>
    </div>
  );
  return content;
};
export default AnonymizeButton;
