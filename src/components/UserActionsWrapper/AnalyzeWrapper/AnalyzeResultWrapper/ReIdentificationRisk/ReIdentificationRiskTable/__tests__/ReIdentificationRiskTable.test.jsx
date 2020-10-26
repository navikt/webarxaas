/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { shallow } from '../../../../../../../enzyme';

import ReIdentificationRiskTable from '../ReIdentificationRiskTable';
import reIdentificationRiskResponse from './reIdentificationRiskResponse.json';

describe('reidentificationrisk table tests', () => {
  it('every risk value renders', () => {
    const reIdentificationRisk = reIdentificationRiskResponse;
    const wrapper = shallow(
      <ReIdentificationRiskTable reIdentificationRisk={reIdentificationRisk} />,
    );
    const testCases = [
      <td>0.66 %</td>,
      <td>40.12 %</td>,
      <td>5.00 %</td>,
      <td>100.00 %</td>,
      <td>0.10 %</td>,
      <td>5.00 %</td>,
      <td>100.00 %</td>,
      <td>0.10 %</td>,
      <td>5.00 %</td>,
      <td>5.00 %</td>,
      <td>100.00 %</td>,
      <td>100.00 %</td>,
      <td>5.00 %</td>,
      <td>0.10 %</td>,
      <td>0.00 %</td>];
    // eslint-disable-next-line no-restricted-syntax
    for (const testCase of testCases) {
      expect(wrapper.contains(testCase)).toBeTruthy();
    }
  });
});
