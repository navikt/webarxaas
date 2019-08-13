import React from 'react';
import MoreInfo from '../MoreInfo/MoreInfo';
import MoreInfoWrapper from '../MoreInfoWrapper';
import { shallow } from '../../../enzyme';

describe('MoreInfoWrapper: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<MoreInfoWrapper />);
  });

  it('Render test', () => {
    expect(wrapper.find(MoreInfo).length).toEqual(1);
  });
});
