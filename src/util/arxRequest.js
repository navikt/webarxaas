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
    if (error instanceof SyntaxError) {
      errorMessage.message = `${error.message}. A common cause of this error is the dataset size being too large, for the web browser to handle.`;
    } else if (error instanceof TypeError) {
      errorMessage.message = `${error.message}. No service connection.`;
    }
    errorMessage.message = `${error}`;
    setResponse(errorMessage);
    setLoadingFunction(false);
  });
}
