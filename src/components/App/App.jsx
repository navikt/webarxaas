import React, { useState } from 'react';
import env from '@beam-australia/react-env';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import NavbarMain from '../NavbarMain/NavbarMain';
import DatasetTableWrapper from '../DatasetTableWrapper/DatasetTableWrapper';
import MoreInfoWrapper from '../MoreInfoWrapper/MoreInfoWrapper';
import ImportDatasetWrapper from '../ImportDatasetWrapper/ImportDatasetWrapper';
import AnalysisWrapper from '../ResultWrapper/AnalysisWrapper/AnalysisWrapper';
import AnonymizationConfigWrapper from '../DatasetTableWrapper/AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import AnalyzeButton from '../DatasetTableWrapper/AnalyzeButton/AnalyzeButton';
import './__css__/App.css';


function App() {
  const [loadingDataset, setLoadingDataset] = useState(false);
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [loadingAnonymize, setLoadingAnonymize] = useState(false);
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [response, setResponse] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showAnonymizationConfig, setShowAnonymizationConfig] = useState(false);
  const [operation, setOperation] = useState('');
  const [privacyModels, setPrivacyModels] = useState([]);
  const [suppressionLimit, setSuppressionLimit] = useState(null);
  const [fileName, setFileName] = useState('');
  const arxaasEndpoint = env('ARXAAS_URL');

  return (
    <div className="App">
      <NavbarMain
        setShowMoreInfo={setShowMoreInfo}
      />
      <MoreInfoWrapper
        showMoreInfo={showMoreInfo}
      />
      <ImportDatasetWrapper
        loadingDataset={loadingDataset}
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
        setOperation={setOperation}
        setFileName={setFileName}
      />

      <DatasetTableWrapper
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
        showAnonymizationConfig={showAnonymizationConfig}
        setShowAnonymizationConfig={setShowAnonymizationConfig}
        fileName={fileName}
      />

      <Ekspanderbartpanel tittel="Analyze" border>
        <AnalyzeButton
          setLoadingAnalyze={setLoadingAnalyze}
          dataset={dataset}
          attributes={attributes}
          endpoint={arxaasEndpoint}
          setResponse={setResponse}
          setOperation={setOperation}
        />
        <AnalysisWrapper
          response={response}
          loadingAnalyze={loadingAnalyze}
        />
      </Ekspanderbartpanel>

      <Ekspanderbartpanel tittel="Anonymize" border>
        <AnonymizationConfigWrapper
          setAttributes={setAttributes}
          attributes={attributes}
          privacyModels={privacyModels}
          setPrivacyModels={setPrivacyModels}
          suppressionLimit={suppressionLimit}
          setSuppressionLimit={setSuppressionLimit}
          setLoadingAnonymize={setLoadingAnonymize}
          setOperation={setOperation}
          dataset={dataset}
          setResponse={setResponse}
          endpoint={arxaasEndpoint}
        />
      </Ekspanderbartpanel>
    </div>
  );
}

export default App;
