import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleAnalyzationRequest(
  setLoadingFunction, service, endpoint, setResponse, datasetFile, attributes,
) {
  const formData = new FormData();
  formData.append('file', datasetFile);
  const payload = BuildPayload(attributes);
  formData.append('payload', JSON.stringify(payload));
  ArxRequest(setLoadingFunction, endpoint, formData, service, setResponse);
}
