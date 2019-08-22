const buildAttributesPayload = attributes => attributes.map(attribute => ({
  ...attribute,
  hierarchy: attribute.hierarchy ? attribute.hierarchy.data : null,
}));

const BuildPayload = (attributes, privacyModels, suppressionLimit) => {
  const jsonModel = {};
  jsonModel.attributes = buildAttributesPayload(attributes);
  jsonModel.privacyModels = privacyModels;
  jsonModel.suppressionLimit = suppressionLimit / 100;
  return jsonModel;
};

const ArxFormDataRequest = (setLoadingFunction, endpoint, formData, service, setResponse) => {
  fetch(`${endpoint}/api/${service}`, {
    crossDomain: true,
    method: 'post',
    body: formData,
  }).then(response => (response.json())).then((data) => {
    setResponse(data);
    setLoadingFunction(false);
  }).catch((error) => {
    const errorMessage = error;
    errorMessage.message = `No service connection, ${error}`;
    setResponse(errorMessage);
    setLoadingFunction(false);
  });
};

export default function handleFormDataRequest(
  setLoadingFunction, service, endpoint, setResponse, datasetFile, attributes,
  privacyModels = [], suppressionLimit = null,
) {
  const formData = new FormData();
  formData.append('file', datasetFile);
  const payload = BuildPayload(attributes, privacyModels, suppressionLimit);
  formData.append('payload', JSON.stringify(payload));
  ArxFormDataRequest(setLoadingFunction, endpoint, formData, service, setResponse);
}
