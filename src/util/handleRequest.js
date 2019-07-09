import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleRequest(
  setLoadingAnalysis, service, dataset, attributes, endpoint, setResponse,
) {
  if (dataset && attributes) {
    const payload = BuildPayload(dataset, attributes);
    ArxRequest(setLoadingAnalysis, endpoint, payload, service, setResponse);
  }
}
