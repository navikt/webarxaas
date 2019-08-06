import HandleTypeSelect from '../handleTypeSelect';

describe('test for handling type select for attribute types', () => {
  let attributes = [];
  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };

  beforeAll(() => {
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
  });

  it('Change attribute of index 0', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'SENSITIVE', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
    HandleTypeSelect({ value: 'SENSITIVE' }, 'Navn', 0, attributes, setAttributes);
    expect(attributes).toEqual(expected);
  });

  it('Change attribute of index 3', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'SENSITIVE', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'IDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
    HandleTypeSelect({ value: 'IDENTIFYING' }, 'Innvandrerbakgrunn', 2, attributes, setAttributes);
    expect(attributes).toEqual(expected);
  });
});
