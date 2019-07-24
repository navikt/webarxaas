import React from 'react';
import { shallow } from '../../../../enzyme';
import AnonymizeConfigButton from '../AnonymizeConfigButton';

describe('Test for anonymize button', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<AnonymizeConfigButton />);
  });
  it('Render component', () => {
    expect(wrapper.find('ToggleKnapp').length).toEqual(1);
  });
});
