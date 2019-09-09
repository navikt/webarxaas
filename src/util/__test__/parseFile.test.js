import ParseFile from '../parseFile';

describe('Unit test for parsing csv files', () => {
  let testFile = '';
  let attributes = [];
  let dataset = '';
  let defaultAttributeType;
  let loadingDataset = true;
  let snackbar = {};

  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };
  const setDataset = (newDataset) => {
    dataset = newDataset;
  };
  const setLoadingDataset = (newLoadingDataset) => {
    loadingDataset = newLoadingDataset;
  };
  const setSnackbar = (newSnackbar) => {
    snackbar = newSnackbar;
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
    ParseFile(
      testFile, setAttributes, setDataset,
      defaultAttributeType, setLoadingDataset, setSnackbar,
    );
    expect(dataset).toEqual(expected);
  });

  it('attributes correctly set', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
    ParseFile(
      testFile, setAttributes, setDataset,
      defaultAttributeType, setLoadingDataset, setSnackbar,
    );
    expect(attributes).toEqual(expected);
  });

  it('loadingDataset to be set to false', () => {
    ParseFile(
      testFile, setAttributes, setDataset,
      defaultAttributeType, setLoadingDataset, setSnackbar,
    );
    expect(loadingDataset).toEqual(false);
  });

  it('loading a dataset will update snackbar variable', () => {
    const expected = {
      open: true,
      variant: 'success',
      message: 'Dataset imported successfully.',
    };
    ParseFile(
      testFile, setAttributes, setDataset,
      defaultAttributeType, setLoadingDataset, setSnackbar,
    );
    expect(snackbar).toEqual(expected);
  });

  it('test for failed loading dataset to show correct snackbar', () => {
    const expected = {
      open: true,
      variant: 'error',
      message: 'Failed to import dataset.',
    };
    ParseFile(
      null, setAttributes, setDataset,
      defaultAttributeType, setLoadingDataset, setSnackbar,
    );
    expect(snackbar).toEqual(expected);
  });

  it('test rows previewed when loading dataset', () => {
    const expected = 4;

    ParseFile(
      testFile, setAttributes, setDataset,
      defaultAttributeType, setLoadingDataset, setSnackbar,
    );
    expect(dataset.length).toEqual(expected);
  });

  it('test rows previewed when loading dataset with more than a 100 rows', () => {
    const expected = 101;

    const testFile121Rows = 'Navn;Alder;Innvandrerbakgrunn;Medisinsk forhold\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Eirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\nEirik;47;Togo;Ingen\nElla;30;Surinam;Ingen\nEirik;47;Togo;Ingen\n'
    + 'Solveig;37;Malta;Ingen';
    ParseFile(
      testFile121Rows, setAttributes, setDataset,
      defaultAttributeType, setLoadingDataset, setSnackbar,
    );
    expect(dataset.length).toEqual(expected);
  });
});
