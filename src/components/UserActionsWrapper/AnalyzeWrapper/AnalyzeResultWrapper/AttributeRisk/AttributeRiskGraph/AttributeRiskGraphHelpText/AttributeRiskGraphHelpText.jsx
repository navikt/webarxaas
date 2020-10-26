import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const AttributeRiskGraphHelpText = () => {
  const dialogTitleDistinctionAndSeparation = 'Distinction and Separation:';

  const dialogContentDistinctionAndSeparation = (
    <div>
      <p>
        <b>Distinction</b>
        {' '}
        represents the ratio between the unique values
        for the quasi-identifiers and the total number of records.
        <br />
        <br />
        <b>Separation</b>
        {' '}
        represents the ratio between pairs of records with at least one
        different value for their quasi-identifiers, and the total number
        of ways that two different records can be paired. In general, a
        higher distinction and separation are indicators that the
        quasi-identifiers are more likely to re-identify a record.
      </p>
      {' '}
      <p>
        The X-axis displays the Quasi-identifying attributes.
        <br />
        The Y-axis displays Distinction and Separation in percent.
      </p>
    </div>
  );
  const content = (
    <HelpText
      dialogTitle={dialogTitleDistinctionAndSeparation}
      dialogContent={dialogContentDistinctionAndSeparation}
      buttonType
    />
  );
  return content;
};

export default AttributeRiskGraphHelpText;
