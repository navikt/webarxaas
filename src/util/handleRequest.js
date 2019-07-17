import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleRequest(
  setLoading, service, dataset, attributes,
  privacyModels = [], suppressionLimit = null, endpoint, setResponse,
) {
  if (dataset && attributes) {
    const payload = BuildPayload(dataset, attributes);
    ArxRequest(setLoading, endpoint, payload, service, setResponse);
  }
  if (dataset && attributes && privacyModels) {
    const payload = BuildPayload(dataset, attributes, privacyModels, suppressionLimit);
    ArxRequest(setLoading, endpoint, payload, service, setResponse);
  }
}
