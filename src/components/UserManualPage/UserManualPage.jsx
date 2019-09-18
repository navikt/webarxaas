import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import './__css__/UserManual.css';
import GeneralInformation from './GeneralInformation/GeneralInformation';

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
            <Ekspanderbartpanel tittel="Analysis Manual" border>
              Test
              <Ekspanderbartpanel tittel="More Information" border>
                Test
              </Ekspanderbartpanel>
            </Ekspanderbartpanel>
          </Col>
          <Col sm={12}>
            <Ekspanderbartpanel tittel="Anonymize Information" border>

              <Ekspanderbartpanel tittel="More Information" border>
                Test
              </Ekspanderbartpanel>
            </Ekspanderbartpanel>
          </Col>
        </Row>
      </Container>
    </div>
  );
  return content;
};
export default UserManualPage;