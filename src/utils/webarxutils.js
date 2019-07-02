import papaparse from 'papaparse';

module.exports = {
  onFilesChange(file, setAttributes, setData, attributeTypeModel) {
    papaparse.parse(file, {
      complete(results) {
        if (results.data.length > 0) {
          const headers = results.data[0];
          setAttributes(headers.map(field => ({ field, attributeTypeModel })));
          setData(results.data);
        }
      },
    });
  },
};
