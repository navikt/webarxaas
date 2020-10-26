import React from 'react';
import ImportManual from '../ImportManual';
import { shallow } from '../../../../enzyme';
import ImportDataset from '../ImportManualImages/ImportDataset.png';
import DatasetPreview from '../ImportManualImages/DatasetPreview.png';
import ImportAndExportAttributes from '../ImportManualImages/ImportAndExportAttributes.png';
import AttributeTypesDescription from '../../AttributeTypesDescription/AttributeTypesDescription';

describe('ImportManual: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ImportManual />);
  });

  it('Render test', () => {
    expect(wrapper.contains(<p><b>Import data set:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<p><b>Attributes:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={ImportDataset} alt="Import Dataset img" />)).toBeTruthy();
    expect(wrapper.contains(<img src={DatasetPreview} alt="Dataset Preview" />)).toBeTruthy();
    expect(wrapper.contains(<img src={ImportAndExportAttributes} alt="Import And Export Attributes" />)).toBeTruthy();
    expect(wrapper.find(AttributeTypesDescription).length).toEqual(1);
  });
});
