import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PrivacyModelForm = (props) => {
  const {
    privacyModelType, fieldName, primaryParamLabel, secondaryParamLabel, primaryParamValue, secondaryParamValue, setPrivacyModels, privacyModels,
  } = props;

  const secondaryparamField = secondaryParamLabel
    // eslint-disable-next-line react/jsx-one-expression-per-line
    ? [<Col md={1}>{secondaryParamLabel}:</Col>, <Col md={1} style={{ padding: 0 }}><input name="secondaryparam" type="number" defaultValue={secondaryParamValue} /></Col>]
    : [<Col md={2} />];

  const updatePrivacyModelState = (e) => {
    console.log(e.target.name, e.target.value);
    const index = (privacyModels.findIndex(privModel => privModel.params.field === fieldName));
    privacyModels[index] = {
      ...privacyModels[index],
      params: {
        [primaryParamLabel]: e.target.value,
        field: fieldName,
      },
    };
    setPrivacyModels(privacyModels);
    console.log(privacyModels);
  };

  const content = (
    <Row>
      <Col md={4} >{privacyModelType}</Col>
      <Col md={4}>{fieldName}</Col>
      {secondaryparamField}
      <Col md={1} style={{ padding: '2' }}>
        {primaryParamLabel}
        :
      </Col>
      <Col md={1} style={{ padding: 0 }}><input name="primaryParam" type="number" defaultValue={primaryParamValue} onChange={updatePrivacyModelState} /></Col>
    </Row>
  );
  return content;
};
export default PrivacyModelForm;
