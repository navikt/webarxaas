import React from 'react';
import PrivacyModelManager from './PrivacyModelManager';

const PrivacyModelWrapper = (props) => {
  const {
    attributes, privacyModels, setPrivacyModels,
  } = props;

  const sensitiveAttributes = attributes.filter((attributeInList) => attributeInList.attributeTypeModel === 'SENSITIVE');

  const content = (
    <PrivacyModelManager
      sensitiveAttributes={sensitiveAttributes}
      setPrivacyModels={setPrivacyModels}
      privacyModels={privacyModels}
    />
  );
  return content;
};
export default PrivacyModelWrapper;
