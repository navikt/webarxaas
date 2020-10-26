import React from 'react';
import { Select } from 'nav-frontend-skjema';
import AttributeTypeSelector from '../AttributeTypeSelector';
import { shallow } from '../../../../../enzyme';

describe('AttributeTypeSelector: Render test', () => {
  let wrapper;
  let mockAttributes;
  let mockDefaultTypes;
  const types = [
    ['QUASIIDENTIFYING', 'Quasi-identifying'],
    ['INSENSITIVE', 'Insensitive'],
    ['SENSITIVE', 'Sensitive'],
    ['IDENTIFYING', 'Identifying'],
  ];

  beforeAll(() => {
    mockAttributes = [
      { field: 'Series_reference', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Period', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Data_value', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Suppressed', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Status', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Units', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Magnitude', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Subject', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Group', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_1', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_2', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_3', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_4', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_5', attributeTypeModel: 'QUASIIDENTIFYING' },
    ];
    mockDefaultTypes = mockAttributes.map((attr) => attr.attributeTypeModel);
    wrapper = shallow(<AttributeTypeSelector defaultTypes={mockDefaultTypes} types={types} />);
  });

  it('Test for select tag to be rendered', () => {
    expect(wrapper.find(Select).length).toEqual(1);
  });
});
