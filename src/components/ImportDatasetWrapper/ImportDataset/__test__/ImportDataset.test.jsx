import React from 'react';
import { shallow } from '../../../../enzyme';
import ImportDataset from '../ImportDataset';

describe('ImportDataset render tests', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ImportDataset />);
  });

  it('ImportDataset render test', () => {
    expect(wrapper.find('.import-dataset').length).toEqual(1);
  });
  it('ImportDataset button render test', () => {
    expect(wrapper.find('.import-dataset-input').length).toEqual(1);
  });
});
