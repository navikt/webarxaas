import React from 'react';
import ImportFile from './ImportFile';

const ImportFileWrapper = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset,
  } = props;

  const content = (
    <div className="import-file-container">
      <ImportFile
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
      />
    </div>
  );

  return content;
};

export default ImportFileWrapper;
