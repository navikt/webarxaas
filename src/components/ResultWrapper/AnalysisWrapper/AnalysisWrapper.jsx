import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import NavFrontendSpinner from 'nav-frontend-spinner';
import DistributionOfRiskTable from './DistributionOfRisk/DistributionOfRiskTable/DistributionOfRiskTable';
import ReIdentificationRiskTable from './ReIdentificationRisk/ReIdentificationRiskTable/ReIdentificationRiskTable';
import RiskChart from './ReIdentificationRisk/RiskChart/RiskChart';
import RiskDistributionGraph from './DistributionOfRisk/RiskDistributionGraph/RiskDistributionGraph';
import './__css__/AnalysisWrapper.css';

const AnalysisWrapper = (props) => {
  const { loadingAnalyze, response } = props;
  let content = '';

  if (loadingAnalyze) {
    content = (
      <div className="analysis-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (response) {
    console.log(response);
    content = (
      <div className="analysis-wrapper">
        <h4>Analysis Result</h4>
        <RiskChart risk={
          (parseFloat(response.reIdentificationRisk.measures.estimated_prosecutor_risk) * 100)
            .toFixed(2)}
        />
        <Container>
          <Row>
            <Col sm={12}>
              <Ekspanderbartpanel tittel="Risk Metrics" border>
                <ReIdentificationRiskTable reIdentificationRisk={response.reIdentificationRisk} />
              </Ekspanderbartpanel>
            </Col>
            <Col sm={12}>
              <Ekspanderbartpanel tittel="Distribution Of Risk" border>
                <RiskDistributionGraph RiskDistribution={response.distributionOfRisk
                  .riskIntervalList}
                />
                <Ekspanderbartpanel tittel="More Information" border>
                  <DistributionOfRiskTable riskIntervalList={response.distributionOfRisk
                    .riskIntervalList}
                  />
                </Ekspanderbartpanel>
              </Ekspanderbartpanel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return content;
};
export default AnalysisWrapper;
