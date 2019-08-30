import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleAnonymizationRequest(
  setLoadingFunction, service, endpoint, setResponse, datasetFile, attributes,
  privacyModels = [], suppressionLimit = null, hierarchies,
) {
  const formData = new FormData();
  formData.append('file', datasetFile);
  const payload = BuildPayload(attributes, privacyModels, suppressionLimit);
  formData.append('payload', JSON.stringify(payload));
  if (hierarchies) {
    hierarchies.forEach((hierarchy) => {
      formData.append('hierarchies', hierarchy);
    });
  } else {
    formData.append('hierarchies', null);
  }
  ArxRequest(setLoadingFunction, endpoint, formData, service, setResponse);
}
