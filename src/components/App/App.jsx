import React, { useState } from 'react';
import env from '@beam-australia/react-env';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import NavbarMain from '../NavbarMain/NavbarMain';
import DatasetTableWrapper from '../DatasetTableWrapper/DatasetTableWrapper';
import MoreInfoWrapper from '../MoreInfoWrapper/MoreInfoWrapper';
import ImportDatasetWrapper from '../ImportDatasetWrapper/ImportDatasetWrapper';
import AnalysisWrapper from '../AnalysisWrapper/AnalysisWrapper';
import AnonymizationConfigWrapper from '../DatasetTableWrapper/AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import AnalyzeButton from '../DatasetTableWrapper/AnalyzeButton/AnalyzeButton';
import AnonymizedDatasetWrapper from '../AnonymizedDatasetWrapper/AnonymizedDatasetWrapper';
import './__css__/App.css';

function App() {
  const [loadingDataset, setLoadingDataset] = useState(false);
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [loadingAnonymize, setLoadingAnonymize] = useState(false);
  const [dataset, setDataset] = useState('');
  const [attributes, setAttributes] = useState([]);
  const [analyzeResponse, setAnalyzeResponse] = useState('');
  const [anonymizeResponse, setAnonymizeResponse] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
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
        setFileName={setFileName}
      />

      <DatasetTableWrapper
        loadingDataset={loadingDataset}
        setAttributes={setAttributes}
        attributes={attributes}
        dataset={dataset}
        fileName={fileName}
      />

      <Ekspanderbartpanel tittel="Analyze" border>
        <AnalyzeButton
          setLoadingAnalyze={setLoadingAnalyze}
          dataset={dataset}
          attributes={attributes}
          endpoint={arxaasEndpoint}
          setResponse={setAnalyzeResponse}
        />
        <AnalysisWrapper
          response={analyzeResponse}
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
          dataset={dataset}
          setResponse={setAnonymizeResponse}
          endpoint={arxaasEndpoint}

        />
        <AnonymizedDatasetWrapper
          response={anonymizeResponse}
          loadingAnonymize={loadingAnonymize}
          fileName={fileName}
        />
      </Ekspanderbartpanel>
    </div>
  );
}

export default App;
