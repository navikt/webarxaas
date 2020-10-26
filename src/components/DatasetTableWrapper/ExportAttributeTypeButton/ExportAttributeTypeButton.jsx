import React from 'react';
import './__css__/ExportAttributeTypeButton.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import handleAttributeExport from '../../../util/handleAttributeExport';

const useStyles = makeStyles((theme) => ({
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

  const content = (
    <Button variant="contained" className={classes.button} onClick={() => handleAttributeExport(attributes, fileName)}>
      Export Attribute Types as JSON
      <SaveIcon className={classes.rightIcon} />
    </Button>
  );
  return content;
};
export default ExportAttribute;
