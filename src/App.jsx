import React, { useState } from 'react';
import './App.css';
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

  return (
    <div className="App">
      <DatasetWrapper
        endpoint="http://localhost:8080"
        setAttributes={setAttributes}
        attributes={attributes}
        setDataset={setDataset}
        dataset={dataset}
        setResponse={setResponse}
      />
      {result}
    </div>
  );
}

export default App;
