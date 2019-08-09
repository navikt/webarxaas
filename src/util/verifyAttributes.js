export default function verifyAttributes(
  jsonImportArray, jsonStateArray, setSnackbar,
) {
  const snackbar = (
    variant, message, open,
  ) => {
    setSnackbar({
      open,
      variant,
      message,
    });
  };

  if (jsonImportArray.length !== jsonStateArray.length) {
    snackbar('error', 'Failed to import attributes. Attributes contained fewer or more indexes than attributes in dataset.', true);
    return false;
  }
  for (let i = 0; i < jsonStateArray.length; i += 1) {
    if (jsonStateArray[i].field !== jsonImportArray[i].field) {
      snackbar('error', 'Failed to import attributes. Attributes contained fewer or more indexes than attributes in dataset.', true);
      return false;
    }
  }
  snackbar('success', 'Attributes imported successfully.', true);
  return true;
}
