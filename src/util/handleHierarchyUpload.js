const findDataIndex = (hierarchies, file) => {
  for (let index = 0; index < hierarchies.length; index += 1) {
    if (hierarchies[index].name === file.name) {
      return index;
    }
  }
  return null;
};

export default function handleHierarchyUpload(file, index, attributes, setAttributes, hierarchies) {
  const newAttributes = [...attributes];
  newAttributes[index] = {
    ...newAttributes[index],
    hierarchy: {
      data: findDataIndex(hierarchies, file),
      name: file.name,
    },
  };
  setAttributes(newAttributes);
}
