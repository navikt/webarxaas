import React from 'react';
import ResultManual from '../ResultManual';
import { shallow } from '../../../../enzyme';
import RiskMetrics from '../ResultManualImages/RiskMetrics.png';
import RiskMetricsExpanded from '../ResultManualImages/RiskMetricsExpanded.png';
import DistributionOfRisk from '../ResultManualImages/DistributionOfRisk.png';
import MoreInformation from '../ResultManualImages/MoreInformation.png';
import RiskInterval from '../ResultManualImages/RiskInterval.png';
import AttributeRisk from '../ResultManualImages/AttributeRisk.png';
import AttributeRiskList from '../ResultManualImages/AttributeRiskList.png';

describe('ResultManual: Render test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ResultManual />);
  });

  it('Render test', () => {
    expect(wrapper.contains(<p>Click the panel that you want to expand.</p>)).toBeTruthy();
    expect(wrapper.contains(<p><b>Risk Metrics:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<p><b>Distribution Of Risk:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<p><b>Attribute Risk:</b></p>)).toBeTruthy();
    expect(wrapper.contains(<img src={RiskMetrics} alt="Risk Metrics" />)).toBeTruthy();
    expect(wrapper.contains(<img src={RiskMetricsExpanded} alt="Risk Metrics Expanded" />)).toBeTruthy();
    expect(wrapper.contains(<img src={DistributionOfRisk} alt="Distribution Of Risk" />)).toBeTruthy();
    expect(wrapper.contains(<img src={MoreInformation} alt="More Information Panel" />)).toBeTruthy();
    expect(wrapper.contains(<img src={RiskInterval} alt="Risk Interval" />)).toBeTruthy();
    expect(wrapper.contains(<img src={AttributeRisk} alt="Attribute Risk" />)).toBeTruthy();
    expect(wrapper.contains(<img src={AttributeRiskList} alt="Attribute Risk List" />)).toBeTruthy();
  });
});
