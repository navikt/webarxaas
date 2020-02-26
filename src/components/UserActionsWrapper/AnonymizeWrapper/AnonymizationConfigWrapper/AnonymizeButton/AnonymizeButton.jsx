import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import handleAnonymizationRequest from '../../../../../util/handleAnonymizationRequest';
import './__css__/AnonymizeButton.css';

const AnonymizeButton = (props) => {
  const {
    setLoadingAnonymize, datasetFile,
    attributes, privacyModels, suppressionLimit,
    endpoint, setResponse, hierarchies,
  } = props;

  const content = (
    <div className="anonymize-button small">
      <p>
        <b>
          Due to the limit of web browsers,
          the client migth not be able to anonymize a dataset larger than 210MB.
        </b>
      </p>
      <Knapp onClick={() => {
        setResponse({});
        setLoadingAnonymize(true);
        if (datasetFile.size > 216000000) {
          setLoadingAnonymize(false);
          setResponse({
            message: 'Dataset file size too large. Due to the limit of browser memory size, the client can only anonymize a dataset that has a size of 210MB.',
          });
        } else {
          handleAnonymizationRequest(setLoadingAnonymize, 'anonymize/file', endpoint, setResponse, datasetFile, attributes,
            privacyModels, suppressionLimit, hierarchies);
        }
      }}
      >
        Anonymize Dataset
      </Knapp>
    </div>
  );
  return content;
};
export default AnonymizeButton;
