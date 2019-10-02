import React from 'react';
import HelpText from '../../../../HelpTextWrapper/HelpText';

const HierarchiesHelpText = () => {
  const dialogTitleHierarchies = 'Hierarchies:';

  const dialogContentHierarchies = (
    <p>
      Hierarchies are strategies that define how the data is generalized.
      <br />
      <br />
      Import hierarchy transformation models from CSV file.
    </p>
  );
  const content = (
    <HelpText
      dialogTitle={dialogTitleHierarchies}
      dialogContent={dialogContentHierarchies}
      buttonType
    />
  );
  return content;
};

export default HierarchiesHelpText;
