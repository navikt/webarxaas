import handleHierarchyUpload from '../handleHierarchyUpload';

describe('test for hanlde hierarchy upload', () => {
  let file;
  let attributes = [];
  const setAttributes = (newAttributes) => {
    attributes = newAttributes;
  };

  beforeAll(() => {
    file = '29;[29, 30[;*\n30;[30, 40[;*\n31;[30, 40[;*\n32;[30, 40[;*';
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
  });

  it('add hierarchy to Alder', () => {
    const expected = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: [['29', '[29, 30[', '*'], ['30', '[30, 40[', '*'], ['31', '[30, 40[', '*'], ['32', '[30, 40[', '*']] },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING' },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING' }];
    handleHierarchyUpload(file, 1, attributes, setAttributes);
    expect(attributes).toEqual(expected);
  });
});
