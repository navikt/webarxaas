export default function handleJsonExport(objectToExport, fileName, newFileName, alternateFileName) {
  const json = JSON.stringify(objectToExport);
  const element = document.createElement('a');
  const jsonData = new Blob([json], { type: 'application/json' });
  element.href = URL.createObjectURL(jsonData);
  element.download = fileName ? fileName.toString().replace('.csv', '').concat(newFileName) : alternateFileName;
  document.body.appendChild(element); // Required for this to work on Firefox
  element.click();
}
