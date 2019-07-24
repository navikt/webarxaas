import toPercent from '../ratioToPercent';

describe('ratio to percent test', () => {
  let testData;
  it('function converts ratio correctly', () => {
    testData = 1;
    const expected = '100.00 %';
    const actual = toPercent(testData);
    expect(actual).toEqual(expected);
  });

  it('function returns NaN if unable to parse tesdata', () => {
    testData = 'not a number';
    const expected = 'NaN %';
    const actual = toPercent(testData);
    expect(actual).toEqual(expected);
  });
});
