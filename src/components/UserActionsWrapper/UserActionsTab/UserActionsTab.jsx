import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const UserActionsTab = (props) => {
  const classes = useStyles();
  const { tabIndex, setTabIndex } = props;

  function handleChange(event, newValue) {
    setTabIndex(newValue);
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        centered
        aria-label="icon label tabs example"
      >
        <Tab icon={<AssessmentIcon />} label="Analyze Re-Identification Risk" />
        <Tab icon={<PersonPinIcon />} label="Anonymize Dataset" />
      </Tabs>
    </Paper>
  );
};

UserActionsTab.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  setTabIndex: PropTypes.func.isRequired,
};

export default UserActionsTab;
