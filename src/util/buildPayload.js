export default function BuildPayload(dataset, attributes,
  privacyModels, suppressionLimit) {
  const jsonModel = {};
  jsonModel.data = dataset;
  jsonModel.attributes = attributes;
  jsonModel.privacyModels = privacyModels;
  jsonModel.suppressionLimit = suppressionLimit;
  return jsonModel;
}
