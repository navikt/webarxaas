import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import DistributionOfRisk from '../DistributionOfRiskTable/DistributionOfRisk';
import ReIdentificationRisk from '../ReIdentificationRiskTable/ReIdentificationRisk';
import RiskChart from '../ReIdentificationChart/RiskChart';
import RiskDistributionGraph from '../DistributionOfRiskGraph/RiskDistributionGraph';

const AnalysisResult = (props) => {
  const { response } = props;
  const content = (
    <div className="analysis-wrapper">
      <h4>Result</h4>
      <div className="analysis-result-wrapper">
        <div className="risk-barometer">
          <RiskChart risk={
            parseFloat(response.reIdentificationRisk.measures.estimated_prosecutor_risk) * 100}
          />
        </div>
        <Container>
          <Row>
            <Col sm={12}>
              <Ekspanderbartpanel tittel="Risk Metrics" border>
                <ReIdentificationRisk reIdentificationRisk={response.reIdentificationRisk} />
              </Ekspanderbartpanel>
            </Col>
            <Col sm={12}>
              <Ekspanderbartpanel tittel="Distribution Of Risk" border>
                <div className="risk-distribution-graph">
                  <RiskDistributionGraph RiskDistribution={response.distributionOfRisk
                    .riskIntervalList}
                  />
                </div>
                <div className="risk-distribution-metrics">
                  <Ekspanderbartpanel tittel="More Information" border>
                    <DistributionOfRisk riskIntervalList={response.distributionOfRisk
                      .riskIntervalList}
                    />
                  </Ekspanderbartpanel>
                </div>
              </Ekspanderbartpanel>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
    </div>
  );
  return content;
};
export default AnalysisResult;
