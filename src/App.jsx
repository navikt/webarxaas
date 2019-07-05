import React, { useState } from 'react';
import './App.css';
import NavbarMain from './components/navbar/navbarMain';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';
import AnalysisResult from './components/AnalysisResult/AnalysisResult';

function App() {
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [response, setResponse] = useState('');

  let result = '';
  if (response) {
    result = (
      <AnalysisResult
        response={response}
      />
    );
  }

  let arxaasEndpoint = process.env.REACT_APP_ARXAAS_URL_DEV;
  if (process.env.NODE_ENV === 'production') {
    arxaasEndpoint = process.env.REACT_APP_ARXAAS_URL_PROD;
  }

  return (
    <div className="App">
      <NavbarMain
        setAttributes={setAttributes}
        setDataset={setDataset}
      />
      <DatasetWrapper
        endpoint={arxaasEndpoint}
        attributes={attributes}
        dataset={dataset}
        setResponse={setResponse}
      />
      {result}
    </div>
  );
}

export default App;
