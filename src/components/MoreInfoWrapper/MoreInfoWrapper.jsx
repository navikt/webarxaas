import React from 'react';
import MoreInfo from './MoreInfo/MoreInfo';

const MoreInfoWrapper = (props) => {
  const { showMoreInfo } = props;

  const content = (
    <div className="more-info-wrapper">
      <MoreInfo
        showMoreInfo={showMoreInfo}
      />
    </div>
  );
  return content;
};
export default MoreInfoWrapper;
