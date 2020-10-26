import React from 'react';
import { shallow } from '../../../enzyme';
import DisclaimerHelpText from '../DisclaimerHelpText';
import HelpText from '../../HelpTextWrapper/HelpText';

describe('Test for disclaimer help text component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<DisclaimerHelpText />);
  });

  it('Test for component rendering', () => {
    expect(wrapper.contains(
      <p className="disclaimer-text">
        By using this service you acknowledge
        that you have read and understand the
      </p>,
    )).toBeTruthy();

    expect(wrapper.find(HelpText).length).toEqual(1);
  });
});
