import React from 'react';
import { Navbar } from 'react-bootstrap';
import MoreInfoButton from '../MoreInfoButton/MoreInfoButton';
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
    expect(wrapper.find(MoreInfoButton).length).toEqual(1);
  });
});
