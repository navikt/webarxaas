import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { ToggleKnapp } from 'nav-frontend-toggle';
import Table from './DatasetTable/DatasetTable';
import AnalyzeButton from './AnalyzeButton/AnalyzeButton';
import ExportAttribute from './ExportAttributeType/ExportAttributeType';
import ImportAttribute from './ImportAttributeType/ImportAttributeType';
import AnonymizationConfigWrapper from './AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import './__css__/DatasetTableWrapper.css';

const DatasetTableWrapper = (props) => {
  const {
    loadingDataset, setLoadingAnalyze, setLoadingAnonymize,
    setAttributes, dataset, attributes, endpoint, setResponse,
    setOperation, privacyModels, setPrivacyModels, suppressionLimit, setSuppressionLimit,
    showAnonymizationConfig, setShowAnonymizationConfig,
  } = props;

  let content = '';

  if (loadingDataset) {
    content = (
      <div className="table-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (dataset) {
    content = (
      <div className="table-wrapper container-fluid">
        <div className="row">
          <div className="col-6">
            <ImportAttribute setAttributes={setAttributes} />
          </div>
          <div className="col-6">
            <ExportAttribute AttributeTypes={attributes} />
          </div>

        </div>
        <div className="dataset-table">
          <Table
            setAttributes={setAttributes}
            dataset={dataset}
            attributes={attributes}
          />
        </div>
        <div className="row container-fluid">
          <div className="col-6">
            <AnalyzeButton
              setLoadingAnalyze={setLoadingAnalyze}
              dataset={dataset}
              attributes={attributes}
              endpoint={endpoint}
              setResponse={setResponse}
              setOperation={setOperation}
            />
          </div>
          <div className="col-6 analyze-anonymize-button">
            <ToggleKnapp onClick={(e, pressed) => { setShowAnonymizationConfig(pressed); }}>
              Anonymize dataset
            </ToggleKnapp>
          </div>
          <div>
            <AnonymizationConfigWrapper
              setAttributes={setAttributes}
              attributes={attributes}
              privacyModels={privacyModels}
              setPrivacyModels={setPrivacyModels}
              suppressionLimit={suppressionLimit}
              setSuppressionLimit={setSuppressionLimit}
              showAnonymizationConfig={showAnonymizationConfig}
              setLoadingAnonymize={setLoadingAnonymize}
              setOperation={setOperation}
              dataset={dataset}
              setResponse={setResponse}
              endpoint={endpoint}
            />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default DatasetTableWrapper;
