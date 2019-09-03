import React from 'react';
import AnalyzeButton from '../AnalyzeButton/AnalyzeButton';
import AnalyzeResultWrapper from '../AnalyzeResultWrapper/AnalyzeResultWrapper';
import AnalyzeWrapper from '../AnalyzeWrapper';
import { shallow } from '../../../../enzyme';

describe('AnalyzeWrapper: Render test', () => {
  let wrapper;
  let datasetFile;
  let attributes;
  let endpoint;
  let loadingAnalyze;
  let analyzeResponse;
  const setLoadingAnalyze = (newLoadingAnalyze) => {
    loadingAnalyze = newLoadingAnalyze;
  };
  const setAnalyzeResponse = (newAnalyzeResponse) => {
    analyzeResponse = newAnalyzeResponse;
  };

  beforeAll(() => {
    datasetFile = { content: { data: [['Navn', 'Alder'], ['Per', '28'], ['Oda', '28']] } };
    attributes = [{ attributeTypeModel: 'QUASIIDENTIFYING', field: 'Navn', hierarchy: null },
      { attributeTypeModel: 'QUASIIDENTIFYING', field: 'Alder', hierarchy: null }];
    endpoint = 'analyze';
    loadingAnalyze = false;
    analyzeResponse = {
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

    wrapper = shallow(
      <AnalyzeWrapper
        datasetFile={datasetFile}
        attributes={attributes}
        endpoint={endpoint}
        loadingAnalyze={loadingAnalyze}
        analyzeResponse={analyzeResponse}
        setLoadingAnalyze={setLoadingAnalyze}
        setAnalyzeResponse={setAnalyzeResponse}
      />,
    );
  });

  it('Render test', () => {
    expect(wrapper.find(AnalyzeButton).length).toEqual(1);
    expect(wrapper.find(AnalyzeResultWrapper).length).toEqual(1);
  });
});
