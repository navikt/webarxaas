import papaparse from 'papaparse';

export default function ParseFile(file, setAttributes, setDataset, defaultAttributeType) {
  console.log(file);
  if (file) {
    papaparse.parse(file, {
      complete(results) {
        if (results.data.length > 0) {
          const headers = results.data[0];
          const attributeTypeModel = defaultAttributeType;
          setAttributes(headers.map(field => ({ field, attributeTypeModel })));
          setDataset(results.data);
        }
      },
    });
  }
}
