import ParseFile from '../parseFile';
import testCSVFile from './TestData/testCSVFile.csv';

describe('Unit test for parsing csv files', () => {
  let testFile;
  let attributes = [];
  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };
  let dataset = '';
  const setDataset = (newDataset) => {
    dataset = newDataset;
  };
  let defaultAttributeType;
  let loadingDataset = true;
  const setLoadingDataset = (newLoadingDataset) => {
    loadingDataset = newLoadingDataset;
  };
  beforeAll(() => {
    const blob = new Blob([testCSVFile]);
    testFile = blob;
    defaultAttributeType = 'QUASIIDENTIFYING';
  });
  it('file correctly parse', () => {
    ParseFile(testFile, setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
    expect(dataset.length).toEqual(1);
  });
  it('attributes correctly set', () => {
    ParseFile(testFile, setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
    expect(attributes.length).toEqual(1);
  });
  it('loadingDataset to be set to false', () => {
    ParseFile(testFile, setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
    expect(loadingDataset).toEqual(false);
  });
});
