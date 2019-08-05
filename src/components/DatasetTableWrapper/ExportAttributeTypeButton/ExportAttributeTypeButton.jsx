import React from 'react';
import './__css__/ExportAttributeTypeButton.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: 10,
  },
}));

const ExportAttribute = (props) => {
  const { attributes, fileName } = props;
  const classes = useStyles();

  const handleExport = () => {
    const json = JSON.stringify(attributes);
    const element = document.createElement('a');
    const jsonData = new Blob([json], { type: 'application/json' });
    element.href = URL.createObjectURL(jsonData);
    element.download = fileName ? fileName.toString().replace('.csv', '').concat('_Attributes.json') : 'export_Attributes.json';
    document.body.appendChild(element); // Required for this to work on Firefox
    element.click();
  };

  const content = (
    <Button variant="contained" className={classes.button} onClick={() => handleExport()}>
    Export Attribute Types as JSON
      <SaveIcon className={classes.rightIcon} />
    </Button>
  );
  return content;
};
export default ExportAttribute;
