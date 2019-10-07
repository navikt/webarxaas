import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import AnonymizeReportWrapper from '../AnonymizeReportWrapper';
import { shallow } from '../../../../../enzyme';

describe('Test for AnonymizeReportWrapper', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<AnonymizeReportWrapper />);
  });

  it('Render test for AnonymizeReportWrapper', () => {
    expect(wrapper.find(Knapp).length).toEqual(2);
  });
});
