import React from 'react';
import { Knapp } from 'nav-frontend-knapper';
import AnalyzeReportWrapper from '../AnalyzeReportWrapper';
import { shallow } from '../../../../../enzyme';

describe('render test for AnalyzeReportWrapper', () => {
  let wrapper;
  let mockResponse;

  beforeAll(() => {
    mockResponse = {
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
    wrapper = shallow(<AnalyzeReportWrapper response={mockResponse} />);
  });

  it('render test for buttons', () => {
    expect(wrapper.find(Knapp).length).toEqual(2);
  });
});
