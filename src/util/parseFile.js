import papaparse from 'papaparse';

export default function ParseFile(
  file, setAttributes, setDataset, defaultAttributeType,
  setLoadingDataset, setOpenSnackbar, setVariantSnackbar, setMessageSnackbar,
) {
  const snackbar = (
    variant, message, open,
  ) => {
    setVariantSnackbar(variant);
    setMessageSnackbar(message);
    setOpenSnackbar(open);
  };

  if (file) {
    papaparse.parse(file, {
      complete(results) {
        if (results.data.length > 0) {
          const headers = results.data[0];
          const attributeTypeModel = defaultAttributeType;
          setAttributes(headers.map(field => ({ field, attributeTypeModel })));
          setDataset(results.data);
          setLoadingDataset(false);
          snackbar('success', 'Dataset imported successfully.', true);
        }
      },
      error() {
        setLoadingDataset(false);
        snackbar('error', 'Failed to import dataset. Parse error.', true);
      },
    });
  } else {
    setLoadingDataset(false);
    snackbar('error', 'Failed to import dataset.', true);
  }
}
