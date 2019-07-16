export default function handlePrivacyRemove(index, privacyModels, setPrivacyModels) {
  const models = [];
  privacyModels.forEach((element, i) => {
    // console.log(i, element);
    if (i !== index) {
      models.push(element);
      // console.log('Pushing because:', i, index, element);
    } else {
      // console.log('Not pushing because:', i, index, element);
    }
  });
  // console.log('Models: ', models);
  setPrivacyModels(models);
}
