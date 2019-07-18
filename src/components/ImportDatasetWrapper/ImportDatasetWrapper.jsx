import React from 'react';
import ImportDataset from './ImportDataset/ImportDataset';
import './__css__/ImportDatasetWrapper.css';

const ImportFileWrapper = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset, setOperation,
  } = props;

  const content = (
    <div className="import-dataset-wrapper">
      <ImportDataset
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
        setOperation={setOperation}
      />
    </div>
  );

  return content;
};

export default ImportFileWrapper;
