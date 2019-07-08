import React, { useState } from 'react';
import './App.css';
import NavbarMain from './components/navbar/navbarMain';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';
import AnalysisResult from './components/AnalysisResult/AnalysisResult';
import ImportFileWrapper from './components/ImportFileWrapper/ImportFileWrapper';

function App() {
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [response, setResponse] = useState('');

  let arxaasEndpoint = process.env.REACT_APP_ARXAAS_URL_DEV;
  if (process.env.NODE_ENV === 'production') {
    arxaasEndpoint = process.env.REACT_APP_ARXAAS_URL_PROD;
  }

  let result = '';
  if (response) {
    result = (
      <AnalysisResult
        response={response}
      />
    );
  }

  return (
    <div className="App">
      <NavbarMain
        setAttributes={setAttributes}
        setDataset={setDataset}
      />
      <ImportFileWrapper
        setAttributes={setAttributes}
        setDataset={setDataset}
      />
      <DatasetWrapper
        setAttributes={setAttributes}
        attributes={attributes}
        dataset={dataset}
        setResponse={setResponse}
        endpoint={arxaasEndpoint}
      />
      {result}
    </div>
  );
}

export default App;
