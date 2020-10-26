import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import NavFrontendSpinner from 'nav-frontend-spinner';
import DistributionOfRiskTable from '../DistributionOfRisk/DistributionOfRiskTable/DistributionOfRiskTable';
import ReIdentificationRiskTable from '../ReIdentificationRisk/ReIdentificationRiskTable/ReIdentificationRiskTable';
import RiskBarometer from '../ReIdentificationRisk/RiskBarometer/RiskBarometer';
import RiskBarometer2Bars from '../ReIdentificationRisk/RiskBarometer2Bars/RiskBarometer2Bars';
import RiskDistributionGraph from '../DistributionOfRisk/RiskDistributionGraph/RiskDistributionGraph';
import AttributeRiskGraph from '../AttributeRisk/AttributeRiskGraph/AttributeRiskGraph';
import AttributeRiskTable from '../AttributeRisk/AttributeRiskTable/AttributeRiskTable';
import AnalyzeResultWrapper from '../AnalyzeResultWrapper';
import { shallow } from '../../../../../enzyme';

describe('AnalyzeResultWrapper: Render test', () => {
  let wrapper;
  let errorWrapper;
  let mockResponse;
  let mockErrorResponse;

  beforeAll(() => {
    mockErrorResponse = {
      message: 'error message',
    };
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
    errorWrapper = shallow(<AnalyzeResultWrapper response={mockErrorResponse} />);
    wrapper = shallow(<AnalyzeResultWrapper response={mockResponse} />);
  });

  it('Render Error test', () => {
    expect(errorWrapper.find('.result-wrapper').length).toEqual(1);
    expect(errorWrapper.contains(
      <b>
        Something went wrong.
        <br />
        Error:
      </b>,
    )).toBeTruthy();
  });

  it('Render test for loading/waiting for response', () => {
    const loadingAnalyze = true;
    const loadingResponse = {};
    const loadingWrapper = shallow(
      <AnalyzeResultWrapper response={loadingResponse} loadingAnalyze={loadingAnalyze} />,
    );
    expect(loadingWrapper.find('.analysis-wrapper').length).toEqual(1);
    expect(loadingWrapper.find(NavFrontendSpinner).length).toEqual(1);
  });

  it('Render test to show components when no errors', () => {
    expect(wrapper.find('.analysis-wrapper').length).toEqual(1);
    expect(wrapper.contains(<h4>Analysis Result</h4>)).toBeTruthy();
    expect(wrapper.find(Container).length).toEqual(1);
    expect(wrapper.find(Row).length).toEqual(1);
    expect(wrapper.find(Col).length).toEqual(5);
    expect(wrapper.find(Ekspanderbartpanel).length).toEqual(5);
    expect(wrapper.find(DistributionOfRiskTable).length).toEqual(1);
    expect(wrapper.find(ReIdentificationRiskTable).length).toEqual(1);
    expect(wrapper.find(RiskBarometer).length).toEqual(1);
    expect(wrapper.find(RiskBarometer2Bars).length).toEqual(1);
    expect(wrapper.find(RiskDistributionGraph).length).toEqual(1);
    expect(wrapper.find(AttributeRiskGraph).length).toEqual(1);
    expect(wrapper.find(AttributeRiskTable).length).toEqual(1);
  });
});
