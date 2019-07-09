import React from 'react';
import ParseFile from '../../../util/parseFile';

const ImportFile = (props) => {
  const {
    setLoadingDataset, setAttributes, setDataset, defaultAttributeType,
  } = props;

  const content = (
    <div>
      <input
        type="file"
        id="file"
        className="input-file knapp knapp--standard"
        onChange={
          (e) => {
            setLoadingDataset(true);
            ParseFile(
              e.target.files[0],
              setAttributes,
              setDataset,
              defaultAttributeType,
              setLoadingDataset,
            );
          }
        }
      />
    </div>
  );
  return content;
};

export default ImportFile;
