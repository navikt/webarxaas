import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleRequest(
  setLoadingFunction, service, endpoint, setResponse, datasetFile, attributes,
  privacyModels = [], suppressionLimit = null, hierarchies,
) {
  if (datasetFile && attributes && privacyModels) {
    const formData = new FormData();
    formData.append('file', datasetFile);
    const payload = BuildPayload(attributes, privacyModels, suppressionLimit);
    formData.append('payload', new Blob([JSON.stringify(payload)], { type: 'application/json'}));
    if (hierarchies) {
      hierarchies.forEach((hierarchy) => {
        formData.append('hierarchies', hierarchy);
      });
    } else {
      formData.append('hierarchies', null);
    }
    ArxRequest(setLoadingFunction, endpoint, formData, service, setResponse);
  } else if (datasetFile && attributes) {
    const formData = new FormData();
    formData.append('file', datasetFile);
    const payload = BuildPayload(attributes);
    formData.append('payload', new Blob([JSON.stringify(payload)], { type: 'application/json'}));
    ArxRequest(setLoadingFunction, endpoint, formData, service, setResponse);
  }
}
