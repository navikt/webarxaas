export default function handlePrivacyAdd(model, privacyModels, setPrivacyModels) {
  const index = privacyModels.findIndex((item) => item.privacyModel === 'KANONYMITY');
  if (model.privacyModel === 'KANONYMITY' && index !== -1) {
    const newPrivacyModels = privacyModels;
    newPrivacyModels[index] = model;
    setPrivacyModels([...newPrivacyModels]);
  } else {
    setPrivacyModels([...privacyModels, model]);
  }
}
