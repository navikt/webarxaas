import React from 'react';

const MoreInfo = (props) => {
  const { showMoreInfo } = props;

  let content = '';

  if (showMoreInfo) {
    content = (
      <h1>To display Æ, Ø, and Å, make sure the dataset is saved as a CSV file with UTF-8</h1>
    );
  }

  return content;
};

export default MoreInfo;
