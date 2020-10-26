import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Row, Col } from 'react-bootstrap';

const PrivacyModelForm = (props) => {
  const {
    privacyModelType, fieldName, primaryParamLabel, secondaryParamLabel, primaryParamValue,
    secondaryParamValue, setPrivacyModels, privacyModels,
  } = props;

  const updatePrivacyModelState = (e) => {
    const params = {};
    if (fieldName) params.column_name = fieldName;
    if (e.target.name === 'primaryParam') {
      params[primaryParamLabel] = e.target.value;
      if (secondaryParamLabel) params[secondaryParamLabel] = secondaryParamValue;
    }
    if (e.target.name === 'secondaryParam') {
      params[primaryParamLabel] = primaryParamValue;
      params[secondaryParamLabel] = e.target.value;
    }
    const index = privacyModels
      .findIndex((privModel) => privModel.params.column_name === fieldName || (privModel.params.k && primaryParamLabel === 'k'));

    privacyModels[index] = {
      privacyModel: privacyModelType,
      params,
    };
    setPrivacyModels(privacyModels);
  };

  // Check if secondary parameters exsists, and if so creates an input field
  const secondaryparamField = secondaryParamLabel
    // eslint-disable-next-line react/jsx-one-expression-per-line
    ? [<Col key="secondaryParamLabel" md={1}>{secondaryParamLabel}:</Col>, <Col key="secondaryParam" md={1} style={{ padding: 0 }}><input name="secondaryParam" type="number" defaultValue={secondaryParamValue} onChange={updatePrivacyModelState} /></Col>]
    : [<Col key="secondaryParamPlaceholder" md={2} />];

  // Triggered on selected item change, and sets a new default value for the selected item
  const handlePrivModelChange = (e) => {
    const kParamsDefault = {
      k: 4,
    };
    const lParamsDefault = {
      l: 2,
      column_name: fieldName,
    };
    const lcParamsDefault = {
      l: 3,
      c: 2,
      column_name: fieldName,
    };
    const tParamsDefault = {
      t: 0.01,
      column_name: fieldName,
    };

    const kModelsList = ['KANONYMITY'];
    const lModelsList = ['LDIVERSITY_DISTINCT', 'LDIVERSITY_GRASSBERGERENTROPY', 'LDIVERSITY_SHANNONENTROPY'];
    const lcModelsList = ['LDIVERSITY_RECURSIVE'];
    const tModelsList = ['TCLOSENESS_ORDERED_DISTANCE', 'TCLOSENESS_EQUAL_DISTANCE'];

    let defaultParams = {};
    if (kModelsList.includes(e.target.value)) defaultParams = kParamsDefault;
    if (lModelsList.includes(e.target.value)) defaultParams = lParamsDefault;
    if (lcModelsList.includes(e.target.value)) defaultParams = lcParamsDefault;
    if (tModelsList.includes(e.target.value)) defaultParams = tParamsDefault;

    const index = (privacyModels.findIndex((privModel) => privModel.params.column_name === fieldName || (privModel.params.k && primaryParamLabel === 'k')));

    privacyModels[index] = {
      privacyModel: e.target.value,
      params: defaultParams,
    };
    const newPrivacyModels = [...privacyModels];
    setPrivacyModels(newPrivacyModels);
  };

  // Renders the aviable selectable items for the dropdown
  const getSelectItems = () => {
    const quasiPrivModels = [{ model: 'KANONYMITY', label: 'K-Anonymity' }];
    const sensitivePrivModels = [
      { model: 'LDIVERSITY_DISTINCT', label: 'L-Diversity Distinct' },
      { model: 'LDIVERSITY_GRASSBERGERENTROPY', label: 'L-Diversity Grassbergen Entropy' },
      { model: 'LDIVERSITY_SHANNONENTROPY', label: 'L-Diversity Shannon Entropy' },
      { model: 'LDIVERSITY_RECURSIVE', label: 'L-Diversity Recursive' },
      { model: 'TCLOSENESS_ORDERED_DISTANCE', label: 'T-Closeness Ordered Distance' },
      { model: 'TCLOSENESS_EQUAL_DISTANCE', label: 'T-Closeness Equal Distance' },
    ];
    let privModels;
    if (quasiPrivModels.findIndex((e) => (e.model === privacyModelType)) !== -1) {
      privModels = quasiPrivModels;
    } else if (sensitivePrivModels.findIndex((e) => (e.model === privacyModelType)) !== -1) {
      privModels = sensitivePrivModels;
    }
    return privModels.map((privModel, index) => (
      <MenuItem key={index.toString().concat(privModel)} value={privModel.model} style={{ width: 'inherit' }}>
        {privModel.label}
      </MenuItem>
    ));
  };
  const content = (
    <Row>
      <Col md={4} style={{ overflow: 'hidden' }}>
        <Select
          value={privacyModelType}
          onChange={handlePrivModelChange}
        >
          {getSelectItems()}
        </Select>
      </Col>
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
