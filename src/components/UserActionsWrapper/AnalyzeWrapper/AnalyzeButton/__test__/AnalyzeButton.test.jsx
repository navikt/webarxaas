import React from 'react';
import { shallow } from '../../../../../enzyme';
import AnalyzeButton from '../AnalyzeButton';

describe('Test for analyze button', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<AnalyzeButton />);
  });
  it('Render component', () => {
    expect(wrapper.find('Knapp').length).toEqual(1);
  });
});
