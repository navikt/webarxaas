import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Chip from '@material-ui/core/Chip';
import updateSuppressionLimit from '../../../../../util/updateSuppressionLimit';

const useStyles = makeStyles({
  textField: {
    width: 200,
  },

  chip: {
    margin: '2em 0em 2em 0',
  },
});

const SuppressionLimit = (props) => {
  const classes = useStyles();
  const { suppressionLimit, setSuppressionLimit } = props;
  const suppressionLabel = `Suppression Limit: ${suppressionLimit} %`;

  const content = (
    <div className="suppression-limit" align="center">
      <TextField
        id="standard-with-placeholder"
        label="Set Suppression Limit"
        type="number"
        defaultValue={0}
        onChange={(event) => updateSuppressionLimit(event.target.value, setSuppressionLimit)}
        InputProps={{
          inputProps: { min: 0, max: 100 },
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        className={classes.textField}
        margin="normal"
      />
      <br />
      <Chip
        label={suppressionLabel}
        className={classes.chip}
        color="primary"
      />
    </div>
  );
  return content;
};
export default SuppressionLimit;
