import React from 'react';
import { Navbar } from 'react-bootstrap';
import UserManualButton from '../UserManualButton/UserManualButton';
import NavBarMain from '../NavbarMain';
import { shallow } from '../../../enzyme';

describe('NavbarMain: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<NavBarMain />);
  });

  it('Render test', () => {
    expect(wrapper.find('.navbar-main').length).toEqual(1);
    expect(wrapper.find(Navbar).length).toEqual(1);
    expect(wrapper.find(UserManualButton).length).toEqual(1);
  });
});
