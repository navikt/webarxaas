import React from 'react';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import UserActionsTab from '../UserActionsTab';
import { shallow } from '../../../../enzyme';

describe('Test for UserActionsTab', () => {
  let wrapper;
  let tabIndex;
  const setTabIndex = (newTabIndex) => {
    tabIndex = newTabIndex;
  };

  beforeAll(() => {
    tabIndex = 0;
    wrapper = shallow(<UserActionsTab tabIndex={tabIndex} setTabIndex={setTabIndex} />);
  });

  it('Render test for UserActionsTab', () => {
    expect(wrapper.find(Paper).length).toEqual(1);
    expect(wrapper.find(Tab).length).toEqual(2);
  });
});
