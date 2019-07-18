import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import AnonymizedDatasetTable from './AnonymizedDatasetTable/AnonymizedDatasetTable';
import DownloadAnonymizedDataset from './DownloadAnonymizedDataset/DownloadAnonymizedDataset';
import './__css__/AnonymizedDatasetWrapper.css';

const AnonymizedDatasetWrapper = (props) => {
  const { response, loadingAnonymize } = props;
  let content = ' ';
  if (loadingAnonymize) {
    content = (
      <div className="anonymized-dataset-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (response) {
    content = (
      <div className="anonymized-dataset-wrapper">
        <h4>Anonymization Result</h4>
        <p>
          Anonymization Status:
          {response.anonymizeResult.anonymizationStatus}
        </p>
        <AnonymizedDatasetTable anonymizeResult={response.anonymizeResult} />
        <DownloadAnonymizedDataset anonymizeResult={response.anonymizeResult} />
      </div>
    );
  }
  return content;
};
export default AnonymizedDatasetWrapper;
