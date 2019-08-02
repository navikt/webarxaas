import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PrivacyModelForm = (props) => {
  const {
    privacyModelType, fieldName, primaryParamLabel, secondaryParamLabel, primaryParamValue, secondaryParamValue, setPrivacyModels,
  } = props;

  const secondaryparamField = secondaryParamLabel
    // eslint-disable-next-line react/jsx-one-expression-per-line
    ? [<Col md={1}>{secondaryParamLabel}:</Col>, <Col md={1} style={{ padding: 0 }}><input name="secondaryparam" type="number" defaultValue={secondaryParamValue} /></Col>]
    : [<Col md={2} />];

    console.log("primaryvalue:", primaryParamValue);
  const content = (
    <Row>
      <Col md={4} >{privacyModelType}</Col>
      <Col md={4}>{fieldName}</Col>
      {secondaryparamField}
      <Col md={1} style={{ padding: '2' }}>
        {primaryParamLabel}
        :
      </Col>
      <Col md={1} style={{ padding: 0 }} ><input name="name" type="number" defaultValue={primaryParamValue} /></Col>
    </Row>
  );
  return content;
};
export default PrivacyModelForm;
