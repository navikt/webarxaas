import React from 'react';
import papaparse from 'papaparse';

const FileUpload = (props) => {
  function onFilesChange(file, setAttributes, setData, attributeTypeModel) {
    papaparse.parse(file, {
      complete(results) {
        if (results.data.length > 0) {
          const headers = results.data[0];
          setAttributes(headers.map(field => ({ field, attributeTypeModel })));
          setData(results.data);
          console.log(results.data);
        }
      },
    });
  }

  const content = (
    <div align="center">
      <input
        type="file"
        id="file"
        className="input-file"
        onChange={
          e => onFilesChange(
            e.target.files[0],
            props.setAttributes,
            props.setData,
            props.attributeTypeModel,
          )
        }
      />
    </div>
  );
  return content;
};

export default FileUpload;
