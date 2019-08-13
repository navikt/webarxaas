import React from 'react';
import ImportDatasetWrapper from '../ImportDatasetWrapper';
import ImportDataset from '../ImportDataset/ImportDataset';
import { shallow } from '../../../enzyme';

describe('ImportDatasetWrapper: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ImportDatasetWrapper />);
  });

  it('Render test', () => {
    expect(wrapper.find(ImportDataset).length).toEqual(1);
  });
});
