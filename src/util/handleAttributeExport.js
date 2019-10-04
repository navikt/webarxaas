import handleJsonExport from './handleJsonExport';

function emptyHierarchy(attributes) {
  const newAttribute = [...attributes];
  newAttribute.forEach((e) => {
    e.hierarchy = null;
  });
  return newAttribute;
}

export default function handleAttributeExport(attributes, fileName) {
  const newAttribute = emptyHierarchy(attributes);
  handleJsonExport(newAttribute, fileName, '_Attributes.json', 'export_Attributes.json');
}
