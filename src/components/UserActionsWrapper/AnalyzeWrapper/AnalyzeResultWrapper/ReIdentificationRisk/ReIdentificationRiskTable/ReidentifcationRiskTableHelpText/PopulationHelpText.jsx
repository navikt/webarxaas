import React from 'react';
import HelpText from '../../../../../../HelpTextWrapper/HelpText';

const PopulationHelpText = () => {
  const dialogTitlePopulation = 'Population:';

  const dialogContentPopulation = (
    <div>
      <p>
        The
        {' '}
        <b>population uniqueness </b>
        privacy model aims at protecting dataset from re-identification
        in the marketer model by enforcing thresholds on the proportion of records
        that are unique within the underlying population. For this purpose, basic
        information about the population has to be specified. Based on this data,
        statistical super-population models are used to estimate characteristics
        of the overall population with probability distributions that are
        parameterized with sample characteristics.
      </p>
      <br />
      <p>The supported models are PITMAIN and SNB.</p>
    </div>
  );

  const content = (
    <HelpText
      dialogTitle={dialogTitlePopulation}
      dialogContent={dialogContentPopulation}
      buttonType
    />
  );
  return content;
};

export default PopulationHelpText;
