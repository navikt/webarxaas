const buildAttributesPayload = attributes => attributes.map(attribute => ({
  ...attribute,
  hierarchy: attribute.hierarchy ? attribute.hierarchy.data : null,
}));

export default function BuildPayload(dataset, attributes,
  privacyModels, suppressionLimit) {
  const jsonModel = {};
  jsonModel.data = dataset;
  jsonModel.attributes = buildAttributesPayload(attributes);
  jsonModel.privacyModels = privacyModels;
  jsonModel.suppressionLimit = suppressionLimit / 100;
  return jsonModel;
}
