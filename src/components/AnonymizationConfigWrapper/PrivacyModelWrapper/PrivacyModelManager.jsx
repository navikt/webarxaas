import React from 'react';
import PrivacyModelForm from './PrivacyModelForm';
import handlePrivacyAdd from '../../../util/handlePrivacyAdd';


const PrivacyModelManager = (props) => {
  const { sensitiveAttributes, privacyModels, setPrivacyModels } = props;

  const defaultQuasiPrivModel = 'KANONYMITY';
  const defaultQuasiPrivModelParams = { k: 4 };
  const defaultSensitivePrivModel = 'LDIVERSITY_DISTINCT';
  const defaultSensitivePrivModelParam = { l: 2 };

  const loadPrivacyModels = () => {
    const foundKModel = privacyModels
      .findIndex(item => item.privacyModel === defaultQuasiPrivModel);

    if (foundKModel === -1) {
      handlePrivacyAdd(
        {
          privacyModel: defaultQuasiPrivModel,
          params: defaultQuasiPrivModelParams,
        },
        privacyModels,
        setPrivacyModels,
      );
    }

    sensitiveAttributes.forEach((attribute) => {
      const foundExsistingPrivModel = privacyModels
        .findIndex(item => item.params.field === attribute.field);

      if (foundExsistingPrivModel === -1) {
        const params = defaultSensitivePrivModelParam;
        params.field = attribute.field;
        handlePrivacyAdd(
          {
            privacyModel: defaultSensitivePrivModel,
            params,
          },
          privacyModels,
          setPrivacyModels,
        );
      }
    });
  };

  loadPrivacyModels();

  const privacyModelForms = privacyModels.map((privacyModel) => {
    let primaryLabel;
    let primaryValue;
    let secondaryLabel;
    let secondaryValue;
    if (privacyModel.params.k) { primaryLabel = 'k'; primaryValue = privacyModel.params.k; }
    if (privacyModel.params.l) { primaryLabel = 'l'; primaryValue = privacyModel.params.l; }
    if (privacyModel.params.t) { primaryLabel = 't'; primaryValue = privacyModel.params.t; }
    if (privacyModel.params.c) { secondaryLabel = 'c'; secondaryValue = privacyModel.params.c; }

    return (
      <PrivacyModelForm
        privacyModelType={privacyModel.privacyModel}
        fieldName={privacyModel.params.field}
        primaryParamLabel={primaryLabel}
        secondaryParamLabel={secondaryLabel}
        primaryParamValue={primaryValue}
        secondaryParamValue={secondaryValue}
        setPrivacyModels={setPrivacyModels}
        privacyModels={privacyModels}
      />
    );
  });

  const content = (
    <div className="privacyModelManager" style={{ padding: '1em' }}>
      <p>PrivacyModelManager</p>
      {privacyModelForms}
    </div>
  );
  return content;
};
export default PrivacyModelManager;
