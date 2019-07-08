import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Row, Col, Container } from 'reactstrap';
import DistributionOfRisk from '../DistributionOfRiskTable/DistributionOfRisk';
import ReIdentificationRisk from '../ReIdentificationRiskTable/ReIdentificationRisk';
import RiskChart from '../ReIdentificationChart/RiskChart';
import RiskDistributionGraph from '../DistributionOfRiskGraph/RiskDistributionGraph';

const AnalysisResult = (props) => {
  const { response } = props;
  const content = (
    <div>
      <h4>Result</h4>
      <Container>
        <Row>
          <Col sm={12}>
            <RiskChart risk={
              parseFloat(response.reIdentificationRisk.measures.estimated_prosecutor_risk) * 100}
            />
          </Col>
          <Col sm={12}>
            <Ekspanderbartpanel tittel="Risk Metrics" border>
              <ReIdentificationRisk reIdentificationRisk={response.reIdentificationRisk} />
            </Ekspanderbartpanel>
          </Col>
          <Col sm={12}>
            <h3>Distribution of risk graph</h3>
          </Col>
          <Col sm={12}>
            <Ekspanderbartpanel tittel="Distribution Of Risk" border>
              <RiskDistributionGraph RiskDistribution={response.distributionOfRisk
                .riskIntervalList}
              />
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
      <br />
    </div>
  );
  return content;
};
export default AnalysisResult;
