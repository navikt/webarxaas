import handleHierarchyUpload from '../handleHierarchyUpload';

describe('test for handle hierarchy upload', () => {
  let file;
  let attributes = [];
  const hierarchies = [];
  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };

  beforeAll(() => {
    file = '29;[29, 30[;*\n30;[30, 40[;*\n31;[30, 40[;*\n32;[30, 40[;*';
    hierarchies.push(file);
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
  });

  it('add hierarchy to Alder', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: { data: 0, name: undefined } },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
    handleHierarchyUpload(file, 1, attributes, setAttributes, hierarchies);
    expect(attributes).toEqual(expected);
  });
});
