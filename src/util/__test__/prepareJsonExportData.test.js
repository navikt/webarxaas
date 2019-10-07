import prepareJsonExportData from '../prepareJsonExportData';

describe('test for prepareJsonExportData', () => {
  let riskProfile;
  let attributes;
  let privacyModels;
  let suppressionLimit;
  let attributeGeneralization;

  beforeAll(() => {
    riskProfile = {
      attributeRisk: {
        quasiIdentifierRiskList: [{
          identifier: ['Alder'],
          distinction: 0.005,
          separation: 0.007,
        }, {
          identifier: ['Innvandrerbakgrunn'],
          distinction: 0.005,
          separation: 0.007,
        }],
      },
      distributionOfRisk: {
        riskIntervalList: [{
          interval: '[50,100]',
          recordsWithMaximalRiskWithinInterval: 1,
          recordsWithRiskWithinInterval: 0.4098,
        }, {
          interval: '[33.4,50)',
          recordsWithMaximalRiskWithinInterval: 0.5902,
          recordsWithRiskWithinInterval: 0.174,
        }],
      },
      reIdentificationRisk: {
        attackerSuccessRate: {
          successRates: {
            Journalist_attacker_success_rate: 0.5864,
            Marketer_attacker_success_rate: 0.5864,
            Prosecutor_attacker_success_rate: 0.5864,
          },
        },
        measures: {
          average_prosecutor_risk: 0.5863,
          estimated_journalist_risk: 1,
          estimated_marketer_risk: 0.5863,
          estimated_prosecutor_risk: 1,
          highest_journalist_risk: 1,
          highest_prosecutor_risk: 1,
          lowest_risk: 0.0833,
          population_uniques: 0.0346,
          records_affected_by_highest_journalist_risk: 0.4098,
          records_affected_by_highest_prosecutor_risk: 0.4098,
          records_affected_by_lowest_risk: 0.0024,
          sample_uniques: 0.4098,
        },
        quasiIdentifiers: ['Alder', 'Innvandrerbakgrunn'],
      },
    };
    attributes = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];

    privacyModels = [{ privacyModel: 'KANONYMITY', params: { k: '4' } },
      { privacyModel: 'TCLOSENESS_EQUAL_DISTANCE', params: { t: '1', column_name: 'Alder' } }];
    suppressionLimit = 1.00;

    attributeGeneralization = [
      {
        name: 'test1',
        type: 'QUASI',
        generalizationLevel: 3,
      },
      {
        name: 'test2',
        type: 'QUASI2',
        generalizationLevel: 4,
      },
    ];
  });

  it('test generating correct json data from the parameters', () => {
    const jsonData = prepareJsonExportData(riskProfile, attributes, privacyModels,
      suppressionLimit, attributeGeneralization);
    expect(jsonData.riskProfile.reIdentificationRisk
      .measures.estimated_marketer_risk).toEqual(undefined);
    expect(jsonData.riskProfile.reIdentificationRisk
      .measures.lowest_risk).toEqual(0.0833);
    expect(jsonData.attributeGeneralization).toEqual(attributeGeneralization);
    expect(jsonData.attributeTypeUsed[1]).toEqual({ field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING' });
  });
});
