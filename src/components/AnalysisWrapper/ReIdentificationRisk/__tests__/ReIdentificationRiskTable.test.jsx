/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { shallow } from '../../../../enzyme';


import ReIdentificationRiskTable from '../ReIdentificationRiskTable';
import reIdentificationRiskResponse from './reIdentificationRiskResponse';

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
  it('table renders every label and value', () => {
    const reIdentificationRisk = reIdentificationRiskResponse;
    const wrapper = shallow(
      <ReIdentificationRiskTable reIdentificationRisk={reIdentificationRisk} />,
    );
    const testCases = [
      <tr><td><b>Lowest risk: </b></td><td>0.66 %</td></tr>,
      <tr><td><b>Records affected by lowest risk: </b></td><td>40.12 %</td></tr>,
      <tr><td><b>Average prosecutor risk: </b></td><td>5.00 %</td></tr>,
      <tr><td><b>Highest prosecutor risk: </b></td><td>100.00 %</td></tr>,
      <tr><td><b>Records affected by highest prosecutor risk: </b></td><td>0.10 %</td></tr>,
      <tr><td><b>Prosecutor attacker success rate: </b></td><td>5.00 %</td></tr>,
      <tr><td><b>Highest journalist risk: </b></td><td>100.00 %</td></tr>,
      <tr><td><b>Records affected by highest journalist risk: </b></td><td>0.10 %</td></tr>,
      <tr><td><b>Journalist attacker success rate: </b></td><td>5.00 %</td></tr>,
      <tr><td><b>Marketer attacker success rate: </b></td><td>5.00 %</td></tr>,
      <tr><td><b>Estimated prosecutor risk: </b></td><td>100.00 %</td></tr>,
      <tr><td><b>Estimated journalist risk: </b></td><td>100.00 %</td></tr>,
      <tr><td><b>Estimated marketer risk: </b></td><td>5.00 %</td></tr>,
      <tr><td><b>Sample uniques: </b></td><td>0.10 %</td></tr>,
      <tr><td><b>Population uniques: </b></td><td>0.00 %</td></tr>,
      <tr><td><b>Population model: </b></td><td>ZAYATZ</td></tr>,
      <tr><td><b>Quasi-identifiers</b></td><td>Alder, Innvandrerbakgrunn, </td></tr>,
    ];
    // eslint-disable-next-line no-restricted-syntax
    for (const testCase of testCases) {
      expect(wrapper.contains(testCase)).toBeTruthy();
    }
  });
});
