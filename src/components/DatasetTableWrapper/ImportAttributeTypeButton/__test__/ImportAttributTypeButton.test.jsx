import React from 'react';
import Button from '@material-ui/core/Button';
import { shallow } from '../../../../enzyme';
import ImportAttributeTypeButton from '../ImportAttributeTypeButton';

describe('ImportAttributeTypeButton: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <ImportAttributeTypeButton />,
    );
  });

  it('Render test for button', () => {
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(1);
  });
});
