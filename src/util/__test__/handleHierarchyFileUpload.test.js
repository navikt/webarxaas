import handleHierarchyFileUpload from '../handleHierarchyFileUpload';

describe('test hierarchy upload functionality', () => {
  let file;
  let hierarchies = [];
  const setHierarchies = (newHierarchies) => {
    hierarchies = newHierarchies;
  };
  let attributes = [];

  beforeAll(() => {
    file = '29;[29, 30[;*\n30;[30, 40[;*\n31;[30, 40[;*\n32;[30, 40[;*';
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];
  });

  it('add hierarchy to Alder', () => {
    const expected = [{
      attribute: 'Alder',
      hierarchy: '29;[29, 30[;*\n30;[30, 40[;*\n31;[30, 40[;*\n32;[30, 40[;*',
    }];
    handleHierarchyFileUpload(file, 1, attributes, hierarchies, setHierarchies);
    expect(hierarchies).toEqual(expected);
  });
});
