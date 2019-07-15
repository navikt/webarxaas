import React from 'react';
import ImportFile from './ImportFile/ImportFile';

const ImportFileWrapper = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset, setOperation,
  } = props;

  const content = (
    <div className="import-file-wrapper">
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
