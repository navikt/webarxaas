import React from 'react';
import './__css__/ImportAttributeTypeButton.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import verifyAttributes from '../../../util/verifyAttributes';

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

const ImportAttribute = (props) => {
  const classes = useStyles();
  const {
    setAttributes, attributes, setSnackbar,
  } = props;
  const handleImport = (inputElement) => {
    if (inputElement.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const jsonImportArray = JSON.parse(event.target.result);
        if (verifyAttributes(
          jsonImportArray, attributes, setSnackbar,
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
