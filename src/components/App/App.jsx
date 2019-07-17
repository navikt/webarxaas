import React, { useState } from 'react';
import env from '@beam-australia/react-env';
import NavbarMain from '../NavbarMain/NavbarMain';
import TableWrapper from '../TableWrapper/TableWrapper';
import MoreInfoWrapper from '../MoreInfoWrapper/MoreInfoWrapper';
import ImportFileWrapper from '../ImportDatasetWrapper/ImportDatasetWrapper';
import ResultWrapper from '../ResultWrapper/ResultWrapper';
import './__css__/App.css';

function App() {
  const [loadingDataset, setLoadingDataset] = useState(false);
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [loadingAnonymize, setLoadingAnonymize] = useState(false);
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [response, setResponse] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showAnonymizeConfig, setShowAnonymizeConfig] = useState(false);
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
        setLoadingAnalyze={setLoadingAnalyze}
        setLoadingAnonymize={setLoadingAnonymize}
        setAttributes={setAttributes}
        attributes={attributes}
        dataset={dataset}
        setResponse={setResponse}
        endpoint={arxaasEndpoint}
        setOperation={setOperation}
        privacyModels={privacyModels}
        setPrivacyModels={setPrivacyModels}
        suppressionLimit={suppressionLimit}
        setSuppressionLimit={setSuppressionLimit}
        showAnonymizeConfig={showAnonymizeConfig}
        setShowAnonymizeConfig={setShowAnonymizeConfig}
      />
      <ResultWrapper
        response={response}
        setResponse={setResponse}
        loadingAnalyze={loadingAnalyze}
        loadingAnonymize={loadingAnonymize}
        operation={operation}
      />
    </div>
  );
}

export default App;
