import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Table from './Table';
import AnalyzeButton from './AnalyzeButton';
import ExportAttribute from './AttributeType/ExportAttributeType';
import ImportAttribute from './AttributeType/ImportAttributeType';

const TableWrapper = (props) => {
  const {
    loadingDataset, setLoadingAnalysis, setAttributes, dataset, attributes, endpoint, setResponse,
  } = props;

  let content = '';

  if (loadingDataset) {
    content = (
      <div className="dataset-container">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (dataset) {
    content = (
      <div className="dataset-container">
        <div>
          <ExportAttribute AttributeTypes={attributes} />
          <ImportAttribute setAttributes={setAttributes} />
        </div>
        <Table
          setAttributes={setAttributes}
          dataset={dataset}
          attributes={attributes}
        />
        <AnalyzeButton
          setLoadingAnalysis={setLoadingAnalysis}
          dataset={dataset}
          attributes={attributes}
          endpoint={endpoint}
          setResponse={setResponse}
        />
      </div>
    );
  }

  return content;
};

export default TableWrapper;
