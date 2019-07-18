import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import './__css__/AnonymizationWrapper.css';

const AnonymizationWrapper = (props) => {
  const { response, loadingAnonymize } = props;
  let content = ' ';
  if (loadingAnonymize) {
    content = (
      <div className="anonymization-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (response) {
    content = (
      <div className="anonymization-wrapper">
        <h4>Result</h4>
        <p>
          Anonymization Status:
          {response.anonymizeResult.anonymizationStatus}
        </p>
      </div>
    );
  }
  return content;
};
export default AnonymizationWrapper;
