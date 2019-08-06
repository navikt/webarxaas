import React from 'react';
import './__css__/ImportAttributeTypeButton.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: 10,
  },
}));

const verifyAttributes = (
  jsonImportArray, jsonStateArray, setOpenSnackbar, setVariantSnackbar, setMessageSnackbar,
) => {
  if (jsonImportArray.length !== jsonStateArray.length) {
    setVariantSnackbar('error');
    setMessageSnackbar('Failed to import attributes. Attributes contained fewer or more indexes than attributes in dataset.');
    setOpenSnackbar(true);
    return false;
  }
  for (let i = 0; i < jsonStateArray.length; i += 1) {
    if (jsonStateArray[i].field !== jsonImportArray[i].field) {
      setVariantSnackbar('error');
      setMessageSnackbar('Failed to import attributes. Attributes contained entries that do not match attributes in dataset.');
      setOpenSnackbar(true);
      return false;
    }
  }
  setVariantSnackbar('success');
  setMessageSnackbar('Attributes imported successfully.');
  setOpenSnackbar(true);
  return true;
};

const ImportAttribute = (props) => {
  const classes = useStyles();
  const {
    setAttributes, attributes, setOpenSnackbar, setVariantSnackbar, setMessageSnackbar,
  } = props;
  const handleImport = (inputElement) => {
    if (inputElement.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonImportArray = JSON.parse(event.target.result);
        if (verifyAttributes(
          jsonImportArray, attributes, setOpenSnackbar, setVariantSnackbar, setMessageSnackbar,
        )) {
          setAttributes(jsonImportArray);
        }
      };
      reader.readAsText(inputElement.files[0]);
      // eslint-disable-next-line no-param-reassign
      inputElement.value = '';
    }
  };

  const content = (
    <label htmlFor="import-attribute-types-button">
      <Button variant="contained" component="span" className={classes.button}>
          Import Attribute Types From JSON
        <input
          className={classes.input}
          id="import-attribute-types-button"
          multiple
          type="file"
          onChange={e => handleImport(e.target)}
        />
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </label>
  );
  return content;
};
export default ImportAttribute;
