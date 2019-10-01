import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import './__css__/UserManual.css';
import GeneralInformation from './GeneralInformation/GeneralInformation';
import AnalyzeManual from './AnalyzeManual/AnalyzeManual';
import AnonymizeManual from './AnonymizeManual/AnonymizeManual';

const UserManualPage = () => {
  const content = (
    <div className="UserManualPage">
      <h1>User Manual</h1>
      <Container>
        <Row>
          <Col sm={12}>
            <Ekspanderbartpanel tittel="General Information" border>
              <GeneralInformation />
            </Ekspanderbartpanel>
          </Col>
          <Col sm={12}>
            <Ekspanderbartpanel tittel="Analyze Manual" border>
              <AnalyzeManual />
            </Ekspanderbartpanel>
          </Col>
          <Col sm={12}>
            <Ekspanderbartpanel tittel="Anonymize Manual" border>
              <AnonymizeManual />
            </Ekspanderbartpanel>
          </Col>
        </Row>
      </Container>
    </div>
  );
  return content;
};
export default UserManualPage;
