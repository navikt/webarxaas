/* eslint-disable react/prop-types */
import React from 'react';
import { Select } from 'nav-frontend-skjema';
import HandleTypeSelect from '../../../../util/handleTypeSelect';
import 'react-table/react-table.css';

const AttributeTypeSelector = (props) => {
  const {
    index, defaultTypes, setDefaultTypes, types, attributes, setAttributes,
  } = props;

  const content = (
    <Select
      label=""
      value={defaultTypes[index]}
      onChange={(e) => {
        const currentTypes = [...defaultTypes];
        currentTypes[index] = e.target.value;
        setDefaultTypes(currentTypes);
        HandleTypeSelect(e.target, attributes[index].field, index, attributes, setAttributes);
      }}
    >
      {types.map(([value, label]) => (
        <option
          value={value}
          key={value}
        >
          {label}
        </option>
      ))}
    </Select>
  );

  return content;
};

export default AttributeTypeSelector;
