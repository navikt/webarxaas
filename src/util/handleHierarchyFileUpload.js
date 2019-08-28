
export default function handleHierarchyFileUpload(file, hierarchies, setHierarchies) {
  const newHierarchies = [...hierarchies];
  newHierarchies.push(file);
  setHierarchies(newHierarchies);
}
