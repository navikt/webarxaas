import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import './__css__/ExportAttributeTypeButton.css';

const ExportAttribute = (props) => {
  const { AttributeTypes, fileName } = props;

  const handleExport = () => {
    const json = JSON.stringify(AttributeTypes);
    const element = document.createElement('a');
    const jsonData = new Blob([json], { type: 'application/json' });
    element.href = URL.createObjectURL(jsonData);
    element.download = fileName ? fileName.toString().replace('.csv', '').concat('_Attributes.json') : 'export_Attributes.json';
    document.body.appendChild(element); // Required for this to work on Firefox
    element.click();
  };

  const content = (
    <div className="export-attribute-type-button">
      <Knapp onClick={() => handleExport()}>
        Export Attribute Types as JSON
      </Knapp>
    </div>
  );
  return content;
};
export default ExportAttribute;
