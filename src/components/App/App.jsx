import React, { useState } from 'react';
import env from '@beam-australia/react-env';
import NavbarMain from '../NavbarMain/NavbarMain';
import DatasetTableWrapper from '../DatasetTableWrapper/DatasetTableWrapper';
import MoreInfoWrapper from '../MoreInfoWrapper/MoreInfoWrapper';
import ImportDatasetWrapper from '../ImportDatasetWrapper/ImportDatasetWrapper';
import UserActionsWrapper from '../UserActionsWrapper/UserActionsWrapper';
import Footer from '../Footer/Footer';
import SnackbarWrapper from '../SnackbarWrapper/SnackbarWrapper';
import './__css__/App.css';

function App() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    variant: '',
    message: '',
  });

  const [loadingDataset, setLoadingDataset] = useState(false);
  const [dataset, setDataset] = useState([]);
  const [attributes, setAttributes] = useState([]);

  const [showMoreInfo, setShowMoreInfo] = useState(false);
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
        setSnackbar={setSnackbar}
        setLoadingDataset={setLoadingDataset}
        setAttributes={setAttributes}
        setDataset={setDataset}
        dataset={dataset}
        setFileName={setFileName}
      />
      <DatasetTableWrapper
        loadingDataset={loadingDataset}
        setSnackbar={setSnackbar}
        setAttributes={setAttributes}
        attributes={attributes}
        dataset={dataset}
        fileName={fileName}
      />
      <UserActionsWrapper
        dataset={dataset}
        attributes={attributes}
        setAttributes={setAttributes}
        endpoint={arxaasEndpoint}
        fileName={fileName}
      />
      <Footer />
      <SnackbarWrapper
        snackbar={snackbar}
        setSnackbar={setSnackbar}
      />
    </div>
  );
}

export default App;
