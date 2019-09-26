import React from 'react';
import AttributeTypesDescription from '../AttributeTypesDescription';
import { shallow } from '../../../../enzyme';

describe('AttributeTypesDescription: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<AttributeTypesDescription />);
  });

  it('Render test', () => {
    expect(wrapper.contains(<p><b>Attribute types:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<b>Identifying</b>)).toBeTruthy();
    expect(wrapper.contains(<b>Quasi-identifying</b>)).toBeTruthy();
    expect(wrapper.contains(<b>Sensitive</b>)).toBeTruthy();
    expect(wrapper.contains(<b>Insensitive</b>)).toBeTruthy();
  });
});
