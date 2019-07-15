import papaparse from 'papaparse';

export default function handleHierarchyUpload(file, index, attributes, setAttributes) {
  papaparse.parse(file, {
    complete(hierarchy) {
      const newAttribute = attributes;
      newAttribute[index] = {
        ...newAttribute[index],
        hierarchy: hierarchy.data,
      };
      setAttributes(newAttribute);
    },
  });
}
