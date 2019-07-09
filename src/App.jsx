import React, { useState } from 'react';
import './App.css';
import NavbarMain from './components/navbar/navbarMain';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';
import AnalysisResult from './components/AnalysisResult/AnalysisResult';
import MoreInfo from './components/MoreInfo/MoreInfo';
import AnalysisWrapper from './components/AnalysisWrapper/AnalysisWrapper';
import ImportFileWrapper from './components/ImportFileWrapper/ImportFileWrapper';

function App() {
  const [loadingDataset, setLoadingDataset] = useState(false);
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
      <AnalysisWrapper
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
      <ImportFileWrapper
        loadingDataset={loadingDataset}
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
      />
      {moreInfo}
      <DatasetWrapper
        loadingDataset={loadingDataset}
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
