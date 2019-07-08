import React from 'react';
import ImportFile from './ImportFile/ImportFile';

const ImportFileWrapper = (props) => {
  const {
    setAttributes, setDataset,
  } = props;

  const content = (
    <div className="import-file-container">
      <ImportFile
        setAttributes={setAttributes}
        setDataset={setDataset}
        defaultAttributeType="QUASIIDENTIFYING"
      />
    </div>
  );

  return content;
};

export default ImportFileWrapper;
