import generateAnalysisReport from '../generateAnalysisReport';

describe('Test for generateAnalysisReport', () => {
  let response;
  let attribues;
  let document;

  beforeAll(() => {
    response = {
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

    attribues = [{ field: 'Navn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Alder', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Innvandrerbakgrunn', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null },
      { field: 'Medisinsk forhold', attributeTypeModel: 'QUASIIDENTIFYING', hierarchy: null }];

    document = {
      fileName: 'testFileName.csv',
      title: 'Test Title',
    };
  });

  it('Test for generating analysis report correctly', () => {
    const analysisReport = generateAnalysisReport(response, attribues, document);

    expect(analysisReport.content.length).toEqual(42);
    expect(analysisReport.content[0].columns[0].text).toEqual(document.title);
    expect(analysisReport.content[2].text[1]).toEqual(document.fileName);

    expect(analysisReport.content[18].table.body[1][0]).toEqual('Estimated risk');
    expect(analysisReport.content[18].table.body[1][1]).toEqual('100.00 %');

    expect(analysisReport.content[12].table.body[1][0]).toEqual('Navn');
    expect(analysisReport.content[12].table.body[3][0]).toEqual('Innvandrerbakgrunn');
  });
});
