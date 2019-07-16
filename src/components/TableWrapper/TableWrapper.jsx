import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import Table from './Table/Table';
import AnalyzeButton from './AnalyzeButton/AnalyzeButton';
import ExportAttribute from './ExportAttributeType/ExportAttributeType';
import ImportAttribute from './ImportAttributeType/ImportAttributeType';
import AnonymizeButton from './AnonymizeButton';

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
        <div className="dataset-table">
          <Table
            setAttributes={setAttributes}
            dataset={dataset}
            attributes={attributes}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <AnalyzeButton
              setLoadingAnalysis={setLoadingAnalysis}
              dataset={dataset}
              attributes={attributes}
              endpoint={endpoint}
              setResponse={setResponse}
              setOperation={setOperation}
            />
          </div>
          <div className="col-6">
            <AnonymizeButton setOperation={setOperation} />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default TableWrapper;
