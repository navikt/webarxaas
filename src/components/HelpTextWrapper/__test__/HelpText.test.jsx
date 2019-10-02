import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HelpText from '../HelpText';
import { shallow } from '../../../enzyme';

describe('HelpText: Render Test', () => {
  let wrapper;
  let dialogContent;
  let dialogTitle;
  let buttonType;

  beforeAll(() => {
    dialogContent = (<p>Testing dialog content</p>);
    dialogTitle = 'Testing dialog title';
    buttonType = true;
    wrapper = shallow(
      <HelpText
        dialogTitle={dialogTitle}
        dialogContent={dialogContent}
        buttonType={buttonType}
      />,
    );
  });

  it('Help text icon button render test', () => {
    expect(wrapper.find(IconButton).length).toEqual(1);
  });
  it('Help test dialogContent and dialogTitle render test', () => {
    expect(wrapper.contains(dialogContent)).toBeTruthy();
    expect(wrapper.contains(dialogTitle)).toBeTruthy();
    wrapper.find(IconButton).simulate('click');
    expect(wrapper.contains(<p>Testing dialog content</p>)).toBeTruthy();
  });
});
