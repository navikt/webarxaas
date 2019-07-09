import React from 'react';
import ParseFile from '../../../util/parseFile';

const ImportFile = (props) => {
  const content = (
    <div>
      <input
        type="file"
        id="file"
        className="input-file knapp knapp--standard"
        onChange={
          (e) => {
            props.setLoadingDataset(true);
            ParseFile(
              e.target.files[0],
              props.setAttributes,
              props.setDataset,
              props.defaultAttributeType,
              props.setLoadingDataset,
            );
          }
        }
      />
    </div>
  );
  return content;
};

export default ImportFile;
