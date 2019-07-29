import HandleTypeSelect from '../handleTypeSelect';

describe('test for handling type select for attribute types', () => {
  let attributes = [];
  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };

  beforeAll(() => {
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
  });

  it('Change attribute of index 0', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'SENSITIVE' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
    HandleTypeSelect({ value: 'SENSITIVE' }, 'Navn', 0, attributes, setAttributes);
    expect(attributes).toEqual(expected);
  });

  it('Change attribute of index 3', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'SENSITIVE' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'IDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
    HandleTypeSelect({ value: 'IDENTIFYING' }, 'Innvandrerbakgrunn', 2, attributes, setAttributes);
    expect(attributes).toEqual(expected);
  });
});
