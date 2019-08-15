import React from 'react';
import {
  BarChart, Bar,
} from 'recharts';
import RiskBarometer2Bars from '../RiskBarometer2Bars';
import { shallow } from '../../../../../../../enzyme';

describe('RiskBarometer: Render test', () => {
  let wrapper;
  let mockHighestRisk;
  let mockAffectedRecords;

  beforeAll(() => {
    mockHighestRisk = 50.0;
    mockAffectedRecords = 25.0;
    wrapper = shallow(
      <RiskBarometer2Bars highestRisk={mockHighestRisk} affectedRecords={mockAffectedRecords} />,
    );
  });

  it('Render test', () => {
    expect(wrapper.find('.risk-barometer-2-bars').length).toEqual(1);
    expect(wrapper.find(Bar).length).toEqual(2);
    expect(wrapper.find(BarChart).length).toEqual(1);
  });
});
