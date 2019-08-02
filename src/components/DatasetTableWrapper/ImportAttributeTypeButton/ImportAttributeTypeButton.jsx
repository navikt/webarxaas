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


const ImportAttribute = (props) => {
  const classes = useStyles();
  const { setAttributes } = props;
  const handleImport = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const json = JSON.parse(event.target.result);
        setAttributes(json);
      };
      reader.readAsText(file);
    }
  };

  const content = (
    <label htmlFor="import-attribute-types-button">
      <Button variant="contained" component="span" className={classes.button}>
          Import Attribute types
        <input
          className={classes.input}
          id="import-attribute-types-button"
          multiple
          type="file"
          onChange={e => handleImport(e.target.files[0])}
        />
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
    </label>
  );
  return content;
};
export default ImportAttribute;
