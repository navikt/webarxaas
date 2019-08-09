import React from 'react';
import { mount } from '../../../enzyme';
import SnackbarWrapper from '../SnackbarWrapper';

describe('test for SnackbarWrapper', () => {
  let mockSnackbar;
  const setMockSnackbar = (newSnackbar) => {
    mockSnackbar = newSnackbar;
  };

  let wrapper;
  beforeAll(() => {
    mockSnackbar = {
      open: true,
      variant: 'success',
      message: 'test',
    };
    wrapper = mount(<SnackbarWrapper snackbar={mockSnackbar} setSnackbar={setMockSnackbar} />);
  });
  it('Render component', () => {
    expect(wrapper.find('div.snackbar-content-wrapper').length).toEqual(1);
  });
});
