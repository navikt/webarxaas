import React from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import { Row, Col, Container } from 'reactstrap';
import DistributionOfRisk from '../DistributionOfRiskTable/DistributionOfRisk';
import ReIdentificationRisk from '../ReIdentificationRiskTable/ReIdentificationRisk';
import RiskBullet from '../RiskBullet/RiskBullet';

const AnalysisResult = (props) => {
  const { arxResp } = props;
  const content = (
    <div>
      <h4>Analyze</h4>
      <Container>
        <Row>
          <Col sm={5}>
            <RiskBullet risk={arxResp.reIdentificationRisk.measures.estimated_prosecutor_risk} />
          </Col>
          <Col sm={1} />
          <Col sm={5}>
            <Ekspanderbartpanel tittel="More Information" border>
              <ReIdentificationRisk reIdentificationRisk={arxResp.reIdentificationRisk} />
            </Ekspanderbartpanel>
          </Col>
          <Col sm={1} />
          <Col sm={6}>
            <DistributionOfRisk riskIntervalList={arxResp.distributionOfRisk.riskIntervalList} />
          </Col>
          <Col sm={1} />
          <Col sm={6}>
            <Ekspanderbartpanel tittel="More Information" border>
              <DistributionOfRisk riskIntervalList={arxResp.distributionOfRisk.riskIntervalList} />
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
