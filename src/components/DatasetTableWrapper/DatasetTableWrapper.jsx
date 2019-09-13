import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Alert from 'react-bootstrap/Alert';
import NavFrontendSpinner from 'nav-frontend-spinner';
import DatasetTable from './DatasetTable/DatasetTable';
import ExportAttributeButton from './ExportAttributeTypeButton/ExportAttributeTypeButton';
import ImportAttributeButton from './ImportAttributeTypeButton/ImportAttributeTypeButton';
import './__css__/DatasetTableWrapper.css';
import DatasetTableWrapperHelpText from './DatasetTableWrapperHelpText/DatasetTableWrapperHelpText';

const useStyles = makeStyles({
  paper: {
    padding: ' 1em 0 2em 0',
  },
});

const DatasetTableWrapper = (props) => {
  const classes = useStyles();
  const {
    loadingDataset, setSnackbar,
    setAttributes, dataset, attributes, fileName,
  } = props;

  let content = '';

  if (loadingDataset) {
    content = (
      <div className="dataset-table-wrapper wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (dataset.length > 1) {
    content = (
      <div className="dataset-table-wrapper wrapper">
        <Paper className={classes.paper} elevation={3}>
          <Alert variant="info">
            Previewing the first
            {' '}
            {dataset.length - 1}
            {' '}
            rows in
            {' '}
            {fileName}
          </Alert>
          <ImportAttributeButton
            setAttributes={setAttributes}
            attributes={attributes}
            setSnackbar={setSnackbar}
          />
          <ExportAttributeButton
            attributes={attributes}
            fileName={fileName}
          />
          <DatasetTableWrapperHelpText />
          <DatasetTable
            setAttributes={setAttributes}
            dataset={dataset}
            attributes={attributes}
          />
        </Paper>
      </div>
    );
  }
  return content;
};

export default DatasetTableWrapper;
