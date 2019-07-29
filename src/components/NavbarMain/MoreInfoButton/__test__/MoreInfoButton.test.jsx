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
    const moreInfoText = (<h1>Information</h1>);
    const app = mount(<App />);
    expect(app.contains(moreInfoText)).toEqual(false);
    app.find('ToggleKnapp').simulate('click');
    expect(app.contains(moreInfoText)).toEqual(true);
    app.find('ToggleKnapp').simulate('click');
    expect(app.contains(moreInfoText)).toEqual(false);
  });
});
