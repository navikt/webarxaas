import React from 'react';
import MoreInfo from '../MoreInfo';
import { shallow } from '../../../../enzyme';

describe('MoreInfo: Render test', () => {
  let emptyWrapper;
  let wrapper;
  const showMoreInfo = true;

  beforeAll(() => {
    wrapper = shallow(<MoreInfo showMoreInfo={showMoreInfo} />);
    emptyWrapper = shallow(<MoreInfo showMoreInfo={false} />);
  });

  it('MoreInfo is empty when showMoreInfo is false', () => {
    expect(emptyWrapper.find('.more-info').length).toEqual(0);
  });

  it('MoreInfo is not empty when showMoreInfo is false', () => {
    expect(wrapper.find('.more-info').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(8);
  });
});
