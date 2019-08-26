
export default function handleHierarchyFileUpload(file,
  index, attributes, hierarchies, setHierarchies) {
  const newHierarchies = [...hierarchies];
  newHierarchies.push({
    attribute: attributes[index].field,
    hierarchy: file,
  });
  setHierarchies(newHierarchies);
}
