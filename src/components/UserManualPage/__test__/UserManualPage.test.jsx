import React from 'react';
import UserManualPage from '../UserManualPage';
import { shallow } from '../../../enzyme';
import GeneralInformation from '../GeneralInformation/GeneralInformation';
import AnalyzeManual from '../AnalyzeManual/AnalyzeManual';
import AnonymizeManual from '../AnonymizeManual/AnonymizeManual';

describe('UserManualPage: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<UserManualPage />);
  });

  it('Render test', () => {
    expect(wrapper.contains(<h1>User Manual</h1>)).toBeTruthy();
    expect(wrapper.find(GeneralInformation).length).toEqual(1);
    expect(wrapper.find(AnalyzeManual).length).toEqual(1);
    expect(wrapper.find(AnonymizeManual).length).toEqual(1);
  });
});
