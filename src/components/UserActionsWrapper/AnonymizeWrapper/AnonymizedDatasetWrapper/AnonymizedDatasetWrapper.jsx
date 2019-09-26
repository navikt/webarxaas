import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Alert } from 'reactstrap';
import AnonymizedDatasetTable from './AnonymizedDatasetTable/AnonymizedDatasetTable';
import DownloadAnonymizedDataset from './DownloadAnonymizedDataset/DownloadAnonymizedDataset';
import AttributeGeneralizationLevel from './AttributeGeneralizationLevel/AttributeGeneralizationLevel';
import AnalyzeResultWrapper from '../../AnalyzeWrapper/AnalyzeResultWrapper/AnalyzeResultWrapper';
import './__css__/AnonymizedDatasetWrapper.css';
import AnonymizeReportWrapper from './AnonymizeReportWrapper';

const AnonymizedDatasetWrapper = (props) => {
  const {
    response, loadingAnonymize, fileName, attributes,
    privacyModels, suppressionLimit,
  } = props;
  const {
    message,
  } = response;

  let content = '';

  const anonymizedFileName = fileName.toString().replace('.csv', '').concat('_anonymized.csv');

  if (message) {
    return (
      <div className="result-wrapper">
        <Alert color="danger">
          <b>
            Something went wrong.
            <br />
            Error:
          </b>
          {message}
        </Alert>
      </div>
    );
  }
  if (loadingAnonymize) {
    content = (
      <div className="anonymized-dataset-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (response.anonymizeResult) {
    content = (
      <div className="anonymized-dataset-wrapper">
        <h4>Anonymization Result</h4>
        <AnonymizedDatasetTable anonymizeResult={response.anonymizeResult} />
        <DownloadAnonymizedDataset
          anonymizeResult={response.anonymizeResult}
          fileName={fileName}
        />
        <div className="col-12">
          <Ekspanderbartpanel tittel="Analysis Result" apen border>
            <AnalyzeResultWrapper
              response={response.riskProfile}
              loadingAnalyze={loadingAnonymize}
            />
          </Ekspanderbartpanel>
          <Ekspanderbartpanel tittel="Attribute Generalization Level" border>
            <AttributeGeneralizationLevel
              attributeGeneralization={response.anonymizeResult.metrics.attributeGeneralization}
            />
          </Ekspanderbartpanel>
          <AnonymizeReportWrapper
            response={response}
            fileName={anonymizedFileName}
            attributes={attributes}
            privacyModels={privacyModels}
            suppressionLimit={suppressionLimit}
          />
        </div>
      </div>
    );
  }
  return content;
};
export default AnonymizedDatasetWrapper;
