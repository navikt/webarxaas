import handleHierarchyUpload from '../handleHierarchyUpload';

describe('test for hanlde hierarchy upload', () => {
  let file;
  let attributes = [];
  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };

  beforeAll(() => {
    file = '29;[29, 30[;*\n30;[30, 40[;*\n31;[30, 40[;*\n32;[30, 40[;*';
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
  });

  it('add hierarchy to Alder', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: { name: undefined, data: [['29', '[29, 30[', '*'], ['30', '[30, 40[', '*'], ['31', '[30, 40[', '*'], ['32', '[30, 40[', '*']] } },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
    handleHierarchyUpload(file, 1, attributes, setAttributes);
    expect(attributes).toEqual(expected);
  });
});
