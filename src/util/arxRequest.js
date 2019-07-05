export default function ArxRequest(endpoint, payload, service, setResponse) {
  fetch(`${endpoint}/api/${service}`, {
    crossDomain: true,
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => (response.json())).then((data) => {
    setResponse(data);
  });
}
