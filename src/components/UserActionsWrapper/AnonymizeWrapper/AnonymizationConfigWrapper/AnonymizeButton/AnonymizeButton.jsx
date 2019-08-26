import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleRequest from '../../../../../util/handleRequest';
import './__css__/AnonymizeButton.css';

const AnonymizeButton = (props) => {
  const {
    setLoadingAnonymize, datasetFile,
    attributes, privacyModels, suppressionLimit,
    endpoint, setResponse, hierarchies,
  } = props;

  const content = (
    <div className="anonymize-button small">
      <Knapp onClick={() => {
        setLoadingAnonymize(true);
        handleRequest(setLoadingAnonymize, 'anonymize/file', endpoint, setResponse, datasetFile, attributes,
          privacyModels, suppressionLimit, hierarchies);
      }}
      >
        Anonymize Dataset
      </Knapp>
    </div>
  );
  return content;
};
export default AnonymizeButton;
