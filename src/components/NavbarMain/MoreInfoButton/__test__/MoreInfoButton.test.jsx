import React from 'react';
import { shallow } from '../../../../enzyme';
import MoreInfoButton from '../MoreInfoButton';

describe('test for MoreInfo button', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<MoreInfoButton />);
  });
  it('Render componet', () => {
    expect(wrapper.find('ToggleKnapp').length).toEqual(1);
  });
});
