import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import AnonymizedDatasetTable from './AnonymizedDatasetTable/AnonymizedDatasetTable';
import DownloadAnonymizedDataset from './DownloadAnonymizedDataset/DownloadAnonymizedDataset';
import AttributeGeneralizationLevel from './AttributeGeneralizationLevel/AttributeGeneralizationLevel';
import AnalysisWrapper from '../AnalysisWrapper/AnalysisWrapper';
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
        <div className="col-12">
          <Ekspanderbartpanel tittel="Attribute Generalization Level" border>
            <AttributeGeneralizationLevel
              attributeGeneralization={response.anonymizeResult.metrics.attributeGeneralization}
            />
          </Ekspanderbartpanel>
          <AnalysisWrapper response={response.riskProfile} loadingAnalyze={loadingAnonymize} />
        </div>
      </div>
    );
  }
  return content;
};
export default AnonymizedDatasetWrapper;
