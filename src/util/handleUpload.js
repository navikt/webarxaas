const buildAttributesPayload = attributes => attributes.map(attribute => ({
  ...attribute,
  hierarchy: attribute.hierarchy ? attribute.hierarchy.data : null,
}));

const BuildPayload = (attributes) => {
  const jsonModel = {};
  jsonModel.attributes = buildAttributesPayload(attributes);
  jsonModel.privacyModels = [{ privacyModel: 'KANONYMITY', params: { k: '4' } }];
  jsonModel.suppressionLimit = 100 / 100;
  return jsonModel;
};

const getRestClient = (data) => {
  fetch('http://localhost:8080/api/file', {
    crossDomain: true,
    method: 'post',
    body: data,
  }).then(response => (response.json())).then((responseData) => {
    console.log(responseData);
  }).catch((error) => {
    console.log(error);
    if (error.response) {
      console.log('Upload error. HTPP error/status code=', error.response.status);
    } else {
      console.log('Upload error. HTTP error/status code=', error.message);
    }
  });
};

export default function handleUpload(file, attributes) {
  const data = new FormData();
  data.append('file', file, file.name);
  const payload = BuildPayload(attributes);
  data.append('payload', JSON.stringify(payload));
  getRestClient(data);
}
