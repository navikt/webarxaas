import papaparse from 'papaparse';

export default function handleHierarchyUpload(file, index, attributes, setAttributes) {
  papaparse.parse(file, {
    complete(hierarchy) {
      const newAttributes = attributes;
      newAttributes[index] = {
        ...newAttributes[index],
        hierarchy: hierarchy.data,
      };
      setAttributes(newAttributes);
    },
  });
}
