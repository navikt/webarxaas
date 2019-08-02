import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../../../../util/handleRequest';
import './__css__/AnonymizeButton.css';

const AnonymizeButton = (props) => {
  const {
    setLoadingAnonymize, dataset,
    attributes, privacyModels, suppressionLimit,
    endpoint, setResponse,
  } = props;

  const content = (
    <div className="anonymize-button">
      <Knapp onClick={() => {
        setLoadingAnonymize(true);
        handleRequest(setLoadingAnonymize, 'anonymize', endpoint, setResponse, dataset, attributes, privacyModels, suppressionLimit);
      }}
      >
        Anonymize Dataset
      </Knapp>
    </div>
  );
  return content;
};
export default AnonymizeButton;
