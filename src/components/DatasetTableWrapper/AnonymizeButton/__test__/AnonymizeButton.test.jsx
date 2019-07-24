import React from 'react';
import { shallow } from '../../../../enzyme';
import AnonymizeButton from '../AnonymizeButton';

describe('Test for anonymize button', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<AnonymizeButton />);
  });
  it('Render component', () => {
    expect(wrapper.find('ToggleKnapp').length).toEqual(1);
  });
});
