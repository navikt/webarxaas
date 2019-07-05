export default function BuildPayload(dataset, attributes) {
  const jsonModel = {};
  jsonModel.data = dataset;
  jsonModel.attributes = attributes;
  jsonModel.privacyModels = [];
  jsonModel.suppressionLimit = null;
  return jsonModel;
}
