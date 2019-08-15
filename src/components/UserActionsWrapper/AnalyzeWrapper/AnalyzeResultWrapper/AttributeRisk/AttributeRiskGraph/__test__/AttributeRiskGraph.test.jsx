import React from 'react';
import {
  BarChart, Bar,
} from 'recharts';
import AttributeRiskGraph from '../AttributeRiskGraph';
import { shallow } from '../../../../../../../enzyme';

describe('AttributeRiskGraph: Render test', () => {
  let wrapper;
  let mockAttributeRisk;

  beforeAll(() => {
    mockAttributeRisk = {
      quasiIdentifierRiskList: [{
        identifier: ['Alder'],
        distinction: 0.0056,
        separation: 0.9591,
      }, {
        identifier: ['Innvandrerbakgrunn'],
        distinction: 0.0018,
        separation: 0.67,
      }],
    };
    wrapper = shallow(<AttributeRiskGraph attributeRisk={mockAttributeRisk} />);
  });

  it('Render test for graph', () => {
    expect(wrapper.find('.attribute-risk-graph').length).toEqual(1);
    expect(wrapper.find(Bar).length).toEqual(2);
    expect(wrapper.find(BarChart).length).toEqual(1);
  });
});
