import React from 'react';
import ReactTable from 'react-table';
import AttributeRiskTable from '../AttributeRiskTable';
import { shallow } from '../../../../../../../enzyme';

describe('AttributeRiskTable: Render test', () => {
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
    wrapper = shallow(<AttributeRiskTable attributeRisk={mockAttributeRisk} />);
  });

  it('Render test', () => {
    expect(wrapper.find('.attribute-risk-table').length).toEqual(1);
    expect(wrapper.find(ReactTable).length).toEqual(1);
  });
});
