import React from 'react';
import { Knapp } from 'nav-frontend-knapper';

const ExportAttribute = (props) => {
  const { AttributeTypes } = props;

  const handleExport = () => {
    const json = JSON.stringify(AttributeTypes);
    const element = document.createElement('a');
    const jsonData = new Blob([json], { type: 'json' });
    element.href = URL.createObjectURL(jsonData);
    element.download = 'myAttributeTypes.json';
    document.body.appendChild(element); // Required for this to work on Firefox
    element.click();
  };

  const content = (
    <div>
      <Knapp onClick={() => handleExport()}>
                Export Attribute Types
      </Knapp>
    </div>
  );
  return content;
};
export default ExportAttribute;
