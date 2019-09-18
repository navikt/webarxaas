import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import './__css__/UserManual.css';
import MoreInfoWrapper from './GeneralInformation/GeneralInformation';

const UserManual = () => {
  const content = (
    <div className="UserManual">
      <h1>User Manual</h1>
      <Container>
        <Row>
          <Col sm={12}>
            <Ekspanderbartpanel tittel="General Information" border>
              <MoreInfoWrapper />
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
export default UserManual;
