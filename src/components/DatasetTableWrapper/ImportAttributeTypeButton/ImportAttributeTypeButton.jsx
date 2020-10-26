import React from 'react';
import './__css__/ImportAttributeTypeButton.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import handleAttributeImport from '../../../util/handleAttributeImport';

const useStyles = makeStyles((theme) => ({
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

  const content = (
    <label htmlFor="import-attribute-types-button">
      <Button variant="contained" component="span" className={classes.button}>
        Import Attribute Types From JSON
        <input
          className={classes.input}
          id="import-attribute-types-button"
          multiple
          type="file"
          onChange={(e) => handleAttributeImport(e.target, attributes, setSnackbar, setAttributes)}
        />
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </label>
  );
  return content;
};
export default ImportAttribute;
