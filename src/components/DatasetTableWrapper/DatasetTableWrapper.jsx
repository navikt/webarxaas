import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';

import DatasetTable from './DatasetTable/DatasetTable';
import AnalyzeButton from './AnalyzeButton/AnalyzeButton';
import AnonymizeConfigButton from './AnonymizeConfigButton/AnonymizeConfigButton';
import ExportAttribute from './ExportAttributeTypeButton/ExportAttributeTypeButton';
import ImportAttribute from './ImportAttributeTypeButton/ImportAttributeTypeButton';
import AnonymizationConfigWrapper from './AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import './__css__/DatasetTableWrapper.css';

const DatasetTableWrapper = (props) => {
  const {
    loadingDataset, setLoadingAnalyze, setLoadingAnonymize,
    setAttributes, dataset, attributes, endpoint, setResponse,
    setOperation, privacyModels, setPrivacyModels, suppressionLimit, setSuppressionLimit,
    showAnonymizationConfig, setShowAnonymizationConfig, fileName,
  } = props;

  let content = '';

  if (loadingDataset) {
    content = (
      <div className="dataset-table-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (dataset) {
    content = (
      <div className="dataset-table-wrapper">
        <ImportAttribute
          setAttributes={setAttributes}
        />
        <ExportAttribute
          AttributeTypes={attributes}
          fileName={fileName}
        />
        <DatasetTable
          setAttributes={setAttributes}
          dataset={dataset}
          attributes={attributes}
        />
        <div className="row">
          <AnalyzeButton
            setLoadingAnalyze={setLoadingAnalyze}
            dataset={dataset}
            attributes={attributes}
            endpoint={endpoint}
            setResponse={setResponse}
            setOperation={setOperation}
          />
          <AnonymizeConfigButton
            setShowAnonymizationConfig={setShowAnonymizationConfig}
          />
        </div>
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
    );
  }

  return content;
};

export default DatasetTableWrapper;
