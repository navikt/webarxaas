import generateAnonymizationReport from '../generateAnonymizationReport';

describe('Test for generateAnonymizationReport', () => {
  let response;
  let analysisReportContent;
  let privacyModels;
  let suppressionLimit;

  beforeAll(() => {
    response = {
      anonymizeResult: {
        metrics: {
          attributeGeneralization: [
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
          ],
        },
      },
    };

    analysisReportContent = {
      content: [
        'test content',
        '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14',
      ],
    };

    privacyModels = [{ privacyModel: 'KANONYMITY', params: { k: '4' } },
      { privacyModel: 'TCLOSENESS_EQUAL_DISTANCE', params: { t: '1', column_name: 'Alder' } }];

    suppressionLimit = 50;
  });

  it('Test for generating anonymization report', () => {
    const anonymizationReport = generateAnonymizationReport(response, analysisReportContent,
      privacyModels, suppressionLimit);
    expect(anonymizationReport.content.length).toEqual(28);
    expect(anonymizationReport.content[14].text).toEqual('Anonymization Metrics');

    expect(anonymizationReport.content[18].table.body[1]).toEqual(['KANONYMITY', 'k: 4']);
    expect(anonymizationReport.content[18].table.body[2]).toEqual(['TCLOSENESS_EQUAL_DISTANCE', 't: 1\ncolumn name: Alder']);

    expect(anonymizationReport.content[22].table.body[1][1]).toEqual('50 %');

    expect(anonymizationReport.content[26].table.body[2]).toEqual(['test2', 'QUASI2', 4]);
  });
});
