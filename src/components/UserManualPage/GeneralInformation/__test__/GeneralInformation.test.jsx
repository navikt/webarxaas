import React from 'react';
import GeneralInformation from '../GeneralInformation';
import { shallow } from '../../../../enzyme';
import QuestionMarkHelpText from '../GeneralInformationHelpText/QuestionMarkHelpText';

describe('GeneralInformation: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<GeneralInformation />);
  });

  it('Render test', () => {
    expect(wrapper.contains(<h1>General Information</h1>)).toBeTruthy();
    expect(wrapper.contains('Question mark help text:')).toBeTruthy();
    expect(wrapper.contains('CSV import file:')).toBeTruthy();
    expect(wrapper.contains('Attribute types:')).toBeTruthy();
    expect(wrapper.contains('Privacy models:')).toBeTruthy();
    expect(wrapper.find(QuestionMarkHelpText).length).toEqual(1);
  });
});
