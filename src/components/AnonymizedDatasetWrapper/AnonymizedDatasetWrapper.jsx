import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import AnonymizedDatasetTable from './AnonymizedDatasetTable/AnonymizedDatasetTable';
import DownloadAnonymizedDataset from './DownloadAnonymizedDataset/DownloadAnonymizedDataset';
import AttributeGeneralizationLevel from './AttributeGeneralizationLevel/AttributeGeneralizationLevel';
import AnalysisWrapper from '../AnalysisWrapper/AnalysisWrapper';
import './__css__/AnonymizedDatasetWrapper.css';

const AnonymizedDatasetWrapper = (props) => {
  const {
    response, loadingAnonymize, fileName,
  } = props;
  const {
    message,
  } = response;

  let content = '';

  if (message) {
    return (
      <div className="result-wrapper">
        <b>Something went wrong. Error:</b>
        {message}
      </div>
    );
  }
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
        <AnonymizedDatasetTable anonymizeResult={response.anonymizeResult} />
        <DownloadAnonymizedDataset
          anonymizeResult={response.anonymizeResult}
          fileName={fileName}
        />
        <div className="col-12">
          <Ekspanderbartpanel tittel="Analysis Result" apen="{true}" border>
            <AnalysisWrapper
              response={response.riskProfile}
              loadingAnalyze={loadingAnonymize}
            />
          </Ekspanderbartpanel>
          <Ekspanderbartpanel tittel="Attribute Generalization Level" border>
            <AttributeGeneralizationLevel
              attributeGeneralization={response.anonymizeResult.metrics.attributeGeneralization}
            />
          </Ekspanderbartpanel>
        </div>
      </div>
    );
  }
  return content;
};
export default AnonymizedDatasetWrapper;
