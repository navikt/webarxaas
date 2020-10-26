import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Row, Col, Alert, Container } from 'reactstrap';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import NavFrontendSpinner from 'nav-frontend-spinner';
import DistributionOfRiskTable from './DistributionOfRisk/DistributionOfRiskTable/DistributionOfRiskTable';
import ReIdentificationRiskTable from './ReIdentificationRisk/ReIdentificationRiskTable/ReIdentificationRiskTable';
import RiskBarometer from './ReIdentificationRisk/RiskBarometer/RiskBarometer';
import RiskBarometer2Bars from './ReIdentificationRisk/RiskBarometer2Bars/RiskBarometer2Bars';
import RiskDistributionGraph from './DistributionOfRisk/RiskDistributionGraph/RiskDistributionGraph';
import AttributeRiskGraph from './AttributeRisk/AttributeRiskGraph/AttributeRiskGraph';
import AttributeRiskTable from './AttributeRisk/AttributeRiskTable/AttributeRiskTable';
import './__css__/AnalysisWrapper.css';

const AnalyzeResultWrapper = (props) => {
  const {
    loadingAnalyze, response,
  } = props;
  const {
    message,
  } = response;

  let content = '';
  if (message) {
    return (
      <div className="result-wrapper">
        <Alert color="danger">
          <b>
            Something went wrong.
            <br />
            Error:
          </b>
          {message}
        </Alert>
      </div>
    );
  }
  if (loadingAnalyze) {
    content = (
      <div className="analysis-wrapper">
        <NavFrontendSpinner transparent />
      </div>
    );
  } else if (response.reIdentificationRisk) {
    content = (
      <div className="analysis-wrapper">
        <h4>Analysis Result</h4>
        <RiskBarometer risk={
          (parseFloat(response.reIdentificationRisk.measures.average_prosecutor_risk) * 100)
            .toFixed(2)
          }
        />
        <RiskBarometer2Bars
          highestRisk={(parseFloat(response.reIdentificationRisk.measures
            .highest_prosecutor_risk) * 100)
            .toFixed(2)}
          affectedRecords={(parseFloat(response.reIdentificationRisk.measures
            .records_affected_by_highest_prosecutor_risk) * 100)
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
              </Ekspanderbartpanel>
            </Col>
            <Col sm={12}>
              <Ekspanderbartpanel tittel="Distribution Of Risk table format" border>
                <DistributionOfRiskTable riskIntervalList={response.distributionOfRisk
                  .riskIntervalList}
                />
              </Ekspanderbartpanel>
            </Col>
            <Col sm={12}>
              <Ekspanderbartpanel tittel="Attribute Risk" border>
                <AttributeRiskGraph attributeRisk={response.attributeRisk} />
              </Ekspanderbartpanel>
            </Col>
            <Col sm={12}>
              <Ekspanderbartpanel tittel="Attribute Risk table format" border>
                <AttributeRiskTable attributeRisk={response.attributeRisk} />
              </Ekspanderbartpanel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return content;
};
export default AnalyzeResultWrapper;
