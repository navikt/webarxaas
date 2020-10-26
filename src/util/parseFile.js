import papaparse from 'papaparse';

export default function ParseFile(
  file, setAttributes, setDataset, defaultAttributeType,
  setLoadingDataset, setSnackbar,
) {
  const snackbar = (
    open, variant, message,
  ) => {
    setSnackbar({
      open,
      variant,
      message,
    });
  };

  if (file) {
    papaparse.parse(file, {
      preview: 101,
      chunk(results) {
        if (results.data.length > 0) {
          const headers = results.data[0];
          const attributeTypeModel = defaultAttributeType;
          setAttributes(headers.map((field) => ({ field, attributeTypeModel })));
          setDataset(results.data);
          setLoadingDataset(false);
          snackbar(true, 'success', 'Dataset imported successfully.');
        }
      },
      error() {
        setLoadingDataset(false);
        snackbar(true, 'error', 'Failed to import dataset. Parse error.');
      },
    });
  } else {
    setLoadingDataset(false);
    snackbar(true, 'error', 'Failed to import dataset.');
  }
}
