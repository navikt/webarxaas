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
      <h4>Analyze</h4>
      <Container>
        <Row>
          <Col sm={5}>
            <RiskChart risk={
              parseFloat(response.reIdentificationRisk.measures.estimated_prosecutor_risk) * 100}
            />
          </Col>
          <Col sm={1} />
          <Col sm={5}>
            <Ekspanderbartpanel tittel="More Information" border>
              <ReIdentificationRisk reIdentificationRisk={response.reIdentificationRisk} />
            </Ekspanderbartpanel>
          </Col>
          <Col sm={1} />
          <Col sm={6}>
            <RiskDistributionGraph RiskDistribution={response.distributionOfRisk
              .riskIntervalList
            }
            />
          </Col>
          <Col sm={1} />
          <Col sm={6}>
            <Ekspanderbartpanel tittel="More Information" border>
              <DistributionOfRisk riskIntervalList={response.distributionOfRisk.riskIntervalList} />
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
