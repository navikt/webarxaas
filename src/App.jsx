import React, { useState } from 'react';
import './App.css';
import NavbarMain from './components/navbar/navbarMain';
import DatasetWrapper from './components/datasetWrapper/datasetWrapper';
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
        setShowMoreInfo={setShowMoreInfo}
      />
      {moreInfo}
      <ImportFileWrapper
        loadingDataset={loadingDataset}
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
      />
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
