import React from 'react';
import { shallow, mount } from '../../../../enzyme';
import MoreInfoButton from '../MoreInfoButton';
import App from '../../../App/App';

describe('test for MoreInfo button', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<MoreInfoButton />);
  });
  it('Render componet', () => {
    expect(wrapper.find('ToggleKnapp').length).toEqual(1);
  });

  it('Test button state change', () => {
    const app = mount(<App />);
    expect(app.contains(<h1>Information</h1>)).toEqual(false);
    app.find('ToggleKnapp').simulate('click');
    expect(app.contains(<h1>Information</h1>)).toEqual(true);
  });
});
