import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Chip from '@material-ui/core/Chip';


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

  const updateSuppressionLimit = (newLimit) => {
    const limit = parseInt(newLimit, 10) || 0;
    if (limit > 100) {
      setSuppressionLimit(100);
    } else if (limit < 0) {
      setSuppressionLimit(0);
    } else {
      setSuppressionLimit(limit);
    }
  };

  const content = (
    <div className="suppression-limit" align="center">
      <TextField
        id="standard-with-placeholder"
        label="Set Suppression Limit"
        type="number"
        defaultValue={0}
        onChange={event => updateSuppressionLimit(event.target.value)}
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
