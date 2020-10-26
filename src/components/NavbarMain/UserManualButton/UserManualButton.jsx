import React from 'react';
import './__css__/UserManualButton.css';
import { Button } from '@material-ui/core';

const UserManualButton = () => {
  const content = (
    <div className="user-manual-button">
      <Button
        variant="outlined"
        color="inherit"
        href="/user-manual-page"
      >
        User Manual
      </Button>
    </div>
  );

  return content;
};

export default UserManualButton;
