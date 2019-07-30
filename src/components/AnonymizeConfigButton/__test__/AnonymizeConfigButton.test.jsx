import React from 'react';
import { shallow, mount } from '../../../enzyme';
import AnonymizeConfigButton from '../AnonymizeConfigButton';

describe('Test for anonymize button', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<AnonymizeConfigButton />);
  });
  it('Render component', () => {
    expect(wrapper.find('ToggleKnapp').length).toEqual(1);
  });

  it('Test button state change', () => {
    const mockFunction = jest.fn();
    const app = mount(<AnonymizeConfigButton />);
    app.setProps({ setShowAnonymizationConfig: mockFunction });
    app.find('ToggleKnapp').simulate('click');
    app.find('ToggleKnapp').simulate('click');
    app.find('ToggleKnapp').simulate('click');
    app.find('ToggleKnapp').simulate('click');
    expect(mockFunction.mock.calls).toEqual([[true], [false], [true], [false]]);
  });
});
