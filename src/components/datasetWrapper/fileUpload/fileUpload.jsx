import React from 'react';
import ParseFile from '../../../util/parseFile';

const FileUpload = (props) => {
  const content = (
    <div align="center">
      <input
        type="file"
        id="file"
        className="input-file"
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

export default FileUpload;
