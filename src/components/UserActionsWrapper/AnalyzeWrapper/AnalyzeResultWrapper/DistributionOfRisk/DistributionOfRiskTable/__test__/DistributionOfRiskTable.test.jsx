import React from 'react';
import ReactTable from 'react-table';
import DistributionOfRiskTable from '../DistributionOfRiskTable';
import { shallow } from '../../../../../../../enzyme';

describe('AttributeRiskTable: Render test', () => {
  let wrapper;
  let mockRiskIntervalList;

  beforeAll(() => {
    mockRiskIntervalList = [{
      interval: '[50,100]',
      recordsWithMaximalRiskWithinInterval: 1,
      recordsWithRiskWithinInterval: 0.4098,
    }, {
      interval: '[33.4,50)',
      recordsWithMaximalRiskWithinInterval: 0.5902,
      recordsWithRiskWithinInterval: 0.174,
    }];
    wrapper = shallow(<DistributionOfRiskTable riskIntervalList={mockRiskIntervalList} />);
  });

  it('Render test', () => {
    expect(wrapper.find('.distribution-of-risk-table').length).toEqual(1);
    expect(wrapper.find(ReactTable).length).toEqual(1);
  });
});
