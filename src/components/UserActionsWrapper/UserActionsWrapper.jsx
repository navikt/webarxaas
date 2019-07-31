import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import AnalysisWrapper from '../AnalysisWrapper/AnalysisWrapper';
import AnonymizationConfigWrapper from '../AnonymizationConfigWrapper/AnonymizationConfigWrapper';
import AnalyzeButton from '../AnalyzeButton/AnalyzeButton';
import AnonymizedDatasetWrapper from '../AnonymizedDatasetWrapper/AnonymizedDatasetWrapper';
import './__css__/UserActionsWrapper.css';

const UserActionsWrapper = (props) => {
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [loadingAnonymize, setLoadingAnonymize] = useState(false);
  const [analyzeResponse, setAnalyzeResponse] = useState('');
  const [anonymizeResponse, setAnonymizeResponse] = useState('');
  const [privacyModels, setPrivacyModels] = useState([]);
  const [suppressionLimit, setSuppressionLimit] = useState(null);

  const {
    dataset,
    attributes,
    endpoint,
    fileName,
    setAttributes,
  } = props;
  const [datasetCache, setDatasetCache] = useState(dataset);

  // Reset state when a new dataset is imported
  if (dataset !== datasetCache && datasetCache !== null) {
    setAnalyzeResponse('');
    setAnonymizeResponse('');
    setPrivacyModels([]);
    setSuppressionLimit(null);
    setDatasetCache(dataset);
  }

  return (
    <div className="user-actions-wrapper">
      <h1 style={dataset ? {} : { pointerEvents: 'none', opacity: '0.4' }}>Data actions</h1>
      <Ekspanderbartpanel tittel="Analyze" border style={dataset ? {} : { pointerEvents: 'none', opacity: '0.4' }} apen>
        <AnalyzeButton
          setLoadingAnalyze={setLoadingAnalyze}
          dataset={dataset}
          attributes={attributes}
          endpoint={endpoint}
          setResponse={setAnalyzeResponse}
        />
        <AnalysisWrapper
          response={analyzeResponse}
          loadingAnalyze={loadingAnalyze}
        />
        <br />
      </Ekspanderbartpanel>

      <Ekspanderbartpanel tittel="Anonymize" border style={dataset ? {} : { pointerEvents: 'none', opacity: '0.4' }}>
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
          endpoint={endpoint}
        />
        <AnonymizedDatasetWrapper
          response={anonymizeResponse}
          loadingAnonymize={loadingAnonymize}
          fileName={fileName}
        />
      </Ekspanderbartpanel>
    </div>
  );
};

UserActionsWrapper.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.array).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
  endpoint: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  setAttributes: PropTypes.func.isRequired,
};

export default UserActionsWrapper;
