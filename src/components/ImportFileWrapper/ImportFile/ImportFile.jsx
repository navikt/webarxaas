import React from 'react';
import ParseFile from '../../../util/parseFile';

const ImportFile = (props) => {
  const content = (
    <div align="center">
      <input
        type="file"
        id="file"
        className="input-file knapp knapp--standard"
        onChange={
          e => ParseFile(
            e.target.files[0],
            props.setAttributes,
            props.setDataset,
            props.defaultAttributeType,
          )
        }
      />
    </div>
  );
  return content;
};

export default ImportFile;
