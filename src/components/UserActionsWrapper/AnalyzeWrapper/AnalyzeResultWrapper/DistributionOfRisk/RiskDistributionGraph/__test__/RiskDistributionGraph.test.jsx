import React from 'react';
import {
  BarChart, Bar,
} from 'recharts';
import RiskDistributionGraph from '../RiskDistributionGraph';
import { shallow } from '../../../../../../../enzyme';

describe('AttributeRiskTable: Render test', () => {
  let wrapper;
  let mockRiskDistribution;

  beforeAll(() => {
    mockRiskDistribution = [{
      interval: '[50,100]',
      recordsWithMaximalRiskWithinInterval: 1,
      recordsWithRiskWithinInterval: 0.4098,
    }, {
      interval: '[33.4,50)',
      recordsWithMaximalRiskWithinInterval: 0.5902,
      recordsWithRiskWithinInterval: 0.174,
    }];
    wrapper = shallow(<RiskDistributionGraph RiskDistribution={mockRiskDistribution} />);
  });

  it('Render test', () => {
    expect(wrapper.find('.risk-distribution-graph').length).toEqual(1);
    expect(wrapper.find(Bar).length).toEqual(1);
    expect(wrapper.find(BarChart).length).toEqual(1);
  });
});
