import React from 'react';
import Footer from '../Footer';
import { shallow } from '../../../enzyme';

describe('Footer: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Footer />);
  });

  it('Render test', () => {
    expect(wrapper.find('.footer').length).toEqual(1);
    expect(wrapper.find('.image-a').length).toEqual(4);
    expect(wrapper.find('.text-a').length).toEqual(4);
  });
});
