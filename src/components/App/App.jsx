import React, { useState } from 'react';
import env from '@beam-australia/react-env';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarMain from '../NavbarMain/NavbarMain';
import DatasetTableWrapper from '../DatasetTableWrapper/DatasetTableWrapper';
import ImportDatasetWrapper from '../ImportDatasetWrapper/ImportDatasetWrapper';
import UserActionsWrapper from '../UserActionsWrapper/UserActionsWrapper';
import Footer from '../Footer/Footer';
import SnackbarWrapper from '../SnackbarWrapper/SnackbarWrapper';
import UserManual from '../UserManualPage/UserManualPage';
import './__css__/App.css';
import DisclaimerHelpText from '../DisclaimerHelpText/DisclaimerHelpText';

function App() {
  const Home = () => {
    const [snackbar, setSnackbar] = useState({
      open: false,
      variant: '',
      message: '',
    });

    const [loadingDataset, setLoadingDataset] = useState(false);
    const [dataset, setDataset] = useState([]);
    const [datasetFile, setDatasetFile] = useState({});
    const [attributes, setAttributes] = useState([]);
    const [fileName, setFileName] = useState('');
    const arxaasEndpoint = env('ARXAAS_URL');

    return (
      <div>
        <DisclaimerHelpText />
        <ImportDatasetWrapper
          loadingDataset={loadingDataset}
          setSnackbar={setSnackbar}
          setLoadingDataset={setLoadingDataset}
          setAttributes={setAttributes}
          setDatasetFile={setDatasetFile}
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
          datasetFile={datasetFile}
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
  };

  const UserManualPage = () => (
    <UserManual />
  );

  return (
    <div className="App">
      <Router>
        <NavbarMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user-manual-page" component={UserManualPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
