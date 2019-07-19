import React from 'react';
import { shallow } from '../../../../enzyme';
import DatasetTable from '../DatasetTable';

describe('DatasetTable: Render tests', () => {
  let wrapper;
  let mockDataset;
  let mockAttributes;
  beforeAll(() => {
    mockDataset = 'Navn,Alder,Innvandrerbakgrunn,Medisinsk forhold,Eirik,47,Togo,Ingen,Ella,30,Surinam,Ingen,Solveig,37,Malta,Ingen,Eirik,52,Norge,Ingen,Heidi,37,Surinam,Ingen';
    mockAttributes = [
      { field: 'Series_reference', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Period', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Data_value', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Suppressed', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Status', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Units', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Magnitude', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Subject', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Group', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_1', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_2', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_3', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_4', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Series_title_5', attributeTypeModel: 'QUASIIDENTIFYING' },
    ];

    wrapper = shallow(
      <DatasetTable
        dataset={mockDataset}
        attributes={mockAttributes}
      />,
    );
  });

  it('Render component', () => {
    expect(wrapper.find('.dataset-table').length).toEqual(1);
  });
});
