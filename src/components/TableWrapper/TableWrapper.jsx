import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Table from './Table/Table';
import AnalyzeButton from './AnalyzeButton/AnalyzeButton';
import ExportAttribute from './ExportAttributeTypeButton/ExportAttributeTypeButton';
import ImportAttribute from './ImportAttributeTypeButton/ImportAttributeTypeButton';

const TableWrapper = (props) => {
  const {
    loadingDataset, setLoadingAnalysis, setAttributes, dataset, attributes, endpoint, setResponse,
    setOperation,
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
      <div className="table-wrapper">
        <div className="row">
          <div className="col-6">
            <ImportAttribute setAttributes={setAttributes} />
          </div>
          <div className="col-6">
            <ExportAttribute AttributeTypes={attributes} />
          </div>

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
          setOperation={setOperation}
        />
      </div>
    );
  }

  return content;
};

export default TableWrapper;
