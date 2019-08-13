import React from 'react';
import Paper from '@material-ui/core/Paper';
import Alert from 'react-bootstrap/Alert';
import DatasetTable from '../DatasetTable/DatasetTable';
import ExportAttributeButton from '../ExportAttributeTypeButton/ExportAttributeTypeButton';
import ImportAttributeButton from '../ImportAttributeTypeButton/ImportAttributeTypeButton';
import DatasetTableWrapper from '../DatasetTableWrapper';
import { shallow } from '../../../enzyme';

describe('DatasetTableWrapper: Render test', () => {
  let emptyDatasetWrapper;
  let wrapper;
  let emptyDataset;
  let dataset;

  beforeAll(() => {
    emptyDataset = '';
    dataset = 'Navn,Alder,Innvandrerbakgrunn,Medisinsk forhold,Eirik,47,Togo,Ingen,Ella,30,Surinam,Ingen,Solveig,37,Malta,Ingen,Eirik,52,Norge,Ingen,Heidi,37,Surinam,Ingen';
    emptyDatasetWrapper = shallow(<DatasetTableWrapper dataset={emptyDataset} />);
    wrapper = shallow(<DatasetTableWrapper dataset={dataset} />);
  });

  it('DatasetWrapper empty when no csv file is uploaded', () => {
    expect(emptyDatasetWrapper.find(DatasetTableWrapper).length).toEqual(0);
  });

  it('DatasetWrapper has content when csv file is uploaded', () => {
    expect(wrapper.find(DatasetTable).length).toEqual(1);
    expect(wrapper.find(ExportAttributeButton).length).toEqual(1);
    expect(wrapper.find(ImportAttributeButton).length).toEqual(1);
    expect(wrapper.find(Alert).length).toEqual(1);
    expect(wrapper.find(Paper).length).toEqual(1);
  });
});
