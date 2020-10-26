export default function handleHierarchyFileUpload(file, hierarchies, setHierarchies) {
  hierarchies.push(file);
  setHierarchies(hierarchies);
}
