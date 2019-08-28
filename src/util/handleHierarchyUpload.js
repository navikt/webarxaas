const findDataIndex = (hierarchies, file) => {
  let index;
  for (index = 0; index < hierarchies.length; index += 1) {
    if (hierarchies[index] === file) {
      return index;
    }
  }
  return index;
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
