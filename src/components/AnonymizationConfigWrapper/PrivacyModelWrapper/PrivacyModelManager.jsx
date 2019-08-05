import React from 'react';
import PrivacyModelForm from './PrivacyModelForm';
import handlePrivacyAdd from '../../../util/handlePrivacyAdd';
import handlePrivacyRemove from '../../../util/handlePrivacyRemove';


const PrivacyModelManager = (props) => {
  const { sensitiveAttributes, privacyModels, setPrivacyModels } = props;

  const defaultQuasiPrivModel = 'KANONYMITY';
  const defaultQuasiPrivModelParams = { k: 4 };
  const defaultSensitivePrivModel = 'LDIVERSITY_DISTINCT';
  const defaultSensitivePrivModelParam = { l: 2 };

  const loadPrivacyModels = () => {
    sensitiveAttributes.forEach((attribute) => {
      const foundExsistingPrivModel = privacyModels
        .findIndex(item => item.params.column_name === attribute.field);

      if (foundExsistingPrivModel === -1) {
        const params = defaultSensitivePrivModelParam;
        params.column_name = attribute.field;
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
  };

  /*   const cleanupPrivacyModels = () => {
      privacyModels.forEach((privacyModel, privacyModelIndex) => {
        const foundWithSensitiveAttribute = sensitiveAttributes
          .findIndex(attribute => attribute.field === privacyModel.params.field);
        console.log(foundWithSensitiveAttribute);
        if (foundWithSensitiveAttribute === -1) {
          handlePrivacyRemove(privacyModelIndex, privacyModels, setPrivacyModels);
        }
      });
    }; */

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
        fieldName={privacyModel.params.column_name}
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
      {privacyModelForms}
    </div>
  );
  return content;
};
export default PrivacyModelManager;
