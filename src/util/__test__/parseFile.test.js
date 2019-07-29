import ParseFile from '../parseFile';

describe('Unit test for parsing csv files', () => {
  let testFile = '';
  let attributes = [];
  let dataset = '';
  let defaultAttributeType;
  let loadingDataset = true;

  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };
  const setDataset = (newDataset) => {
    dataset = newDataset;
  };
  const setLoadingDataset = (newLoadingDataset) => {
    loadingDataset = newLoadingDataset;
  };

  beforeAll(() => {
    testFile = 'Navn;Alder;Innvandrerbakgrunn;Medisinsk forhold\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nSolveig;37;Malta;Ingen';
    defaultAttributeType = 'QUASIIDENTIFYING';
  });

  it('file correctly parse', () => {
    const expected = [['Navn', 'Alder', 'Innvandrerbakgrunn', 'Medisinsk forhold'],
      ['Eirik', '47', 'Togo', 'Ingen'],
      ['Ella', '30', 'Surinam', 'Ingen'],
      ['Solveig', '37', 'Malta', 'Ingen']];
    ParseFile(testFile, setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
    expect(dataset).toEqual(expected);
  });

  it('attributes correctly set', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
    ParseFile(testFile, setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
    expect(attributes).toEqual(expected);
  });

  it('loadingDataset to be set to false', () => {
    ParseFile(testFile, setAttributes, setDataset, defaultAttributeType, setLoadingDataset);
    expect(loadingDataset).toEqual(false);
  });
});
