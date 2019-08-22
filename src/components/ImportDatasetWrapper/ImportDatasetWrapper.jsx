import React from 'react';
import ImportDataset from './ImportDataset/ImportDataset';
import './__css__/ImportDatasetWrapper.css';

const ImportDatasetWrapper = (props) => {
  const {
    setLoadingDataset, setSnackbar,
    setAttributes, setDataset, setDatasetFile, setFileName, dataset,
  } = props;

  const content = (
    <div className="import-dataset-wrapper wrapper">
      <ImportDataset
        setLoadingDataset={setLoadingDataset}
        setSnackbar={setSnackbar}
        setAttributes={setAttributes}
        setDataset={setDataset}
        setDatasetFile={setDatasetFile}
        defaultAttributeType="QUASIIDENTIFYING"
        setFileName={setFileName}
        dataset={dataset}
      />
    </div>
  );

  return content;
};

export default ImportDatasetWrapper;
