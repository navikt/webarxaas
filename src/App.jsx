import React, { useState } from 'react';
import './App.css';
import NavbarMain from './components/navbar/navbarMain';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';
import AnalysisResult from './components/AnalysisResult/AnalysisResult';
import MoreInfo from './components/MoreInfo/MoreInfo';

function App() {
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [response, setResponse] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

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

  let moreInfo = '';
  if (showMoreInfo) {
    moreInfo = (
      <MoreInfo />
    );
  }

  return (
    <div className="App">

      <NavbarMain
        setAttributes={setAttributes}
        setDataset={setDataset}
        setResponse={setResponse}
        attributes={attributes}
        dataset={dataset}
        endpoint={arxaasEndpoint}
        setShowMoreInfo={setShowMoreInfo}
      />
      {moreInfo}
      <DatasetWrapper
        setAttributes={setAttributes}
        attributes={attributes}
        dataset={dataset}
      />
      {result}
    </div>
  );
}

export default App;
