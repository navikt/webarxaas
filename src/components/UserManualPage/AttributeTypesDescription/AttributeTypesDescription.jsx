import React from 'react';

const AttributeTypesDescription = () => {
  const content = (
    <div className="attribute-types">
      <p><b>Attribute types:</b></p>
      <ul>
        <li>
          <b>Identifying</b>
          {' '}
          attributes are associated with a high risk of re-identification.
          <br />
          Typical examples are names or Social Security Numbers.
        </li>
        <li>
          <b>Quasi-identifying</b>
          {' '}
          attributes can in combination be used for re-identification attacks.
          <br />
          Typical examples are gender, date of birth and ZIP codes.
        </li>
        <li>
          <b>Sensitive</b>
          {' '}
          attributes encode properties with which individuals are not willing to be linked with.
          <br />
          As such, they might be of interest to an attacker and, if disclosed,
          could cause harm to data subjects.
          <br />
          They will be kept unmodified but may be subject to further constraints,
          such as t-closeness or l-diversity.
          <br />
          Typical examples are diagnoses.
        </li>
        <li>
          <b>Insensitive</b>
          {' '}
          attributes are not associated with privacy risks.
        </li>
      </ul>
      <br />
      <p>Attribute types are by default set to quasi-identifying.</p>
    </div>
  );

  return content;
};

export default AttributeTypesDescription;
