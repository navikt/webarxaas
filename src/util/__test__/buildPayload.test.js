import BuildPayload from '../buildPayload';

describe('Test for buildpayload', () => {
  let attributes;
  let privacyModels;
  let suppressionLimit;

  beforeAll(() => {
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
      privacyModels: [{ privacyModel: 'KANONYMITY', params: { k: '2' } }],
      suppressionLimit: 0.1,
    };
    const actual = BuildPayload(attributes, privacyModels, suppressionLimit);
    expect(actual).toEqual(expected);
  });
});
