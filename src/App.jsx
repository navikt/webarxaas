import React, { useState } from 'react';
import env from '@beam-australia/react-env';
import './App.css';
import NavbarMain from './components/NavbarMain/NavbarMain';
import TableWrapper from './components/TableWrapper/TableWrapper';
import MoreInfoWrapper from './components/MoreInfoWrapper/MoreInfoWrapper';
import ImportFileWrapper from './components/ImportFileWrapper/ImportFileWrapper';
import ResultWrapper from './components/ResultWrapper/ResultWrapper';

function App() {
  const [loadingDataset, setLoadingDataset] = useState(false);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [response, setResponse] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [operation, setOperation] = useState('');
  const [privacyModels, setPrivacyModels] = useState([]);
  const [suppressionLimit, setSuppressionLimit] = useState(null);
  const arxaasEndpoint = env('ARXAAS_URL');

  return (
    <div className="App">
      <NavbarMain
        setShowMoreInfo={setShowMoreInfo}
      />
      <MoreInfoWrapper
        showMoreInfo={showMoreInfo}
      />
      <ImportFileWrapper
        loadingDataset={loadingDataset}
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
        setOperation={setOperation}
      />
      <TableWrapper
        loadingDataset={loadingDataset}
        setLoadingAnalysis={setLoadingAnalysis}
        setAttributes={setAttributes}
        attributes={attributes}
        dataset={dataset}
        setResponse={setResponse}
        endpoint={arxaasEndpoint}
        setOperation={setOperation}
      />
      <ResultWrapper
        response={response}
        setResponse={setResponse}
        loadingAnalysis={loadingAnalysis}
        operation={operation}
        setAttributes={setAttributes}
        attributes={attributes}
        privacyModels={privacyModels}
        setPrivacyModels={setPrivacyModels}
        suppressionLimit={suppressionLimit}
        setSuppressionLimit={setSuppressionLimit}
      />
    </div>
  );
}

export default App;
