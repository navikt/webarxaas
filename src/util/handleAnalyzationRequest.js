import ArxRequest from './arxRequest';
import BuildPayload from './buildPayload';

export default function handleRequest(
  setLoadingFunction, service, endpoint, setResponse, datasetFile, attributes,
) {
  const formData = new FormData();
  formData.append('file', datasetFile);
  const payload = BuildPayload(attributes);
  formData.append('metadata', new Blob([JSON.stringify(payload)], { type: 'application/json' }));
  ArxRequest(setLoadingFunction, endpoint, formData, service, setResponse);
}
