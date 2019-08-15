import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HelpText from '../HelpText';
import { shallow } from '../../../enzyme';

describe('HelpText: Render Test', () => {
  let wrapper;
  let dialogContent;
  let dialogTitle;

  beforeAll(() => {
    dialogContent = 'Testing dialog content';
    dialogTitle = 'Testing dialog title';

    wrapper = shallow(<HelpText dialogTitle={dialogTitle} dialogContent={dialogContent} />);
  });

  it('Help text icon button render test', () => {
    expect(wrapper.find(IconButton).length).toEqual(1);
  });
  it('Help test dialogContent and dialogTitle render test', () => {
    expect(wrapper.contains(dialogContent)).toBeTruthy();
    expect(wrapper.contains(dialogTitle)).toBeTruthy();
  });
});
// helptest 