import handlePrivacyRemove from '../handlePrivacyRemove';

describe('test for handling privacy remove', () => {
  let privacyModels;
  const setPrivacyModels = (newPrivacyModels) => {
    privacyModels = newPrivacyModels;
  };

  beforeAll(() => {
    privacyModels = [{ privacyModel: 'KANONYMITY', params: { k: '4' } },
      { privacyModel: 'LDIVERSITY_DISTINCT', params: { l: '2', field: 'Navn' } },
      { privacyModel: 'TCLOSENESS_EQUAL_DISTANCE', params: { t: '1', field: 'Alder' } }];
  });

  it('Remove index 2', () => {
    const expected = [{ privacyModel: 'KANONYMITY', params: { k: '4' } },
      { privacyModel: 'TCLOSENESS_EQUAL_DISTANCE', params: { t: '1', field: 'Alder' } }];
    handlePrivacyRemove(1, privacyModels, setPrivacyModels);
    expect(privacyModels).toEqual(expected);
  });
});
