import React from 'react';
import { shallow } from '../../../../enzyme';
import ImportDataset from '../ImportDataset';

describe('ImportDataset: Render tests', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ImportDataset dataset={[]} />);
  });

  it('Render component', () => {
    expect(wrapper.find('.import-dataset').length).toEqual(1);
  });
  it('Render child element: import-dataset-input', () => {
    expect(wrapper.find('.import-dataset-input').length).toEqual(1);
  });
});
