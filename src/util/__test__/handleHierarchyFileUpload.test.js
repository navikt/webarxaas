import handleHierarchyFileUpload from '../handleHierarchyFileUpload';

describe('test hierarchy upload functionality', () => {
  let file;
  let hierarchies = [];
  const setHierarchies = (newHierarchies) => {
    hierarchies = newHierarchies;
  };

  beforeAll(() => {
    file = '29;[29, 30[;*\n30;[30, 40[;*\n31;[30, 40[;*\n32;[30, 40[;*';
  });

  it('add hierarchy to Alder', () => {
    const expected = ['29;[29, 30[;*\n30;[30, 40[;*\n31;[30, 40[;*\n32;[30, 40[;*'];
    handleHierarchyFileUpload(file, hierarchies, setHierarchies);
    expect(hierarchies).toEqual(expected);
  });
});
