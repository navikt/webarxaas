import React from 'react';
import ImportFile from './ImportDataset/ImportDataset';

const ImportFileWrapper = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset, setOperation,
  } = props;

  const content = (
    <div className="import-dataset-wrapper">
      <ImportFile
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
