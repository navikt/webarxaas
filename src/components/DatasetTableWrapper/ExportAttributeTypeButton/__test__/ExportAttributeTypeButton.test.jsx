import React from 'react';
import Button from '@material-ui/core/Button';
import { shallow } from '../../../../enzyme';
import ExportAttributeTypeButton from '../ExportAttributeTypeButton';

describe('ExportAttributeTypeButton: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <ExportAttributeTypeButton />,
    );
  });

  it('Render test for button', () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });
});
