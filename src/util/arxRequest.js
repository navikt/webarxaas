export default function ArxRequest(setLoadingFunction, endpoint, formData, service, setResponse) {
  fetch(`${endpoint}/api/${service}`, {
    crossDomain: true,
    method: 'post',
    body: formData,
  }).then((response) => {
    try {
      return response.json();
    } catch (error) {
      return error;
    }
  }).then((data) => {
    setResponse(data);
    setLoadingFunction(false);
  }).catch((error) => {
    const errorMessage = error;
    errorMessage.message = `${error}`;
    setResponse(errorMessage);
    setLoadingFunction(false);
  });
}
