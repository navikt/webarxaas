
export default function handleAttributeExport(attributes, fileName) {
  const json = JSON.stringify(attributes);
  const element = document.createElement('a');
  const jsonData = new Blob([json], { type: 'application/json' });
  element.href = URL.createObjectURL(jsonData);
  element.download = fileName ? fileName.toString().replace('.csv', '').concat('_Attributes.json') : 'export_Attributes.json';
  document.body.appendChild(element); // Required for this to work on Firefox
  element.click();
}
