import React from 'react';
import './__css__/ImportAttributeType.css';

const ImportAttribute = (props) => {
  const { setAttributes } = props;
  const handleImport = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const json = JSON.parse(event.target.result);
        setAttributes(json);
      };
      reader.readAsText(file);
    }
  };

  const content = (

    <div className="import-attribute-type">
      <label htmlFor="file">
        Import attribute types from file:
        <br />
        <input
          className="import-attribute-type-button knapp knapp--standard"
          type="file"
          onChange={e => handleImport(e.target.files[0])}
        />
      </label>
    </div>
  );
  return content;
};
export default ImportAttribute;
