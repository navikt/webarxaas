import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const SampleUniquesHelpText = () => {
  const dialogTitleSampleUniqueness = 'Sample Uniques:';

  const dialogContentSampleUniqueness = (
    <div>
      <p>
        <b>Sample Uniques </b>
        displays the dataset unique data in percent.
      </p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitleSampleUniqueness}
      dialogContent={dialogContentSampleUniqueness}
      buttonType
    />
  );
  return content;
};

export default SampleUniquesHelpText;
