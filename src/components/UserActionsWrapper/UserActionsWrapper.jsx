import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AnalyzeWrapper from './AnalyzeWrapper/AnalyzeWrapper';
import UserActionsTab from './UserActionsTab/UserActionsTab';
import './__css__/UserActionsWrapper.css';
import AnonymizeWrapper from './AnonymizeWrapper/AnonymizeWrapper';

const useStyles = makeStyles({
  root: {
    minHeight: '30em',
    padding: '0 0 5em 0',
  },
});

const UserActionsWrapper = (props) => {
  const [loadingAnalyze, setLoadingAnalyze] = useState(false);
  const [loadingAnonymize, setLoadingAnonymize] = useState(false);
  const [analyzeResponse, setAnalyzeResponse] = useState({});
  const [anonymizeResponse, setAnonymizeResponse] = useState({});
  const [privacyModels, setPrivacyModels] = useState([]);
  const [suppressionLimit, setSuppressionLimit] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const {
    dataset,
    datasetFile,
    attributes,
    endpoint,
    fileName,
    setAttributes,
  } = props;
  const [datasetCache, setDatasetCache] = useState(dataset);

  // Reset state when a new dataset is imported
  if (dataset !== datasetCache && datasetCache !== null) {
    setAnalyzeResponse({});
    setAnonymizeResponse({});
    setPrivacyModels([]);
    setSuppressionLimit(0);
    setDatasetCache(dataset);
  }

  let userActionView = '';
  if (tabIndex === 0) {
    userActionView = (
      <AnalyzeWrapper
        datasetFile={datasetFile}
        attributes={attributes}
        endpoint={endpoint}
        loadingAnalyze={loadingAnalyze}
        setLoadingAnalyze={setLoadingAnalyze}
        setAnalyzeResponse={setAnalyzeResponse}
        analyzeResponse={analyzeResponse}
      />
    );
  } else {
    userActionView = (
      <AnonymizeWrapper
        datasetFile={datasetFile}
        fileName={fileName}
        attributes={attributes}
        endpoint={endpoint}
        setAttributes={setAttributes}
        privacyModels={privacyModels}
        setPrivacyModels={setPrivacyModels}
        suppressionLimit={suppressionLimit}
        setSuppressionLimit={setSuppressionLimit}
        setAnonymizeResponse={setAnonymizeResponse}
        anonymizeResponse={anonymizeResponse}
        setLoadingAnonymize={setLoadingAnonymize}
        loadingAnonymize={loadingAnonymize}
      />
    );
  }

  const paperClasses = useStyles();

  return (
    <div className="user-actions-wrapper wrapper" style={dataset.length > 1 ? {} : { pointerEvents: 'none', opacity: '0.4' }}>
      <Paper className={paperClasses.root}>
        <UserActionsTab tabIndex={tabIndex} setTabIndex={setTabIndex} />
        <br />
        {userActionView}
      </Paper>
    </div>
  );
};

UserActionsWrapper.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.array).isRequired,
  datasetFile: PropTypes.objectOf(PropTypes.object).isRequired,
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  endpoint: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  setAttributes: PropTypes.func.isRequired,
};

export default UserActionsWrapper;
