import updateSuppressionLimit from '../updateSuppressionLimit';

describe('Test for updating suppression limit', () => {
  let suppressionLimit = 0;
  const setSuppressionLimit = (newLimit) => {
    suppressionLimit = newLimit;
  };

  it('test that limit is correctly set', () => {
    updateSuppressionLimit(90, setSuppressionLimit);
    expect(suppressionLimit).toEqual(90);
  });

  it('value higher than 100 will set suppression limit at 100', () => {
    updateSuppressionLimit(100000, setSuppressionLimit);
    expect(suppressionLimit).toEqual(100);
  });

  it('value lower than 0 will set suppression limit at 0', () => {
    updateSuppressionLimit(-100000, setSuppressionLimit);
    expect(suppressionLimit).toEqual(0);
  });
});
