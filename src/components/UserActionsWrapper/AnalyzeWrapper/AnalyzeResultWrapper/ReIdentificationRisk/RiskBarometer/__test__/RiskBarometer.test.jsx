import React from 'react';
import {
  BarChart, Bar,
} from 'recharts';
import RiskBarometer from '../RiskBarometer';
import { shallow } from '../../../../../../../enzyme';

describe('RiskBarometer: Render test', () => {
  let wrapper;
  let mockRisk;

  beforeAll(() => {
    mockRisk = 50.0;
    wrapper = shallow(<RiskBarometer risk={mockRisk} />);
  });

  it('Render test', () => {
    expect(wrapper.find('.risk-barometer').length).toEqual(1);
    expect(wrapper.find(Bar).length).toEqual(1);
    expect(wrapper.find(BarChart).length).toEqual(1);
  });
});
