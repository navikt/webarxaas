export default function prepareJsonExportData(riskProfile, attributes,
  privacyModels = null, suppressionLimit = null, attributeGeneralization = null) {
  const newAttributes = [];
  attributes.forEach((attribute) => {
    newAttributes.push(
      {
        field: attribute.field,
        attributeTypeModel: attribute.attributeTypeModel,
      },
    );
  });

  return {
    attributeTypeUsed: newAttributes,
    privacyModelsUsed: privacyModels,
    suppressionLimitUsed: suppressionLimit,
    attributeGeneralization,
    riskProfile,
  };
}
