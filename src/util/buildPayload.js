const buildAttributesPayload = (attributes) => attributes.map((attribute) => ({
  ...attribute,
  hierarchy: attribute.hierarchy ? attribute.hierarchy.data : null,
}));

export default function BuildPayload(attributes,
  privacyModels = [], suppressionLimit = null) {
  const jsonModel = {};
  jsonModel.attributes = buildAttributesPayload(attributes);
  jsonModel.privacyModels = privacyModels;
  jsonModel.suppressionLimit = suppressionLimit / 100;
  return jsonModel;
}
