import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Alert from 'react-bootstrap/Alert';
import NavFrontendSpinner from 'nav-frontend-spinner';
import DatasetTable from './DatasetTable/DatasetTable';
import ExportAttributeButton from './ExportAttributeTypeButton/ExportAttributeTypeButton';
import ImportAttributeButton from './ImportAttributeTypeButton/ImportAttributeTypeButton';
import HelpText from '../HelpTextWrapper/HelpText';
import './__css__/DatasetTableWrapper.css';

const dialogTitleAttributeTypes = 'Attribute types:';

const dialogContentAttributeTypes = (
  <div>
    <p><b>Attribute types:</b></p>
    <ul>
      <li>
        <b>Identifying </b>
        attributes are associated with a high risk of re-identification.
        <br />
        Typical examples are names or Social Security Numbers.
      </li>
      <li>
        <b>Quasi-identifying </b>
        attributes can in combination be used for re-identification attacks.
        <br />
        Typical examples are gender, date of birth and ZIP codes.
      </li>
      <li>
        <b>Sensitive </b>
        attributes encode properties with which individuals are not willing to be linked with.
        <br />
        As such, they might be of interest to an attacker and,
         if disclosed, could cause harm to data subjects.
        <br />
        They will be kept unmodified but may be subject to further constraints,
         such as t-closeness or l-diversity.
        <br />
        Typical examples are diagnoses.
      </li>
      <li>
        <b>Insensitive </b>
        attributes are not associated with privacy risks.
      </li>
    </ul>
    <br />
    <p>Attribute types are by default set to quasi-identifying.</p>
  </div>
);

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
            Previewing first 100 of
            {' '}
            {dataset.length}
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
          <HelpText
            dialogTitle={dialogTitleAttributeTypes}
            dialogContent={dialogContentAttributeTypes}
          />
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
