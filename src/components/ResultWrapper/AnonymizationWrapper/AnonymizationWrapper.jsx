import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';

const AnonymizationWrapper = (props) => {
  const { response, loadingAnonymize } = props;
  let content = ' ';
  if (loadingAnonymize) {
    content = (
      <div className="anonymization-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  }
  return content;
};
export default AnonymizationWrapper;
