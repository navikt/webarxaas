import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleRequest(
  setLoadingFunction, service, endpoint, setResponse, dataset, attributes,
  privacyModels = [], suppressionLimit = null,
) {
  if (dataset && attributes && privacyModels) {
    const payload = BuildPayload(dataset, attributes, privacyModels, suppressionLimit);
    ArxRequest(setLoadingFunction, endpoint, payload, service, setResponse);
  } else if (dataset && attributes) {
    const payload = BuildPayload(dataset, attributes);
    ArxRequest(setLoadingFunction, endpoint, payload, service, setResponse);
  }
}
