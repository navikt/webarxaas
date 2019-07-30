import React from 'react';
import NavFrontendSpinner from 'nav-frontend-spinner';
import DatasetTable from './DatasetTable/DatasetTable';
import ExportAttribute from './ExportAttributeTypeButton/ExportAttributeTypeButton';
import ImportAttribute from './ImportAttributeTypeButton/ImportAttributeTypeButton';
import './__css__/DatasetTableWrapper.css';

const DatasetTableWrapper = (props) => {
  const {
    loadingDataset, setAttributes, dataset, attributes, fileName,
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
      </div>
    );
  }

  return content;
};

export default DatasetTableWrapper;
