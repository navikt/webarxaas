import React from 'react';

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
    <div>
      <input
        className="import-attributes-button knapp knapp--standard"
        type="file"
        onChange={e => handleImport(e.target.files[0])}
      />
    </div>
  );
  return content;
};
export default ImportAttribute;
