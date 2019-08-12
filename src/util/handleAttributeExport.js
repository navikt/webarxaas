function emptyHierarchy(attributes) {
  const newAttribute = [...attributes];
  newAttribute.forEach((e) => {
    e.hierarchy = null;
  });
  return newAttribute;
}

export default function handleAttributeExport(attributes, fileName) {
  const newAttribute = emptyHierarchy(attributes);
  const json = JSON.stringify(newAttribute);
  const element = document.createElement('a');
  const jsonData = new Blob([json], { type: 'application/json' });
  element.href = URL.createObjectURL(jsonData);
  element.download = fileName ? fileName.toString().replace('.csv', '').concat('_Attributes.json') : 'export_Attributes.json';
  document.body.appendChild(element); // Required for this to work on Firefox
  element.click();
}
