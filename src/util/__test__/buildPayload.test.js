import BuildPayload from '../buildPayload';

describe('Test for buildpayload', () => {
  let dataset;
  let attributes;
  let privacyModels;
  let suppressionLimit;

  beforeAll(() => {
    dataset = [['Navn', 'Alder', 'Innvandrerbakgrunn', 'Medisinsk forhold'],
      ['Eirik', '47', 'Togo', 'Ingen'],
      ['Ella', '30', 'Surinam', 'Ingen'],
      ['Solveig', '37', 'Malta', 'Ingen']];
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
    privacyModels = [{ privacyModel: 'KANONYMITY', params: { k: '2' } }];
    suppressionLimit = 10;
  });

  it('json object correctly made', () => {
    const expected = {
      attributes: [
        { attributeTypeModel: 'QUASIIDENTIFYING', field: 'Navn', hierarchy: null },
        { attributeTypeModel: 'QUASIIDENTIFYING', field: 'Alder', hierarchy: null },
        { attributeTypeModel: 'QUASIIDENTIFYING', field: 'Innvandrerbakgrunn', hierarchy: null },
        { attributeTypeModel: 'QUASIIDENTIFYING', field: 'Medisinsk forhold', hierarchy: null }],
      data: [['Navn', 'Alder', 'Innvandrerbakgrunn', 'Medisinsk forhold'],
        ['Eirik', '47', 'Togo', 'Ingen'],
        ['Ella', '30', 'Surinam', 'Ingen'],
        ['Solveig', '37', 'Malta', 'Ingen']],
      privacyModels: [{ privacyModel: 'KANONYMITY', params: { k: '2' } }],
      suppressionLimit: 0.1,
    };
    const actual = BuildPayload(dataset, attributes, privacyModels, suppressionLimit);
    expect(actual).toEqual(expected);
  });
});
