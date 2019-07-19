/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { shallow } from '../../../../../enzyme';


import ReIdentificationRiskTable from '../ReIdentificationRiskTable/ReIdentificationRiskTable';
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
      <tr><td>Lowest risk: </td><td>0.66 %</td></tr>,
      <tr><td>Records affected by lowest risk: </td><td>40.12 %</td></tr>,
      <tr><td>Average prosecutor risk: </td><td>5.00 %</td></tr>,
      <tr><td>Highest prosecutor risk: </td><td>100.00 %</td></tr>,
      <tr><td>Records affected by highest prosecutor risk: </td><td>0.10 %</td></tr>,
      <tr><td>Prosecutor attacker success rate: </td><td>5.00 %</td></tr>,
      <tr><td>Highest journalist risk: </td><td>100.00 %</td></tr>,
      <tr><td>Records affected by highest journalist risk: </td><td>0.10 %</td></tr>,
      <tr><td>Journalist attacker success rate: </td><td>5.00 %</td></tr>,
      <tr><td>Marketer attacker success rate: </td><td>5.00 %</td></tr>,
      <tr><td>Estimated prosecutor risk: </td><td>100.00 %</td></tr>,
      <tr><td>Estimated journalist risk: </td><td>100.00 %</td></tr>,
      <tr><td>Estimated marketer risk: </td><td>5.00 %</td></tr>,
      <tr><td><b>Sample uniques: </b></td><td>0.10 %</td></tr>,
      <tr><td>Population uniques: </td><td>0.00 %</td></tr>,
      <tr><td>Population model: </td><td>ZAYATZ</td></tr>,
      <tr><td><b>Quasi-identifiers: </b></td><td>Alder, Innvandrerbakgrunn, </td></tr>,
    ];
    // eslint-disable-next-line no-restricted-syntax
    for (const testCase of testCases) {
      expect(wrapper.contains(testCase)).toBeTruthy();
    }
  });
});
