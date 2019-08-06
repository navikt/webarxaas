import handlePrivacyAdd from '../handlePrivacyAdd';

describe('test for handlePrivacyAdd', () => {
  let model;
  let privacyModels = [];
  const setPrivacyModels = (newPrivacyModel) => {
    privacyModels = newPrivacyModel;
  };

  beforeAll(() => {
    privacyModels = [{ privacyModel: 'KANONYMITY', params: { k: '4' } },
      { privacyModel: 'TCLOSENESS_EQUAL_DISTANCE', params: { t: '1', column_name: 'Alder' } }];
    model = { privacyModel: 'LDIVERSITY_DISTINCT', params: { l: '2', column_name: 'Navn' } };
  });

  it('add 1 privacy model', () => {
    const expected = [{ privacyModel: 'KANONYMITY', params: { k: '4' } },
      { privacyModel: 'TCLOSENESS_EQUAL_DISTANCE', params: { t: '1', column_name: 'Alder' } },
      { privacyModel: 'LDIVERSITY_DISTINCT', params: { l: '2', column_name: 'Navn' } }];
    handlePrivacyAdd(model, privacyModels, setPrivacyModels);
    expect(privacyModels).toEqual(expected);
  });

  it('adding k-anon should overwrite existing k-anon', () => {
    const expected = [{ privacyModel: 'KANONYMITY', params: { k: '10' } },
      { privacyModel: 'TCLOSENESS_EQUAL_DISTANCE', params: { t: '1', column_name: 'Alder' } },
      { privacyModel: 'LDIVERSITY_DISTINCT', params: { l: '2', column_name: 'Navn' } }];
    const newModel = { privacyModel: 'KANONYMITY', params: { k: '10' } };
    handlePrivacyAdd(newModel, privacyModels, setPrivacyModels);
    expect(privacyModels).toEqual(expected);
  });
});
