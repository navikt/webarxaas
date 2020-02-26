import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import AnonymizeButton from '../AnonymizeButton';
import { shallow } from '../../../../../../enzyme';

describe('Test for AnonymizeButton', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<AnonymizeButton />);
  });

  it('Render test for AnonymizeButton', () => {
    expect(wrapper.find(Knapp).length).toEqual(1);
    expect(wrapper.contains(
      <p>
        <b>
          Due to the limit of web browsers,
          the client migth not be able to anonymize a dataset larger than 210MB.
        </b>
      </p>,
    )).toBeTruthy();
  });
});
